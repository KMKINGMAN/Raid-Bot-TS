import { Events } from '../../KINGMAN_NUKE/types/KING-NUKE'
export default {
    name: "warn",
    run: (client, info)=> {
        console.log(`[warn]=> ${info}`)
    }
} as Events