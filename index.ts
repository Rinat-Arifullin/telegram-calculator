const TelegramApi = require('node-telegram-bot-api');
const token = '6319621424:AAFQJutOTKqT3IfOyYUoP127KFk3N1Wa0Ls';

import sequelize from './db';
import UserModel from './modules'

const bot = new TelegramApi(token, {
    polling: true
})

bot.setMyCommands([
    {
        command: '/start',
        description: 'Start command'
    }
])

const start = async (chatId: string) => {
    try{
        await sequelize.authenticate();
        await sequelize.sync()
        const user = await UserModel.create({
            chatId
        })
    }catch(error){
        console.log(error)
    }

}

bot.on('message', (msg) => {
    const {text, chat: {id}}= msg
    console.log(msg)
    start(id);
    bot.sendMessage(id, `Your message: ${text}`)
})