import Command from "../base/classes/Command";
import CustomClient from "../base/classes/CustomClient";
import SubCommand from "../base/classes/SubCommand";
import Category from "../base/enums/Category";
import { ApplicationCommand, ApplicationCommandOptionType, ChatInputApplicationCommandData, ChatInputCommandInteraction, PermissionsBitField } from "discord.js";

export default class TestTwo extends SubCommand{
    constructor(client: CustomClient){
        super(client, {
            name: "test.two",
            
        })
    }

    Execute(interaction: ChatInputCommandInteraction){
        interaction.reply({content: "Test two command has been ran", ephemeral: true});
    }
}