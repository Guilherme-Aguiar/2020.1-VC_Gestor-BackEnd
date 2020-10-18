CREATE SCHEMA users;

CREATE TABLE users.user (
	"userid" integer NOT NULL,
	"name" varchar(25) NOT NULL,
	"surname" varchar(25) NOT NULL,
	"username" varchar(25) NOT NULL,
	"password" varchar(60) NOT NULL,
	CONSTRAINT "User_pk" PRIMARY KEY ("userid")
);

INSERT INTO users."user"
(userid, "name", surname, username, "password")
VALUES(1, 'admin', 'admin', 'admin', '$2a$08$RjS04WuZEmMoP2OzSrz5x.zHVigMMOZR7feKi8jDhxQRfY2oKH4Gu');

INSERT INTO users."user"
(userid, "name", surname, username, "password")
VALUES(2, 'admin2', 'admin2', 'admin2', '$2a$08$RjS04WuZEmMoP2OzSrz5x.zHVigMMOZR7feKi8jDhxQRfY2oKH4Gu');
