import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("electionsphere", "postgres", "123456", {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
    logging: console.log,
  });