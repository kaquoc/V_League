/**
 * Helper file
 * Main purpose: To create INSERT queries of all players currently in V-League teams
 */

import * as fs from "fs";

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

/** Read teams_name file SYNCHRONOUSLY, passing the team name into parse_team_players to be process */
function parse_teams_name(){
	let data = fs.readFileSync("web_scrapper/teams_name.txt");
	let team_arr = data.toString().split('\n');
	for (let i = 0 ; i < team_arr.length;i++){
		parse_team_players(team_arr[i]);
	}
}

/** Parse each team's list of players and converting them in SQL queries to be Inserted */
function parse_team_players(team){
	let path = 'web_scrapper/Teams_data/' + team +".txt";
	let data = fs.readFileSync(path);
	let data_arr = data.toString().split('\n');
    let i = 1; //start from line 1 because line 0 is column names
	while (data_arr[i] != ''){
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
		query = query + "\n";
		fs.appendFileSync("web_scrapper/test.txt",query, (error) => {
			if (error) throw error;
		})
		i++;
		
	}
}

function insert_all_players(){
	parse_teams_name();
}

export {insert_all_players};