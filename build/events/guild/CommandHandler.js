"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Event_1 = __importDefault(require("../../base/classes/Event"));
class CommandHandler extends Event_1.default {
    constructor(client) {
        super(client, {
            name: discord_js_1.Events.InteractionCreate,
            description: "Command Handler event",
            once: false
        });
    }
    Execute(interaction) {
        var _a;
        if (!interaction.isChatInputCommand)
            return;
        const command = this.client.commands.get(interaction.commandName);
        //@ts-ignore
        if (!command)
            return interaction.reply({ content: "Command not found", ephemeral: true }) && this.client.commands.delete(interaction.commandName);
        const { cooldowns } = this.client;
        if (!cooldowns.has(command.name))
            cooldowns.set(command.name, new discord_js_1.Collection());
        const now = Date.now();
        let timestamps = cooldowns.get(command.name);
        // Initialize timestamps if it is undefined
        if (!timestamps) {
            timestamps = new discord_js_1.Collection();
            cooldowns.set(command.name, timestamps);
        }
        const cooldownAmount = (command.cooldown || 3) * 1000;
        if (timestamps.has(interaction.user.id) && (now < (timestamps.get(interaction.user.id) || 0) + cooldownAmount))
            return interaction.reply({ embeds: [new discord_js_1.EmbedBuilder()
                        .setColor("Red")
                        .setDescription(`Please wait another \`${((((timestamps.get(interaction.user.id) || 0) + cooldownAmount) - now) / 1000).toFixed(1)}\` seconds to run this command.`)
                ], ephemeral: true });
        timestamps.set(interaction.user.id, now);
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
        try {
            const subCommandGroup = interaction.options.getSubcommandGroup(false);
            const subCommand = `${interaction.commandName}${subCommandGroup ? `.${subCommandGroup}` : ""}.${interaction.options.getSubcommand(false) || ""}`;
            return ((_a = this.client.subcommands.get(subCommand)) === null || _a === void 0 ? void 0 : _a.Execute(interaction)) || command.Execute(interaction);
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = CommandHandler;
