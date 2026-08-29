-- Database - Collection of data

-- SQL - Structured query language
-- Sql is a language which is used to communicate with the database
-- We can store the data, manipulate and retrive the data

-- MySQL is Case insensitive
-- Comments 
-- Single line comments and Multi line comments
-- Single line comments symbols --,#
# comment
# Multi line comments 
/* 
this is
sql
class
*/
-- In Mysql semicolon is optional ;
-- By default in SQL semicolon is considered as Delimiter
# semicolon as the end of the statement


-- Create database
-- syntax - create database databasename

Create database SQL9PM

-- Activate the database

-- Use command - used to activate the db
-- use dbname

use SQL9PM

-- create - used to create any database object 
-- database object - tables, views, stored procedure..

-- syn
-- Create
-- create table tbname (Col1 datatype, col2 datatype,...)

create table Employees(Empid int,Ename varchar(20),Salary float,
Dateofjoining date) 


-- Insert - used to insert data into tables

insert into Employees
values (1,'Ram',50000,'2021-08-21'), 
(2,'Sam',60000,'2022-05-13'),(3,'John',80000,'2020-04-22'),
(4,'Nick',36000,'2023-05-23')


-- select - used to display the data
# select * from tbname - astrick - displays complete data

select * from Employees

-- If we want to display any particular columns, we use column name in select
select ename, salary from Employees


-- Datatypes - is used to defined what type of value we can store in any column

/* Types of Datatypes - 1. Numerical Datatype
						2. Character / String Datatype
                        3. Datetime datatype
                        4. Boolean datatype

-- Numerical Datatype - int,float
-- int - store numbers
-- float - we can store decimals as well as numbers.

----------------------------------------------------

/*
Character Datatype - Char, varchar
In character datatype, we will define size also
CHAR – Used to store character data. It is a fixed length datatype. 
Memory will be wasted in char
It stores only 255 characters

VARCHAR is also used to store character data. It is a variable length datatype.
Memory wastage is not done
It stores 65,535 characters
*/

---------------------------------
-- Date and Time Datatype 
-- Date - used to store dates
-- Format - 'YYYY-MM-DD'
-- datetime - used to store date and time
-- Format -  'YYYY-MM-DD HH-MM-SS'

-------------------

-- Boolean - In this datatype we can have only 2 values - True , False




















 







