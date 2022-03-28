CREATE TABLE student(
  id NUMBER(11) ,
  rollno  NUMBER(11),
  name varchar(45) NOT NULL,
  date_of_admission DATE NOT NULL,
  physics NUMBER(11) ,
  chemistry NUMBER(11) ,
  biology NUMBER(11) ,
  division varchar(10),
  result varchar(10),
 primary key(id)
 );
 
INSERT INTO student(id, rollno, name, date_of_admission, physics, chemistry, biology, division, result)
VALUES('001', '101', 'Akash', '24/09/2014', '50', '65', '64', 'I', 'Pass');

INSERT INTO student(id, rollno, name, date_of_admission, physics, chemistry, biology, division, result)
VALUES('002', '102', 'Kamala', '15/05/2012', '65', '35', '25', 'II', 'Pass');
INSERT INTO student(id, rollno, name, date_of_admission, physics, chemistry, biology, division, result)
VALUES('003', '103', 'Varun', '20/04/2015', '35', '45', '34', 'III', 'Fail');
    
 create table user_detail(
    fname varchar(20),
    lname varchar(20),
    phone Number(20),
    email varchar(40),
    address varchar(40),
    username varchar(40) UNIQUE, 
    userid number(20) NOT NULL,
    password varchar(200),
     primary key(userid)
     );
INSERT INTO user_detail(fname, lname, phone, email, address, username, userid, password)
VALUES('Admin', '123', '9043846215', 'akash@gmail.com', 'Kanpur', 'Admin', '001', 'Admin@123');
INSERT INTO user_detail(fname, lname, phone, email, address, username, userid, password)
VALUES('Megha', 'Khan', '9567439434', 'kamkn@gmail.com', 'Bihar', 'Megha', '002', 'Megha@123');
INSERT INTO user_detail(fname, lname, phone, email, address, username, userid, password)
VALUES('User', '1', '8564138746', 'User1k@gmail.com', 'Delhi', 'User1', '003' ,'User@123');
