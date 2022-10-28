/**script for generating random team for testing */


const team = ["Doi 1","Doi 2","Doi 3","Doi 4","Doi 5","Doi 6"];
const positions = ["GK","LB","CB","RB","CM","CDM","CAM","ST","RW","LW", "CF"];

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
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
	var name1 = ["Nguyen","Tran","Ly","Ho","Phan","Pham","Ha","Le"]; //random vietnamese last name

	var name2 = ["Anh Tai","Van Dai", "Cong Phuong", "Phuong Hoang","Nhat Anh"
    ,"Minh Tri","Cho De","Dan Thanh", "Cong Tu","Dieu Hoang","Bon Bon"]

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
	return name;
}

/**INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (18,'Hoang Son Tran', 'Viettel',2,0,'CF',25); */
function insert_statement(){
	let name  = generateName();
	let position = getRandomPosition();
	var insert_stmt = "INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) VALUES (" +
			getRandomInt(1,99) + ", '" + name + "' , '" + getTeamName() + "' ," + getRandomInt(0,10) + "," + getRandomInt(0,5) + 
				", '" + position+"',"+ getRandomInt(17,40)+ ")";
	console.log(insert_stmt);
	return insert_stmt;
	
				
}

insert_statement();
