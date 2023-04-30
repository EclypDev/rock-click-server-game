const express = require('express');
const ws = require('ws');

const app = express();

app.use(express.static('public'));

const server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});

const wss = new ws.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (message) => {
        console.log(message);
    });
    ws.on('close', () => {
        console.log('Client disconnected');
    });
    ws.on('error', (error) => {
        console.log(error);
    });
    ws.on('open', () => {
        console.log('Client connected');
    });
});