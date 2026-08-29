
use sql6
-- DCL - Data Control Language
-- Grant and Revoke
-- used by Database administrators

-- Grant - used to give/assign any privilages/access permissions to the users

-- syn - Grant privilage_name on object_name to user

Grant update on employees to user1

 -- They can give multiple privilages at a time

grant update,delete on employees to user1


-- Revoke - used to take back privilages/ Permissions from user

Revoke privilage_name on object_name from user

Revoke update on employees from user1


-------------------------------------------------------------------------------

-- TCL - Transactional control language
-- commit, rollback and savepoint


-- commit - used to save data permanently in the database
-- syn - commit
--  by defalut mysql is an autocommit tool.
-- We need to turn off the autocommit option if we want to use savepoint and rollback


-- savepoint -- Savepoint - used to save data temporarly at any particular point so that,
-- whenever needed we can rollback to that particular data

-- syn
-- savepoint savepoint name
-- savepoint S1


-- Rollback - used to get the data back or restore the data back to the last 
-- savepoint or last commited state

-- syn - Rollback
-- rollback to s1

create table Emp(Empid int,Ename varchar(20),Salary float,
Dateofjoining date) ;

insert into Emp
values (1,'Ram',50000,'2021-08-21'), 
(2,'Sam',60000,'2022-05-13'),(3,'John',80000,'2020-04-22'),
(4,'Nick',36000,'2023-05-23')

select * from emp

-- we will get 4 rows in output

-- Turn off the autocommit option by using

set autocommit = OFF
or 
set autocommit = 0



/*Both are same we can use anything to turn off the auto commit option of mysql.
Before turning this autocommit option off, we already created emp table and inserted 4 rows of data
so that 4 rows will be saved permanently in database.
*/

-- Now let's insert one more row

insert into emp values (5,'Raju',50000,'2022-09-12')

select * from emp 
-- here we will get 5 records

rollback

select * from emp

-- Now if we execute rollback and display the data we will get 4 rows. i.e only 1 row, which 
-- is inserted after turning off auto commit option will be removed because 1st 4 rows are already 
-- commited i.e they permanently saved in database.

-- Now lets create one more table ,insert some rows and let's see how rollback will work


 create table Emp1(Empid int,Ename varchar(20),Salary float,
Dateofjoining date) ;

insert into Emp1
values (1,'Ram',50000,'2021-08-21'), 
(2,'Sam',60000,'2022-05-13'),(3,'John',80000,'2020-04-22'),
(4,'Nick',36000,'2023-05-23')

select * from emp1

-- this will display 4 rows again, now use rollback

rollback

select * from emp1

-- after executing rollback if we execute the above select statement we won't get data, i.e all the
-- 4 rows will become rollbacked here as we created table and inserted data after turning off 
-- autocommit option.

-- Lets use savepoint

insert into Emp1
values (1,'Ram',50000,'2021-08-21'), 
(2,'Sam',60000,'2022-05-13')

-- Again i inserted 2 rows of data, previously after using rollback we don't have any data 
-- in that table. 

-- create a savepoint

savepoint inst

insert into Emp1
values (3,'John',80000,'2020-04-22'),
(4,'Nick',36000,'2023-05-23');

insert into Emp1
values (5,'John',80000,'2020-04-22'),
(6,'Nick',36000,'2023-05-23')

select * from emp1

-- so 1st i inserted 2 rows , then i used savepoint, then i inserted 4 rows.
-- savepoint is used to save data temporarly i.e after defining savepoint whatever rows i inserted
-- all those rows will be save temporarly in that savepoint inst.
-- Now if i use 

rollback to inst

-- Whatever rows i inserted after using savepoint all that 4 rows will be vanished.
-- i.e., we rollbacked till the last savepoint.

-- if i execute 

select * from emp1

-- we will get only 2 rows.


-- So by using rollback, either we can undo the data back to the last commited state or else last 
-- savepoint


insert into Emp1
values (3,'John',80000,'2020-04-22'),
(4,'Nick',36000,'2023-05-23');

insert into Emp1
values (5,'John',80000,'2020-04-22'),
(6,'Nick',36000,'2023-05-23')

select * from emp1

commit

savepoint inst2

insert into Emp1
values (15,'John',80000,'2020-04-22'),
(16,'Nick',36000,'2023-05-23')

select * from emp1

-- Here i inserted some more rows and i defined second savepoint inst2, after using second savepoint
-- i again inserted 2 rows.

-- In between i used commit command, 

rollback to inst2

-- last 2 rows will become undo, if i execute 

rollback to inst

-- we will get error stating savepoint inst does not exists because we already used commit and data 
-- saved before inst2 will be saved permanently and savepoint inst will be removed automatically.

 -- if i don't use commit command in between and if i execute rollback to inst, all the rows we 
 -- inserted after inst would be removed.

---------------------------------------------------------------

-- DQL - Data Query Language
-- Select - used to display data from the table

select * from emp 

-- * - astrick used to display complete data

-- If we want to display any particular column name, we need to give that column names in select

select empid,salary from emp



