import { Sequelize } from "sequelize";

(async function main() {
  const sequelize = new Sequelize("sqlite::memory:"); // Example for sqlite
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
