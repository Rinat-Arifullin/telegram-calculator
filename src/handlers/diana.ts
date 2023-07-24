import * as TelegramBot from "node-telegram-bot-api";
import BalanceHistoryModel from "../modules";

export enum ECallbacksDiana {
  Report = '/dianaReport',
  ChangeBalance = '/dianaChangeBalance',
}

export const optionsDiana ={
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Выгрузка', callback_data: ECallbacksDiana.Report}],
            [{text: 'Расход/доход', callback_data: ECallbacksDiana.ChangeBalance}],
        ]
    })
}

export const handlerReportDiana = async (chatId:number, bot:TelegramBot)=>{
    const data = await BalanceHistoryModel.findAll({where: {user: 'diana'}});
    await bot.sendMessage(chatId,'Выгрузка отчета Дианы ⬇️⬇️⬇️')
    await bot.sendMessage(chatId, 'Баланс  ⬇️⬇️⬇️')
}