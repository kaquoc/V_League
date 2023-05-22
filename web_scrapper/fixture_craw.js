import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';


const get_fixture = async () => {
    try{
        const {data} = await axios.get("https://vpf.vn/season/v-league-2023/?action=calendar&pagejs=1");
        const $ = cheerio.load(data);
        const post = [];
        $('.jstable-row').each((_idx, el) => {
            console.log(el);
        })
        
        return post;
    }catch (error){
        throw error;
    }
}

get_fixture();