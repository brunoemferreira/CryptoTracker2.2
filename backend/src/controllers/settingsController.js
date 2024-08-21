function getSettings(req, res, next) {
  res.json({ email: "brunoemf@gmail.com" });
}

module.exports = { getSettings };
