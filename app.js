const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Esta es una respuesta sencilla');
});

// 👉 Ruta suma
app.get('/suma', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const resultado = a + b;

    res.json({ resultado });
});

module.exports = app;