const express = require("express");
require("express-async-errors");
const cors = require("cors");
const helmet = require("helmet");

// Carregamento do Aplicativo
const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

// Configurações do Backend ( feita a partir de middlewares )
app.use("/", (req, res, next) => {
  res.send("hello wordl");
});

// Middleware de erros
app.use(require("./middlewares/errorMiddleware"));

module.exports = app;
