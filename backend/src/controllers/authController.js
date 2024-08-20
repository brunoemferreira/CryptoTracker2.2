const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function doLogin(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (
    email === "brunoemf@gmail.com" &&
    bcrypt.compareSync(
      password,
      "$2a$12$E.hQHqKWnXZrFstAiopq2ep2K3E770yXcoOwBiW/hRvzV1nlHkn3W"
    )
  ) {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, {
      expiresIn: parseInt(process.env.JWT_EXPIRES),
    });
    res.json({ token });
  } else res.sendStatus(401);
}

function doLogout(req, res, next) {}

module.exports = {
  doLogin,
  doLogout,
};
