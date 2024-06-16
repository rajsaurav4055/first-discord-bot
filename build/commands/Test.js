"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../base/classes/Command"));
const Category_1 = __importDefault(require("../base/enums/Category"));
const discord_js_1 = require("discord.js");
class Test extends Command_1.default {
    constructor(client) {
        super(client, {
            name: "test",
            description: "My test command",
            category: Category_1.default.Utilities,
            default_member_permissions: discord_js_1.PermissionsBitField.Flags.UseApplicationCommands,
            dm_permission: false,
            cooldown: 3,
            options: [{
                    name: "one",
                    description: "This is the first option",
                    type: discord_js_1.ApplicationCommandOptionType.Subcommand,
                },
                {
                    name: "two",
                    description: "This is the second option",
                    type: discord_js_1.ApplicationCommandOptionType.Subcommand,
                }],
            dev: false
        });
    }
}
exports.default = Test;
