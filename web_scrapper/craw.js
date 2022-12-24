/**   WEB SCRAPPER
 * Script to scrape data from VPF website to gather team informations
 * 
 * Using Axios to make HTTP requests from node.js. 
 * Support Promose API native to JS ES6
 * 
 * Cheerio and jQuery to traverse DOM tree of HTML page and extract
 * information.
 * 
 */
import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

/** CONSTANT VARIABLE */
const team_url = 'https://vpf.vn/team/hong-linh-ha-tinh/?sid=54122';
const TEAM= "Hong Linh Ha Tinh"
const CURRENT_YEAR = 2022;


/**SCRAPING FUNCTIONS */
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
const get_age = async () => {
    try{
        const {data} = await axios.get(team_url);
        const $ = cheerio.load(data);
        const post = [];
        $('#jstable_plz > tbody > tr > td:nth-child(6)').each((_idx, el) => {
            const post1 = $(el).text().replace(/  /g,'').replace(/\n/g,'');
            let split = post1.split("-");
            const age = CURRENT_YEAR - parseInt(split[2]);
            post.push(age);
        })
        return post;
    }catch (error){
        throw error;
    }
}

const export_csv = async () =>{
    const name = await get_names();
    const kit_nums = await get_kit_number();
    const pos = await get_position();
    const goals = await get_goals();
    const ages = await get_age();
    

    //array to export into CSV file

    let data = "player_name,kit_number,team_name,appearance,goals,positon,age\n";
    const file = TEAM + '.txt'
    fs.writeFile(file, data, (error) => {
        if (error) throw error;
    })

    for (let i = 0; i < name.length;i++){
        data = name[i] + "," + kit_nums[i] + ',' + TEAM + ',' + '0' + ',' +  goals[i] + ',' + pos[i] +',' + ages[i] + '\n';
        fs.appendFile(file, data, (error) => {
            if (error) throw error;
        })
    }


}

export_csv();