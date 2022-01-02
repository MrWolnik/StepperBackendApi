drop table workout_result;
drop table client;
-- drop database Stepper;

-- create database Stepper;
create table client (
	Id int NOT NULL auto_increment,
    Login varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    Height double(8, 2),
    Width double(8, 2),
    Goal int,
    Birthday date,
    Gender varchar(255),
    primary key (id)
);
create table workout_result (
	Id int NOT NULL auto_increment,
    Type varchar(255),
    StepAmmount int,
    StartDate datetime,
    EndDate datetime,
    ClientId int,
    primary key (id),
    foreign key (ClientId) references client(id)
);