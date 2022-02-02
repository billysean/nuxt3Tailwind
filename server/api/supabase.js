import { createClient } from "@supabase/supabase-js";
import config from '#config'

export default async (req, res) => {
    try{
        const supabase = createClient(config.supabaseURL, config.supabasePublicKey)
        res.end();
    } catch(err){
        console.error(err);
        res.end()
    }
}