// O db.js sobe o sequelize
const databse = require("./db");
// O app.js sobe o Express
const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log("🚀 App is running at " + process.env.PORT);
});
