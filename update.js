/**File for updating database
 * 
 * Any functions that changes or update the database
 */
import pool from './db.js';
//import insert_statement from './Test.js';
import * as fs from "fs";

import {insert_all_players} from "./Insert_all_players.js";

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
const incrementPlayer_appearance = async (player_name) => {
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
    console.log("open connection");
    try {
        const x = await pool.connect();          // gets connection
        const y = await pool.query(query, []); // sends queries
        console.log(y);
        await pool.end();  
        console.log("closing connection");
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

/**Insert all players from current list of teams*/
function insert_teams_players(){
    insert_all_players();
}
resetPlayers()