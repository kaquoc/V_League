
import axios from 'axios';
import cheerio from 'cheerio';

const team_url = 'https://vpf.vn/team/hong-linh-ha-tinh/?sid=54122';
const get_names = async () => {
    try{
        const {data} = await axios.get(team_url);
        //data contains HTMLs of the page
        const $ = cheerio.load(data); //Jquery Cheerio action
        const post = [];

        $('td > div.jsDivLineEmbl > div > a ').each((_idx, el) => {
            //CSS selectors of the page, div, p element name title, then a element.
            const post1 = $(el).text();
            post.push(post1);
        });

        return post;
    }catch (error){
        throw error;
    }
}

const get_kit_number = async () => {
    try{
        const {data} = await axios.get(team_url);
        //data contains HTMLs of the page
        const $ = cheerio.load(data); //Jquery Cheerio action
        const post = [];
        $('#jstable_plz > tbody > tr > td:nth-child(2)').each((_idx, el) => {
            //CSS selectors of the page, div, p element name title, then a element.
            const post1 = $(el).text().replace(/  /g,'').replace('\n','');
            //regex to remove some empty spaces and \n
            post.push(post1);
        });

        return post;
    }catch (error){
        throw error;
    }
}
const get_position = async () => {
    try{
        const {data} = await axios.get(team_url);
        //data contains HTMLs of the page
        const $ = cheerio.load(data); //Jquery Cheerio action
        const post = [];
        $('#jstable_plz > tbody > tr > td:nth-child(3)').each((_idx, el) => {
            //CSS selectors of the page, div, p element name title, then a element.
            let post1 = $(el).text().replace(/  /g,'').replace('\n','');
            //regex to remove some empty spaces and \n
            switch (post1){
                case "Hậu vệ":
                    post1 = 'CB';
                    break;
                case "Tiền đạo":
                    post1 = 'ST';
                    break;
                case "Tiền vệ":
                    post1 = 'CM'
                    break;
                case "Thủ môn":
                    post1 = "GK";
                    break;
            }
            //Positions is in Vietnamese, so need to translate it to English
            post.push(post1);
        });
        return post;
    }catch (error){
        throw error;
    }
}
const get_goals = async () => {
    try{
        const {data} = await axios.get(team_url);
        //data contains HTMLs of the page
        const $ = cheerio.load(data); //Jquery Cheerio action
        const post = [];
        $('#jstable_plz > tbody > tr > td:nth-child(7)').each((_idx, el) => {
            //CSS selectors of the page, div, p element name title, then a element.
            const post1 = $(el).text().replace(/  /g,'').replace(/\n/g,'');
            //regex to remove some empty spaces and \n
            post.push(post1);
        });

        return post;
    }catch (error){
        throw error;
    }
}
const export_csv = async () =>{
    const name = await get_names();
    const kit_nums = await get_kit_number();
    const pos = await get_position();
    for (let i = 0; i < name.length;i++){
        let res = [];
        res.push(name[i],kit_nums[i],pos[i]);
        console.log(res);
    }

}

export_csv();