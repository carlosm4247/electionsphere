import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zipcode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    following: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        defaultValue: []
    },
    stances: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {},
    },
    preferredParty: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
    },
    candidates: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {}
    }
})