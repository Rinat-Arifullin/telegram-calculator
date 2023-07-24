import {commands} from "./commands";

const TelegramApi = require('node-telegram-bot-api');
const token = '6319621424:AAFQJutOTKqT3IfOyYUoP127KFk3N1Wa0Ls';

import sequelize from './db';
import {callbackHandler, commandHandler} from "./handlers";


const start = async () => {
    const bot = new TelegramApi(token, {
        polling: true
    })

    await bot.setMyCommands(commands)

    try {
        await sequelize.authenticate();
        await sequelize.sync()
    } catch(error) {
        console.log(error)
    }

    bot.on('message', async (msg) => {
        try {
            await commandHandler(msg, bot)
        } catch (error) {
            console.log('error commandHandler')
        }
    })

    bot.on('callback_query', async (callbackQuery) => {
        try {
            await callbackHandler(callbackQuery, bot)
        } catch (error) {
            console.log('callback_query error')
        }
    })
}


start();

