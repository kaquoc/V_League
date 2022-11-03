/**script for generating random team for testing
 * Because of Referential Integrity, we need to have a team
 * in Standings call Test Team
 * 
 * 
 */


const team = ["Doi 1","Doi 2","Doi 3","Doi 4","Doi 5","Doi 6"];
const positions = ["GK","LB","CB","RB","CM","CDM","CAM","ST","RW","LW", "CF"];


function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomPosition(){
    return positions[getRandomInt(0,11)];
}
function getTeamName(){
	return team[getRandomInt(0,6)];
}
function generateName(){
	var last_name = ["Nguyen","Tran","Ly","Ho","Phan","Pham","Ha","Le", "Phong"]; //random vietnamese last name

	var mid_name = ["Anh","Van", "Cong", "Phuong","Nhat"
    ,"Minh","Cho","Dan", "Cong","Dieu","Xuan","Hung","Hoang","Huy"];

	var first_name = ["Tai","Dai","Tu","Phuong","Hoang","Vinh","Linh","Bao","Minh","Anh","Duy","Lam","Giang","Khang","Dung"];

	var name = last_name[getRandomInt(0, last_name.length + 1)] + ' ' + mid_name[getRandomInt(0, mid_name.length + 1)]
			+ ' ' + first_name[getRandomInt(0, first_name.length + 1)];
			
	return name;
}

/**INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (18,'Hoang Son Tran', 'Viettel',2,0,'CF',25); */
function insert_statement(team){
	let name  = generateName();
	let position = getRandomPosition();
	var insert_stmt = "INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) VALUES (" +
			getRandomInt(1,99) + ", '" + name + "' , '" + "Test Team"+ "' ," + getRandomInt(0,10) + "," + getRandomInt(0,5) + 
				", '" + position+"',"+ getRandomInt(17,40)+ ")";
	console.log(insert_stmt);
	return insert_stmt;				
}

export default insert_statement;

