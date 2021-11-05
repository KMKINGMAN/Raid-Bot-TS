import fs, { readdirSync } from 'fs'
import { KINGMAN_Client } from '../Client'
import { Events } from '../types/KING-NUKE'
export default (client: KINGMAN_Client) => {
    readdirSync("./Events").forEach(files => {
        let file = readdirSync(`./Events/${files}`).filter(f => f.endsWith(".ts"))
        for(let f of file) {
            let cmd = require(`../../Events/${files}/${f}`).default as Events;
            if(cmd.name){
                client.on(cmd.name, (...args)=> cmd.run(client, ...args))
            } else {
                continue;
            }
        }
    })
}