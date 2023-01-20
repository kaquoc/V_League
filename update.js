/**File for updating database
 * 
 * Any functions that changes or update the database
 */
import pool from './db.js';
import insert_statement from './Test.js';


//CSV file parser package
import {parse} from "csv-parse";
import * as fs from "fs";



/** Update player goal count: Provide player name and number of goals score to update.
*/
const updatePlayer_goal = async (player_name, goals) => {
    const query = `UPDATE "players" 
                   SET "goals" = goals + $2
                   WHERE "player_name" = $1`;
    try {
        await pool.connect();          // gets connection
        await pool.query(query, [player_name, goals]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await pool.end();              // closes connection
    }
};
/**increament a player appearance 1 at a time */
const updatePlayer_appearance = async (player_name) => {
    const query = `UPDATE "players" 
                   SET "appearance" = appearance + 1
                   WHERE "player_name" = $1`;
    try {
        await pool.connect();          // gets connection
        await pool.query(query, [player_name]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await pool.end();              // closes connection
    }
};
/**update player kit number */
const updatePlayer_kit = async (player_name,kit_num) => {
    const query = `UPDATE "players" 
                   SET "kit_number" = $2
                   WHERE "player_name" = $1`;
    try {
        await pool.connect();          // gets connection
        await pool.query(query, [player_name,kit_num]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await pool.end();              // closes connection
    }
};
/**Update standings Table, 
 * UPDATE home_team points + wins
 * UPDATE away_team points + loses
 */
const updateMatchResult = async (home_team,score1,away_team,score2) => {
    let query = ''; //for home team
    let query2 = ''; // for away team
    let supply = [];
    let supply2 = [];
    if (score1 > score2){ //home team wins
        query = `UPDATE "standings" 
                   SET "points" = points + 3, "wins" = wins+1
                   WHERE "team_name" = $1`;
        query2 = `UPDATE "standings" 
                   SET "lose" = lose + 1
                   WHERE "team_name" = $1`;

        supply = [home_team];
        supply2 = [away_team];
    } else if (score2 > score1){//away team wins
        query = `UPDATE "standings" 
                   SET "points" = points + 3,"wins" = wins+1
                   WHERE "team_name" = $1`;
        query2 = `UPDATE "standings" 
                   SET "lose" = lose + 1
                   WHERE "team_name" = $1`;
        supply = [away_team];
        supply2 = [home_team];
    }else{ //draw
        query = 'UPDATE "standings" SET "points" = points + 1 WHERE "team_name" = $1 OR "team_name" = $2';
        query2 = 'UPDATE "standings" SET "draw" = draw + 1 WHERE "team_name" = $1 OR "team_name" = $2';
        supply = [home_team,away_team];
        supply2 = [home_team,away_team];
    }
   
    try {
        await pool.connect();          // gets connection
        await pool.query(query, supply); // sends queries
        await pool.query(query2,supply2);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await pool.end();              // closes connection
    }
};

/**function use to reset all players stat (except player_id,player_name,kit number, age, position and team_name) */
const resetPlayers = async() =>{
    const query = 'UPDATE "players" SET "appearance" = 0, "goals" = 0';
    try {
        await pool.connect();          // gets connection
        await pool.query(query, []); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await pool.end();              // closes connection
    }
}
/**function use to reset team points, match_played, goals, wins, draw, lose to 0 */
const resetStandings = async() =>{
    const query = 'UPDATE "standings" SET "match_played" = 0, "points" = 0, "wins"=0, "draw" = 0, "lose" = 0';
    try{
        await pool.connect();
        await pool.query(query,[]);
        return true;
    }catch (error){
        console.log(error.stack);
        return false;
    }finally {
        await pool.end();
    }
}

/**Insert player into players database 
 * parameters: player_name, kit_number, team_name, appearance, goals, position, age
 * 
 * example SQL statement:
   INSERT INTO players (player_name, kit_number, team_name, appearance, goals, position, age) VALUES
                ('Hoang Son Tran', 18, 'Viettel', 0,0,'CF', 25);
*/
function insert_player_query(name, kit, team, app, goals, pos, age){
	var insert_stmt = "INSERT INTO players (player_name,kit_number,team_name,appearance,goals,position, age) VALUES ('" +
		 name + "'," + kit + ",'" + team + "', " + app + "," + goals + ",'" + pos + "'," + age
    +")";	
    return insert_stmt;
}



/** 
 * Parse a team csv file and insert the team players into TABLE 'players'
 * parameter: file path to csv file
 * 
 * https://sebhastian.com/read-csv-javascript/
 * 
 * NEED TO BE MODIFY, NEED TO PARSE TXT FILES instead.
 * 
 * 
 */
async function parse_csv(path){
    const data = [];
    fs.createReadStream(path);
    fs.createReadStream(path).pipe(parse(
        {delimiter: ",", columns: true,ltrim: true} //first column is column names, rest is values. and trim whitespaces
        )).on("data",function(row){
        data.push(row);
    }).on("error", function (error){
        console.log(error.message);
        return;
    }).on("end",async function (){
        /**create query an insert*/
        insert_csv(data);
        console.log("calling pool end");  
        console.log("finised");
        return;
    })
}

async function insert_csv(data){
    await pool.connect();  
    for (let i = 0; i < data.length; i++){
        console.log(data[i]);
    }
    await pool.end();    
}


/**
 * Parse each team's text file to insert players into database
 */
function parse_text(path){
    fs.readFile(path, (err,data) => {
        if (err) throw err;
        let data_arr = data.toString().split('\n');
        let i = 1; //start from line 1 because line 0 is column names
        while (data_arr[i] != ''){
            i++;
            if (data_arr[i] == undefined){
                i++;
                return; 
            }
            let player_arr = data_arr[i].split(",");
            let player_name = player_arr[0];
            let player_kit = player_arr[1];
            let player_team = player_arr[2];
            let player_appear = player_arr[3];
            let player_goals = player_arr[4];
            let player_pos = player_arr[5];
            let player_age= player_arr[6]; 
            var query = insert_player_query(player_name,player_kit,player_team,player_appear,player_goals,player_pos,player_age);
            console.log(query);
            query = query + "\n";
            fs.appendFile("web_scrapper/test.txt",query, (error) => {
                if (error) throw error;
            })
            i++;
            
        }
    })
}

/**Helper function to iterate through a list of teams
 * then call function to read players from that teams
 */
function insert_teams_players(){
fs.readFile("web_scrapper/teams_name.txt", (err,data) =>{
    if (err) throw err;
    let team_arr = data.toString().split('\n');
    for (let i = 0; i< team_arr.length;i++){
        let path = 'web_scrapper/Teams_data/' + team_arr[i] +".txt";
        parse_text(path);
    }

})
}



insert_teams_players();


