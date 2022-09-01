/*Website to get players, teams data
Players data:
	- https://www.transfermarkt.us/v-league-1/startseite/wettbewerb/VIE1
	- https://www.flashscore.com/team/hanoi-fc/x2LRDuqP/squad/
*/




CREATE TABLE standings (
	team_name VARCHAR(50) NOT NULL UNIQUE PRIMARY KEY,
	match_played INT,
	points INT,
	wins INT,
	draw INT,
	lose INT
);

insert into standings (team_name, match_played, points,wins, draw, lose) values ('Hanoi', 10,23,7,2,1);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Hoang Anh Gia Lai', 10,19,5,4,1);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Song Lam Nghe An', 10,17,5,2,3);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Hai Phong', 11,17,5,2,4);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('SHB-Da Nang', 11,16,4,2,4);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Binh Dinh', 10,14,4,2,4);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Viettel', 10,13,4,1,5);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Thanh Hoa', 10,12,3,3,3);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Becamex Binh Duonh', 10,12,3,3,4);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Hong Linh Ha Tinh', 10,11,3,2,5);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Nam Dinh', 10,10,2,2,4);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Ho Chi Minh', 10,9,2,3,5);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Sai Gon', 10,7,1,4,5);



CREATE TABLE players (
	player_id BIGSERIAL UNIQUE PRIMARY KEY,
	player_name VARCHAR(50),
	kit_number INT, 
	team_name VARCHAR(50),
	appearance INT,
	goals INT,
	position VARCHAR(3),
	age INT,
	FOREIGN KEY (team_name) REFERENCES standings(team_name)
);



