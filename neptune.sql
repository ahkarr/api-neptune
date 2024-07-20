CREATE DATABASE
IF NOT EXISTS neptune;

USE neptune;

-- create object
CREATE TABLE IF NOT EXISTS ApiWorkFlow(
	Id INT AUTO_INCREMENT PRIMARY KEY,
	WorkflowBody JSON,
	CreatedAt DATETIME,
	Channel VARCHAR(3),
	ApiPassKey VARCHAR(40)
);

CREATE TABLE IF NOT EXISTS UserInfo(
	UserId INT AUTO_INCREMENT PRIMARY KEY,
	UserName VARCHAR(40),
	LoginName VARCHAR(40),
	Password JSON,
	CreatedAt DATETIME
);

-- insert
INSERT INTO ApiWorkFlow (WorkflowBody,CreatedAt,Channel,ApiPassKey)
VALUES
(JSON_OBJECT('TransLog',UUID(),'PurgedAt',NOW()),NOW(),CHAR( FLOOR(65 + (RAND() * 25))),UUID())

INSERT INTO UserInfo (UserName,LoginName,Password,CreatedAt)
VALUES
(UUID(),UUID(),JSON_OBJECT('TransLog',UUID(),'PurgedAt',NOW()),NOW())




