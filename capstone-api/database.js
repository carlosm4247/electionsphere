import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("capstone", "carlosm4247", "ymyolokum", {
    host: "localhost",
    dialect: "postgres"
});