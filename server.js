require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static('.'));

// Proxy endpoint for Anthropic API
app.post('/api/chat', async (req, res) => {
    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'x-api-key': process.env.ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        // Set headers for SSE
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // Stream the response
        response.body.pipe(res);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`\n✅ Server läuft auf http://localhost:${PORT}`);
    console.log(`📄 Öffnen Sie http://localhost:${PORT}/landing.html in Ihrem Browser`);
    console.log(`\n⚡ Drücken Sie Ctrl+C um den Server zu beenden\n`);
    
    // Prüfe ob API Key vorhanden
    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'YOUR_ANTHROPIC_API_KEY_HERE') {
        console.warn('⚠️  WARNUNG: Kein gültiger API-Schlüssel gefunden!');
        console.warn('⚠️  Bitte fügen Sie Ihren Anthropic API-Schlüssel in die .env Datei ein\n');
    }
});