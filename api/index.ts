import express from 'express';
import cors = require('cors');
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref } from 'firebase/database';

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

const fbApp = initializeApp(firebaseConfig);
const database = getDatabase(fbApp);

const app = express();
const PORT = process.env.PORT ?? 5000;

const allowedOrigins = ['http://localhost:5173', 'https://codebin-dun.vercel.app/'];
const options = {
	origin: allowedOrigins
};

app.use(cors(options));

app.get('/api', async (req, res) => {
	res.type('text');

  res.send('Paste API')
});

app.get('/api/pastes', async (req, res) => {
	res.type('json');
});

app
	.route('/api/pastes/:id')
	.post(async (req, res) => {
    res.type('json');
		const id = req.params['id'];

		set(ref(database, 'pastes/' + id), {
			content: req.body
		});

		res.json({
			id: id
		});
	})
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
