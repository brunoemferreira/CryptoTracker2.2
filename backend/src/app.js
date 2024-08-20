const express = require("express");
require("express-async-errors");
const cors = require("cors");
const helmet = require("helmet");

const authController = require("./controllers/authController");

// Carregamento do Aplicativo
const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

// **** Configurações do Backend ( feita a partir de middlewares ) ****
app.post("/login", authController.doLogin);

app.post("/logout", authController.doLogout);

// Middleware de erros
app.use(require("./middlewares/errorMiddleware"));

module.exports = app;
