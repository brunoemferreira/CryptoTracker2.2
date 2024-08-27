const express = require("express");
require("express-async-errors");
const cors = require("cors");
const helmet = require("helmet");

const { doLogin, doLogout } = require("./controllers/authController");
const {
  getSettings,
  updateSettings,
} = require("./controllers/settingsController");
const authMiddleware = require("./middlewares/authMiddleware");
const morgan = require("morgan");

// Carregamento do Aplicativo
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use(helmet());

app.use(express.json());

app.use(morgan("dev"));

// **** Configurações do Backend ( feita a partir de middlewares ) ****
app.get("/settings", authMiddleware, getSettings);

app.patch("/settings", authMiddleware, updateSettings);

app.post("/login", doLogin);

app.post("/logout", doLogout);

// Middleware de erros
app.use(require("./middlewares/errorMiddleware"));

module.exports = app;
