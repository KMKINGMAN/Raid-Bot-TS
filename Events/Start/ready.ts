import { Events } from '../../KINGMAN_NUKE/types/KING-NUKE';
import { ready } from '../../KINGMAN_NUKE/Logger'; 
export default {
    name: "ready",
    run: (client)=> {
        ready(client)
    }
} as Events