"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Event_1 = __importDefault(require("../../base/classes/Event"));
class Ready extends Event_1.default {
    constructor(client) {
        super(client, {
            name: discord_js_1.Events.ClientReady,
            description: "Ready event",
            once: true
        });
    }
    Execute() {
        var _a;
        console.log(`${(_a = this.client.user) === null || _a === void 0 ? void 0 : _a.tag} is now ready!`);
        const commands = this.GetJson(this.client.commands);
        const rest = new discord_js_1.REST().setToken(this.client.config.token);
        const setCommands = rest.put(discord_js_1.Routes.applicationGuildCommands(this.client.config.discordClientId, this.client.config.guildId), { body: commands });
        console.log(`Successfully set ${setCommands.length} commands!`);
    }
    GetJson(commands) {
        const data = [];
        commands.forEach(command => {
            data.push({
                name: command.name,
                description: command.description,
                options: command.options,
                default_member_permissions: command.default_member_permissions.toString(),
                dm_permission: command.dm_permission,
            });
        });
        return data;
    }
}
exports.default = Ready;
