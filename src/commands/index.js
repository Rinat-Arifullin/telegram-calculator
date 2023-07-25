"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = exports.ECommands = void 0;
var ECommands;
(function (ECommands) {
    ECommands["Start"] = "/start";
    ECommands["Diana"] = "/diana";
    ECommands["Rinat"] = "/rinat";
})(ECommands || (exports.ECommands = ECommands = {}));
exports.commands = [
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
];
