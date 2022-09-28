import express from 'express';
import fs from 'fs';
import cors = require('cors');
import { join } from 'path';

const app = express();
const PORT = process.env.PORT || 5000

const allowedOrigins = ['http://localhost:5173', 'https://codebin-dun.vercel.app/'];
const options = {
  origin: allowedOrigins
};

app.use(cors(options));

app.get('/api', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

    res.json({
      a: 'e'
    });
})

app.listen(PORT, () => {
    console.log('Listening on http://localhost:5000/');
})

module.exports = app;
