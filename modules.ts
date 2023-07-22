import sequelize from './db';
import {DataTypes} from 'sequelize'

const User = sequelize.define('user', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    chatId: {
        type: DataTypes.STRING,
        unique: true
    }
})

export default User;