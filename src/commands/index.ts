import * as TelegramBot from "node-telegram-bot-api";

export enum ECommands {
    Start = '/start',
    Diana = '/diana',
    Rinat = '/rinat'
}

export const commands:TelegramBot.BotCommand[] = [
    {
        command: ECommands.Start,
        description: 'Начать работу с ботом',
    },
    {
        command: ECommands.Diana,
        description: 'Работа с отчетом Дианы',
    },
    {
        command: ECommands.Rinat,
        description: 'Работа с отчетом Рината',
    }
]