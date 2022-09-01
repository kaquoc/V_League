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


/*HANOI FC*/
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (1,'Bui Tan Truong', 'Hanoi',6,0,'GK',36);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (18,'Nguyen Van Cong', 'Hanoi',7,0,'GK',30);			
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (20,'Bui Hoang Viet Anh', 'Hanoi',10,1,'CB',23);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (5,'Doan Van Hau', 'Hanoi',8,0,'LB',23);											
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,,position, age) 
											VALUES (45,'Le Van Xuan', 'Hanoi',2,0,'LB',23);											
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (52,'Nguyen Van Vi', 'Hanoi',7,0,'LB',24);	
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,,position, age) 
											VALUES (13,'Tran Van Kien', 'Hanoi',8,0,'RB',26);	
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (27,'Vu Tien Long', 'Hanoi',2,0,'CB',26);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (8,'Dau Van Toan', 'Hanoi',10,0,'DM',25);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (28,'Do Duy Manh', 'Hanoi',9,0,'CB',25);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (88,'Do Hung Dung', 'Hanoi',12,0,'CM',28);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (14,'Nguyen Hai Long', 'Hanoi',8,1,'CM',22);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (16,'Nguyen Thanh Chung', 'Hanoi',12,1,'CB',24);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (15,'Pham Duc Huy', 'Hanoi',9,0,'DM',27);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (11,'Pham Thanh Luong', 'Hanoi',2,0,'AM',33);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (74,'Truong Van Thai Quy', 'Hanoi',11,1,'CM',33);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (6,'Vu Minh Tuan', 'Hanoi',3,0,'AM',31);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (22,'Ivanic Josip', 'Hanoi',5,0,'CF',31);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (25,'Le Xuan Tu', 'Hanoi',10,2,'LW',22);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (7,'Lucao', 'Hanoi',2,2,'CF',30);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (23,'Mujan Tonci', 'Hanoi',6,1,'CF',27);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (10,'Nguyen Van Quyet', 'Hanoi',11,3,'RW',31);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (89,'Nguyen Van Tung', 'Hanoi',5,0,'CF',20);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (9,'Pham Tuan Hai', 'Hanoi',13,3,'CF',24);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (99,'Siladji Vladimir', 'Hanoi',12,4,'CF',29);

/*Becamex Binh Duonh*/
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (1,'Lai Tuan Vu', 'Becamex Binh Duong',2,0,'GK',29);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (28,'Nguyen Son Hai', 'Becamex Binh Duong',7,0,'GK',28);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (25,'Tran Duc Cuong', 'Becamex Binh Duong',5,0,'GK',37);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (20,'Doan Van Quy', 'Becamex Binh Duong',1,0,'RB',24);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (33,'Le Van Dai', 'Becamex Binh Duong',3,0,'CB',26);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (4,'Ndiaye Olivier', 'Becamex Binh Duong',13,0,'CB',28);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (8,'Nguyen Anh Tai', 'Becamex Binh Duong',6,0,'LB',26);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (2,'Nguyen Hung Thien Duc', 'Becamex Binh Duong',3,0,'LB',22);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (7,'Nguyen Thanh Long', 'Becamex Binh Duong',13,0,'CB',29);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (3,'Nguyen Thanh Thao', 'Becamex Binh Duong',7,1,'LM',27);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (15,'Truong Du Dat', 'Becamex Binh Duong',3,0,'CB',25);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (9,'Doan Tuan Canh', 'Becamex Binh Duong',8,0,'AM',24);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (26,'Le Quoc Nhat', 'Becamex Binh Duong',3,0,'CM',24);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (22,'Nguyen Tien Linh', 'Becamex Binh Duong',10,4,'CF',24);
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (27,'Nguyen Trung Tin', 'Becamex Binh Duong',7,1,'CM',31);											
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (28,'To Van Vu', 'Becamex Binh Duong',11,1,'RM',28);			
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (17,'Tong Anh Ty', 'Becamex Binh Duong',10,0,'CM',25);		
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (12,'Tran Duy Khanh', 'Becamex Binh Duong',12,0,'AM',25);		
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (24,'Tran Hoang Bao', 'Becamex Binh Duong',7,0,'CM',21);		
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (14,'Tran Hoang Phuong', 'Becamex Binh Duong',5,0,'CM',28);		
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (29,'Vo Hoang Minh Khoa', 'Becamex Binh Duong',6,0,'CM',21);		
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (37,'Adao Wellington Gomes', 'Becamex Binh Duong',5,2,'LW',34);		
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (77,'Alves Kesley', 'Becamex Binh Duong',2,0,'CF',40);	
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (18,'Ho Sy Giap', 'Becamex Binh Duong',11,2,'LW',28);	
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (11,'Bui Vi Hao', 'Becamex Binh Duong',12,1,'CF',19);	
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (10,'Eydison Teofilo Soares', 'Becamex Binh Duong',13,2,'CF',34);	
INSERT INTO players (kit_number, player_name,team_name,appearance,goals,position, age) 
											VALUES (16,'Nguyen Tran Viet Cuong', 'Becamex Binh Duong',6,1,'CF',21);	