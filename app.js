// app.js
const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes/firma.routes');

app.use(express.json());

// Configura las rutas
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});