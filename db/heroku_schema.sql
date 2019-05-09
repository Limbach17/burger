USE lo4p8q40m5rs8t06;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (100),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Good burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Pittsburgher", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Nothingburger", false);

SELECT * FROM burgers;

ALTER USER 'tl7q0tlfq54keqv9'@'op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com' IDENTIFIED WITH mysql_native_password BY 'kmw87fjcsj92suzz'