import { ThreadChannel, GuildChannel, GuildMember, Role } from 'discord.js'
import figlet from 'figlet'
import chalk from 'chalk'
import { KINGMAN_Client } from './Client'
export let ready = (cleint: KINGMAN_Client)=>{
    figlet("KINGMAN", (err, result)=>{
        if(err){
            return
        }
        if(result){
            console.log(chalk.redBright(result))
            console.log(`${cleint.user?.tag} Ready`)
        }
    })
}
export let RoleLogger = (role: Role, type: string) => {
    switch (type) {
        case "create":
            console.log(`${chalk.green("[CREATE_ROLE]=> ")}${chalk.yellow(`${role.name}`)}`)
            break;
        case "remove":
            console.log(`${chalk.red("[REMOVE_ROLE]=> ")}${chalk.yellow(`${role.name}`)}`)
            break;
    }
}
export let ChannelLogger = (channel: GuildChannel| ThreadChannel, type: string) => {
    switch (type) {
        case "create":
            console.log(`${chalk.green("[CREATE_CHANNEL]=> ")}${chalk.yellow(`${channel.name}`)}`)
            break;
        case "remove":
            console.log(`${chalk.red("[REMOVE_CHANNEL]=> ")}${chalk.yellow(`${channel.name}`)}`)
            break;
    }
}
export let RemoveMemeberLogger = (member: GuildMember, type: string) => {
    switch (type) {
        case "ban":
            console.log(`${chalk.red("[BANNED_MEMBERS]=> ")}${chalk.yellow(`${member.user.username}`)}`)
            break;
        case "kick":
            console.log(`${chalk.red("[KIKED_MEMBERS]=> ")}${chalk.yellow(`${member.user.username}`)}`)
            break;
    }
}