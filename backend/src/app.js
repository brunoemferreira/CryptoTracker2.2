const express = require("express");

// Carregamento do Aplicativo
const app = express();

// Configurações do Backend ( feita a partir de middlewares )
app.use("/", (req, res, next) => {
  res.send("hello wordl");
});

module.exports = app;
