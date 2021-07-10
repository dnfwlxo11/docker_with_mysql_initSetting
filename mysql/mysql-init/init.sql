CREATE DATABASE BOARDS;

USE BOARDS;

CREATE TABLE BOARD(
    BID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    USER VARCHAR(45) NOT NULL,
    TITLE VARCHAR(45) NOT NULL,
    CONTENT VARCHAR(255) NOT NULL,
    PASS VARCHAR(100) NOT NULL,
    _DATE TIMESTAMP DEFAULT NOW() -- INSERT 시에 DEFAULT로 넣어주면 됨
);

CREATE TABLE COMMENTS(
    CID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    USER VARCHAR(45) NOT NULL, 
    COMMENT VARCHAR(100) NOT NULL,
    PASS VARCHAR(100) NOT NULL,
    _DATE TIMESTAMP DEFAULT NOW(),
    BID INT,
    FOREIGN KEY (BID) REFERENCES BOARD(BID) ON DELETE CASCADE
);

-- TEST DATA
INSERT INTO BOARD(USER, TITLE, CONTENT, PASS, _DATE) VALUES ('ADMIN', '첫 게시글', '안녕하세요 운영자 입니다.', SHA2('1234', 256), DEFAULT);
INSERT INTO COMMENTS(USER, COMMENT, PASS, _DATE) VALUES ('USER1', '반가워요', SHA2('1234', 256), DEFAULT);