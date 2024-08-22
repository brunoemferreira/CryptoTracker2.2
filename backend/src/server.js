// O app.js sobe o Express
const app = require("./app");

// O db.js sobe o sequelize
const db = require("./db")

app.listen(process.env.PORT, () => {
  console.log("🚀 App is running at "+ process.env.PORT);
});
