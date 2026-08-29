-- SQL Sub language - 
-- we have 5 types SQL Sublanguages - DDL,DML,DCL,TCL,DQL

-- DDL - Data Definition Lang
-- Create, Drop,Alter, Truncate and Rename

-- DML - Data Manipulation Lang
-- Insert update and delete

-- DCL - Data control lang
-- Grant and Revoke

-- TCL - Transaction control Lang
-- commit Rollback and Savepoint

-- DQL - Data Query lang
-- select


-- DDL - Data Definition lang - deals with the structure of the table
--  Commands comes under DDL - Create, Drop, ALTER,TRUNCATE,RENAME 

-- Create - used to create any database objects like table, views, procedures

-- Drop - used to remove any table permanently from db

-- For using drop command let me create another 
-- table as employees1 with same employees data

create table Employees1(Empid int,Ename char(10),Salary float,
Dateofjoing date) 

insert into Employees1
values (1,"Raj",45000,'2020-08-12'),
(2,'Sam',54000,'2021-09-28'),
(3,'Divya',36000,'2020-08-19')

select * from employees1

-- Now lets use drop for employees1 table

-- syn
-- Drop table tbname
drop table employees1

-- Alter - 
-- 1. used to add a new column in already exisisting table

alter table tbname
add colname datatype

alter table employees
add Bonus float

select * from employees

-- Adding multiple columns

alter table employees
add Address varchar(20), add deptid int

-- 2.Used to remove column from exisisting table

alter table tbname
drop column colname

alter table employees
drop column bonus 

select * from employees

-- Removing multiple columns at a time

alter table employees
drop column address, drop deptid


-- 3. change datatype for already exisisting column

alter table tbname
modify column colname newdatatype

alter table employees
modify column salary int

alter table employees
modify column dateofjoining int

-- 4. rename/change colname from the exisisting table

alter table tbname
rename column oldname to newname

alter table employees1
rename column Dateofjoining to DOJ


-- 5. used to add pk for the existing table

alter table tbname
add primary key(colname)

------------------------------------------------

-- Truncate - used to remove complete data from the table but structure remains same

-- For showing the result of truncate table let me create another 
-- table as employees 1 with same employees data

create table Employees1(Empid int,Ename char(10),Salary float,
Dateofjoing date) 

insert into Employees1
values (1,"Raj",45000,'2020-08-12'),
(2,'Sam',54000,'2021-09-28'),
(3,'Divya',36000,'2020-08-19')

select * from employees1

-- Now lets use truncate for employees1 table

-- syntax
truncate table tbname
truncate table employees1

-- By using truncate command the data inside employees1 table will be remove completely and the structure remains same


-- Rename - used to rename the table name
rename table oldtablename to newtablename
rename table employees1 to emp



--------------------------------------------------------------------------------------

-- DML commands - Data Manipulation Language
-- Insert, Update and Delete

-- insert commad - used to insert data 

-- Update - we can make changes for the exsisting data by using update cmnd

select * from employees

update employees
set salary = 50000
where empid = 1

select * from employees

/*
Where clause - Where is a clause in sql which is used to filter the data according to the conditions.
If we don't mention where clause in update command the changes which we want to make will effect 
the complete data of that column.  

Whenever we use update and delete commands after executing we may get error stating - You are using 
a safe update mode.... 

In MySQL, we have a setting called as safe update mode which is used to remind the developers about 
the consequences we may face when we are using Update and Delete command without where clause.
By default this setting will be enabled and whenever we get error regarding safe update mode we 
should turn this off. 

Steps to follow to turn off this safe update mode

In the Menu bar - Go to Edit - Preferences - one dialogue box will open - we have SQL Editor towards 
top left, click that - scroll the page down - we will have 
Safe update (Rejects Updates and Deletes with no where clause) at the end, by default this option
will be turned on (i.e checked). we need to uncheck the box to turn that setting off.
After unchecking the box - click on Ok - Next in our Menu bar we have some icons - 
last icon is for Reconnecting to DBMS - click on that Reconnect to DBMS icon, then only whatever 
changes we made in settings that will be applied to the data.
Now execute the update/delete command we won't get that safe update mode error.

In real time to be on the safer side once our work is done we will turn this safe update mode on by
following the same steps - this time we should check the box which we unchecked previously.

*/


-- give every employee 10% of salary bonus and add that column bonus in employees table

alter table employees 
add bonus float 

select * from employees

update employees
set bonus = 0.1*salary

-- Here i didn't use where clause because i want to use same condition for my entire table data.


-- Delete - used to delete any particular row from the table

-- syn
delete from tbname
where condition

delete from employees
where empid = 4

# difference b/w drop delete and truncate

/*
drop - remove the complete table from the database
truncate - will just remove the data inside the table but the structure of the table
will remain same.
delete - used to delete the data inside the table

*/



