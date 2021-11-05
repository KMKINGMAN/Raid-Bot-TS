import { Client, ClientOptions, Collection } from "discord.js";
import { Command, ConfigData } from './types/KING-NUKE'
import Config from "./Config";
export class KINGMAN_Client extends Client{
    public commands : Collection<any, Command>;
    public config: ConfigData;
    constructor(Clinent_Ops: ClientOptions){
        super(Clinent_Ops)
        this.commands = new Collection();
        this.config = Config;
        ['command', 'events'].forEach(p => {
            require(`./handler/${p}`).default(this)
        })
    }
}
