import express from 'express';
import cors = require('cors');
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref } from 'firebase/database';
import dotenv from 'dotenv';
import uniqid from 'uniqid';
import bodyParser from 'body-parser';

dotenv.config({ path: '.env' });

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATABASE_URL,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID
};

console.log(JSON.stringify(firebaseConfig));

const fbApp = initializeApp(firebaseConfig);
const database = getDatabase(fbApp);

const app = express();

const PORT = process.env.PORT ?? 5000;

const serverUrl = process.env.SERVER_URL ?? 'http://localhost:5173'
const allowedOrigins = [serverUrl];
const options = {
	origin: allowedOrigins
};

const checkId = (id: string): boolean => {
	return id.length == 10 ? true : false;
};

app.use(cors(options));
app.use(bodyParser.json())

app.get('/api', async (req, res) => {
	res.type('text');

	res.send('Paste API');
});

app
	.route('/api/pastes')
	.post(async (req, res) => {


		res.type('json');

		const id = uniqid('pastes/');
		console.log(JSON.stringify(req.body));

		set(ref(database, id), {
			id: id,
			content: req.body.content,
			language: req.body.language,
		});

		res.json({
			id: id.substring(7),
			url: `${serverUrl}/api/${id}`
		});
	});

app
	.route('/api/pastes/:id')
	.get(async (req, res) => {
		res.type('json');
		const id = req.params['id'];

		res.json({
			id: id
		});
	});

app.listen(PORT, () => {
	console.log('Listening on http://localhost:5000/');
});

module.exports = app;
