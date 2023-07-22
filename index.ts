const TelegramApi = require('node-telegram-bot-api');
const token = '6319621424:AAFQJutOTKqT3IfOyYUoP127KFk3N1Wa0Ls';

const bot = new TelegramApi(token, {
    polling: true
})

bot.setMyCommands([
    {
        command: '/start',
        description: 'Start command'
    }
])

bot.on('message', (msg) => {
    const {text, chat: {id}}= msg
    console.log(msg)
    bot.sendMessage(id, `Your message: ${text}`)
})