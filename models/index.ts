import { Sequelize } from "sequelize";

let sequelize!: Sequelize; 

if (typeof window === "undefined") {
  const sqlite3 = require("sqlite3");
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite",
    dialectModule: sqlite3,
  });
}

export default sequelize;
