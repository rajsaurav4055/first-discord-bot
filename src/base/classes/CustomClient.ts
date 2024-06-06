import { Client } from "discord.js";
import ICustomClient from "../interfaces/iCustomClient";
import IConfig from "../interfaces/IConfig";

export default class CustomClient extends Client implements ICustomClient{
    
    config: IConfig;

    constructor() {
        super({ intents: []});
        this.config= require(`${process.cwd()}/data/config.json`);
    }
    Init(): void {
        this.login(this.config.token)
        .then(() => console.log("Logged in!"))
        .catch((err)=> console.error(err))
    }
}    