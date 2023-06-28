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

insert into standings (team_name, match_played, points,wins, draw, lose) values ('Ha Noi',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Hoang Anh Gia Lai',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Song Lam Nghe An',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Hai Phong',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('SHB Da Nang',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Topenland Binh Dinh',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Viettel',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Dong A Thanh Hoa',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Becamex Binh Duong',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Hong Linh Ha Tinh',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Thep Xanh Nam Dinh',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Ho Chi Minh',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Cong An Ha Noi',0,0,0,0,0);
insert into standings (team_name, match_played, points,wins, draw, lose) values ('Sanna Khanh Hoa',0,0,0,0,0);


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



