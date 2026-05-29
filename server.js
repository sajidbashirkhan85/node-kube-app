const express = require('express');
const os = require('os');
const app = express();
const PORT = 3000;

let visitorCount = 0;

app.get('/', (req, res) => {
    visitorCount++;
    const containerId = os.hostname();
    const currentTimestamp = new Date().toISOString();

    res.send(`
        <html>
        <body style="font-family: Arial; text-align: center; margin-top: 50px;">
            <h1>Kubernetes Containerized Node.js App</h1>
            <p><strong>Timestamp:</strong> ${currentTimestamp}</p>
            <p><strong>Container ID:</strong> ${containerId}</p>
            <p><strong>Visitor Counter:</strong> ${visitorCount}</p>
        </body>
        </html>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`App running on port ${PORT}`);
});