import dotenv from 'dotenv'
dotenv.config();
import { KINGMAN_Client } from './KINGMAN_NUKE/Client';
const client = new KINGMAN_Client({
    intents: 32767
})
client.login(client.config.token)
