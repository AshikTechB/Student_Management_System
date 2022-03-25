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
    
 create table user_detail(
    fname varchar(20),
    lname varchar(20),
    phone Number(20),
    email varchar(40),
    address varchar(40),
    username varchar(40) UNIQUE, 
    userid number(20) NOT NULL,
    password varchar(20),
     primary key(userid)
     );
