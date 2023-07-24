"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../db");
var sequelize_1 = require("sequelize");
var BalanceHistoryModel = db_1.default.define('balance_history', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    value: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    reason: {
        type: sequelize_1.DataTypes.STRING,
    },
    user: {
        type: sequelize_1.DataTypes.ENUM('diana', 'rinat'),
    }
});
exports.default = BalanceHistoryModel;
