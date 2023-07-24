"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.default = new sequelize_1.Sequelize('telegram_calculator', 'root', 'root', {
    host: 'master.c3e325dc-e1d1-4aff-8a0a-b3377bebf5e9.c.dbaas.selcloud.ru',
    port: 5432,
    dialect: 'postgres',
});
