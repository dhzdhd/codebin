import express from 'express';
import cors = require('cors');
import dotenv from 'dotenv';
import uniqid from 'uniqid';
import bodyParser from 'body-parser';
import mongoose, { Schema } from 'mongoose';

dotenv.config({ path: '.env' });

const app = express();

const init = async () => await mongoose.connect(process.env.MONGO_URI as string);
init();

const PORT = process.env.PORT ?? 5000;

const serverUrl = process.env.SERVER_URL ?? 'http://localhost:5173';
const allowedOrigins = [serverUrl];
const options = {
	origin: allowedOrigins
};

interface IPaste {
	id: string;
	content: string;
	language: string;
	date: Date;
}

const PasteSchema = new Schema<IPaste>({
	id: { type: String },
	content: { type: String },
	language: { type: String },
	date: { type: Date }
});
const PasteModel = mongoose.model<IPaste>('pastes', PasteSchema);

app.use(cors(options));
app.use(bodyParser.json());

app.get('/api', async (req, res) => {
	res.type('text');

	res.send('CodeBin API');
});

app
	.route('/api/pastes')
	.post(async (req, res) => {
		res.type('json');

		const id = uniqid();
		console.log(JSON.stringify(req.body));

		const paste = new PasteModel({
			id: id,
			content: req.body.content,
			language: req.body.language,
			date: Date.now()
		});

		try {
			await paste.save();

			res.json({
				id: id.substring(7),
				url: `${serverUrl}/api/${id}`
			});
		} catch (err) {
			res.status(500).json({
				message: 'Error in saving data!'
			});
		}
	})
	.get(async (req, res) => {
		res.type('json');

		try {
			res.send(await PasteModel.find({}));
		} catch (err) {
			res.status(500).send({
				message: 'Error in fetching data!'
			});
		}
	});

app
	.route('/api/pastes/:id')
	.get(async (req, res) => {
		res.type('json');
		const id = req.params['id'];

		try {
			const data = await PasteModel.findOne({ id: id });
			if (data === null) {
				throw 'Data not found';
			}

			res.json({ ...data?.toJSON(), url: `${serverUrl}/api/${id}` });
		} catch (err) {
			res.status(500).json({ message: 'Error in fetching data!' });
		}
	})
	.delete(async (req, res) => {
		res.type('json');
		const id = req.params['id'];

		console.log(id);

		try {
			await PasteModel.deleteOne({ id: id });

			res.json({
				message: 'Successfully deleted paste!'
			});
		} catch (err) {
			res.status(500).json({
				message: 'Error in deleting data!'
			});
		}
	});

app.listen(PORT, () => {
	console.log('Listening on http://localhost:5000/');
});

export { app };
