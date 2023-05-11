CREATE SCHEMA smartHome;

USE smartHome;

CREATE TABLE home (
	homeId VARCHAR(15),
    password VARCHAR(20),
    address VARCHAR(150),
    PRIMARY KEY(homeId)
);

CREATE TABLE notification (
	id INT AUTO_INCREMENT,
    messageDescription VARCHAR(150),
    result VARCHAR(50),
    homeId VARCHAR(15),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    isSeen BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id),
    FOREIGN KEY (homeId) REFERENCES home (homeId) ON DELETE CASCADE ON UPDATE CASCADE 
);

CREATE TABLE postDevice (
	idDevice VARCHAR(15),
    category VARCHAR(15),
    nameDevice VARCHAR(20) DEFAULT "",
    realTime BOOLEAN DEFAULT FALSE,
    deviceDescription VARCHAR (150) DEFAULT "",
    homeId VARCHAR(15) DEFAULT "",
    PRIMARY KEY (idDevice)
);

CREATE TABLE getDevice (
	idDevice VARCHAR(15),
    category VARCHAR(15),
    nameDevice VARCHAR(20) DEFAULT "",
    deviceDescription VARCHAR (150) DEFAULT "",
    homeId VARCHAR(15) DEFAULT "",
    PRIMARY KEY (idDevice)
);

INSERT INTO home (homeId, password, address) VALUE 
("home121", "123456", "ktx Khu A tòa AH"),
("q", "1","everywhere");


-- INSERT INTO notification

INSERT INTO postDevice (idDevice, category) VALUE 
("Fan_1","fan"),
("Fan_2","fan"),
("Led_1","led"),
("Led_2","led");

