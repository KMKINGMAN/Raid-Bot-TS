import { ClientEvents, Message, Snowflake } from 'discord.js';
import { KINGMAN_Client } from '../Client';
import KINGAMN from '../KINGMAN';
export interface ChannelsData {
    name: string,
    nsfw: boolean,
    number: number,
    topic: string
}
export interface MessageData {
    content: string,
    number: number
}
export interface RoleData {
    name: string,
    color: any,
    number: number
}
export interface Command {
    name: string,
    run: (client: KINGMAN_Client, message: Message, args: Snowflake[], kingman: KINGAMN) => void;
    description?: string,
}
export interface ConfigData {
    token: string,
    prefix: string,
    devs: [string]
}
export interface Events {
    name: keyof ClientEvents,
    run: (client: KINGMAN_Client, ...args: any[])=> void;
} 