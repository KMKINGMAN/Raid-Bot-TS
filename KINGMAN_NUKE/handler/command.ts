import fs, { readdirSync } from 'fs'
import { KINGMAN_Client } from '../Client'
import { Command } from '../types/KING-NUKE'
export default (client: KINGMAN_Client) => {
    readdirSync("./Commands").forEach(files => {
        let file = readdirSync(`./Commands/${files}`).filter(f => f.endsWith(".ts"))
        for(let f of file) {
            let cmd = require(`../../Commands/${files}/${f}`).default as Command;
            if(cmd.name){
                client.commands.set(cmd.name, cmd)
            } else {
                continue;
            }
        }
    })
}