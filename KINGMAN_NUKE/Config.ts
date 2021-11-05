import dotenv from 'dotenv'
dotenv.config();
import * as CONFIG from '../config.json'
import { ConfigData } from './types/KING-NUKE'
export default {
    token: process.env['token']|| CONFIG.basic.token ,
    prefix: process.env['prerfix']|| CONFIG.basic.prefix,
    devs: CONFIG.WhiteListe
} as ConfigData