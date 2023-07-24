import sequelize from '../db';
import {DataTypes} from 'sequelize'

const BalanceHistoryModel = sequelize.define('balance_history', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    value: {
        type: DataTypes.INTEGER,
    },
    reason: {
        type: DataTypes.STRING,
    },
    user: {
        type: DataTypes.ENUM('diana', 'rinat'),
    }
});

export default BalanceHistoryModel;