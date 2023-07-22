var TelegramApi = require('node-telegram-bot-api');
var token = '6319621424:AAFQJutOTKqT3IfOyYUoP127KFk3N1Wa0Ls';
var bot = new TelegramApi(token, {
    polling: true
});
bot.on('message', function (msg) {
    var text = msg.text, id = msg.chat.id;
    bot.sendMessage(id, "Your message: ".concat(text));
});
