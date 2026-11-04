const express = require('express');
const path = require('path');
const pokeneaRoutes = require('./routes/pokenea.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', pokeneaRoutes);

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Ruta no encontrada. Rutas válidas: GET /api/pokenea o GET /pokenea'
  });
});

module.exports = app;
