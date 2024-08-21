const express = require("express");
require("express-async-errors");
const cors = require("cors");
const helmet = require("helmet");

const { doLogin, doLogout } = require("./controllers/authController");
const { getSettings } = require("./controllers/settingsController");
const authMiddleware = require("./middlewares/authMiddleware");

// Carregamento do Aplicativo
const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

// **** Configurações do Backend ( feita a partir de middlewares ) ****
app.get("/settings", authMiddleware, getSettings);

app.post("/login", doLogin);

app.post("/logout", doLogout);

// Middleware de erros
app.use(require("./middlewares/errorMiddleware"));

module.exports = app;
