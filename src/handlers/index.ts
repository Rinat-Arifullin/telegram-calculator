import * as TelegramBot from "node-telegram-bot-api";
import {ECommands} from "../commands";
import {ECallbacksDiana, handlerReportDiana, optionsDiana} from "./diana";
import {ECallbacksRinat, handlerChangeBalanceRinat, handlerReportRinat, optionsRinat} from "./rinat";


export const commandHandler = async (message: TelegramBot.Message, bot: TelegramBot)=>{

    switch (message.text){
        case ECommands.Start:
            await bot.sendMessage(message.chat.id,'Начать работу с ботом');
            break
        case ECommands.Diana:
            await bot.sendMessage(message.chat.id,'Работа с отчетом Дианы', optionsDiana as any);
            break
        case ECommands.Rinat:
            await bot.sendMessage(message.chat.id,'Работа с отчетом Рината', optionsRinat as any);
            break
        default:

    }
}

export const callbackHandler = async (callbackQuery: TelegramBot.CallbackQuery, bot: TelegramBot)=>{
    const data = callbackQuery.data as ECallbacksDiana & ECallbacksRinat
    const chatId = callbackQuery.message?.chat.id
    const message = callbackQuery.message


    if(!chatId){
        return
    }

    switch (data){
        case ECallbacksDiana.Report:
            await handlerReportDiana(chatId, bot);
            break
        case ECallbacksDiana.ChangeBalance:
            await bot.sendMessage(chatId,'Расход/доход  Дианы');
            break
        case ECallbacksRinat.Report:
            await handlerReportRinat(chatId, bot, message)
            break
        case ECallbacksRinat.ChangeBalance:
            await handlerChangeBalanceRinat(chatId, bot);
    }
}