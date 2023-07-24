import BalanceHistoryModel from "../modules";
import sequelize from '../db';
import * as TelegramBot from "node-telegram-bot-api";

export enum ECallbacksRinat {
    Report = '/rinatReport',
    ChangeBalance = '/rinatChangeBalance',
}

export const optionsRinat ={
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Выгрузка', callback_data: ECallbacksRinat.Report}],
            [{text: 'Расход/доход', callback_data: ECallbacksRinat.ChangeBalance}],
        ]
    })
}

export const handlerReportRinat = async (chatId:number, bot:TelegramBot, message?:  TelegramBot.Message )=>{
   const balance = await BalanceHistoryModel.sum('value',{where: {user: 'rinat'}});
    await bot.sendMessage(chatId,'Выгрузка отчета Рината ⬇️⬇️⬇️');
    bot.sendMessage(chatId, `Баланс ${balance > 0 ? '🤑' : '🥵' }: ${balance} ₽`);
   try{
       const groupedBalance = await BalanceHistoryModel.findAll({
           where: {user: 'rinat'},
           attributes: [[sequelize.fn('sum', sequelize.col('balance_history.value')), 'balance_by_reason'], 'reason'],
           group: ['balance_history.reason'],
       })
       // @ts-ignore next line
       const message = groupedBalance.map((item)=>{
           return `${item.dataValues.reason}: ${item.dataValues.balance_by_reason} ₽`
       }).join('\n')
       await bot.sendMessage(chatId, message);

   }catch(e){
       console.log(e)
   }
}

export const handlerChangeBalanceRinat = async (chatId:number, bot:TelegramBot)=>{
    try {
        await bot.sendMessage(chatId,'Записать расход/доход');
        await bot.sendMessage(chatId, 'Пример:  -700, ЗП уборщица');
        bot.on('message', async (msg) => {
            const splitText = msg.text && msg.text?.split(",")
            if(splitText?.length){
                const value = Number(splitText[0])
                const reason = splitText[1]

                await BalanceHistoryModel.create({
                    value,
                    reason,
                    user: 'rinat'
                })
                await bot.sendMessage(chatId, `Записан ${value <0? 'расход' : 'доход'}: ${value} - ${reason}`);
            }
        })
    } catch (error){
        await bot.sendMessage(chatId, 'Произошла ошибка')
    }
}