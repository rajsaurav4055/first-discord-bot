import Command from "../base/classes/Command";
import CustomClient from "../base/classes/CustomClient";
import SubCommand from "../base/classes/SubCommand";
import Category from "../base/enums/Category";
import { ApplicationCommand, ApplicationCommandOptionType, ChatInputApplicationCommandData, ChatInputCommandInteraction, PermissionsBitField } from "discord.js";

export default class TestOne extends SubCommand{
    constructor(client: CustomClient){
        super(client, {
            name: "test.one",
            
        })
    }

    Execute(interaction: ChatInputCommandInteraction){
        interaction.reply({content: "Test one command has been ran", ephemeral: true});
    }
}