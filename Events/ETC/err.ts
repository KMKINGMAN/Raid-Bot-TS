import { Events } from '../../KINGMAN_NUKE/types/KING-NUKE'
export default {
    name: "error",
    run: (client, e)=> {
        console.log(`[ERROR]=> ${e}`)
    }
} as Events