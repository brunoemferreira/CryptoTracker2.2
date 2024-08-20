const express = require("express");
require("express-async-errors");
const cors = require("cors");
const helmet = require("helmet");

// Carregamento do Aplicativo
const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

// **** Configurações do Backend ( feita a partir de middlewares ) ****

app.post("/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === "brunoemf@gmail.com" && password === "123456") {
    res.sendStatus(200);
  } else res.sendStatus(401);
});

app.post("/logout", (req, res, next) => {
  res.sendStatus(200);
});

// Middleware de erros
app.use(require("./middlewares/errorMiddleware"));

module.exports = app;
