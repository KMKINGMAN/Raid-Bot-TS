import { Message } from 'discord.js'
import { Events } from '../../KINGMAN_NUKE/types/KING-NUKE'
import KINGMAN from '../../KINGMAN_NUKE/KINGMAN';
export default {
    name: "messageCreate",
    run: async(client, kmsg: Message)=> {
        const kingman = new KINGMAN(client)
        if(kmsg.author.bot) return;
        if(!kmsg.guild) return;
        if(!kmsg.content.startsWith(client.config.prefix)) return;
        let args = kmsg.content.slice(client.config.prefix.length).trim().split(/ + /g);
        let command = args.shift()?.toLocaleLowerCase();
        if(command?.length === 0) return;
        let cmd = client.commands.get(command)
        if(cmd){
            cmd.run(client, kmsg, args, kingman)
        }
    }
} as Events