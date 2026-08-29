use sql8
-- Integrity Constraints - integrity constraint is a rule that ensures the accuracy and
--  consistency of data within a database

-- Types of Integrity Constraints or Integrity Keys
-- Not null constraint - null values
-- Unique constraint - duplicate
-- Primary key - null values & duplicate
-- Foreign key - used to create a relationship b/w tables
-- Default key - 
-- Check constraint

--------------------------------------------------------------

-- Not null - will not allow null values

-- The NOT NULL constraint ensures that a column cannot contain NULL values. 
-- This is useful when you want to make sure that a particular field always has a value.


create table customer(Cid int NOT NULL, CNAME varchar(20))
insert into customer values (1,'ram'),(12,'satish')
insert into customer values (null,'ramu')

-------------------------------------------------------------------------------

-- Unique - will not allows duplicate values

-- A unique constraint ensures that all values in a column (or a combination of columns) are unique 
-- across all rows in the table. 
-- This constraint does not allow duplicate values.


-- creating unique key on single column
create table manager (mid int ,mname varchar(10),
age int,unique(mid)) 

insert into manager values (1,'ram',21),(2,'john',22)

insert into manager values (1,'priya',28)


-- Creating unique key on multiple columns
create table manager_mul (mid int ,mname varchar(10),
age int,unique(mid,age)) 


-- creating constraint name manually
create table manager1 (mid int, mname varchar(20),age int,
constraint uc_manager1 unique(mid,))


-- To check constraint names or to check on what columns we created which constraints
--  we can use this syntax

show create table tablename 

show create table manager

-- we can copy the output 

CREATE TABLE `manager` (
   `mid` int DEFAULT NULL,
   `mname` varchar(10) DEFAULT NULL,
   `age` int DEFAULT NULL,
   UNIQUE KEY `mid` (`mid`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
 
 
 ------------------------------------------------------------------------------

-- Primary key - It will not allows null values and duplicate values

-- Every table we will have only 1 PK

create table category (cid int primary key, cname varchar(20))
insert into category values (11,'film'),(12,'action')
insert into category values (null,'film'),(18,'action')
select * from manager
--------------------------------------

-- To define primary key for already created table

alter table tbname
add primarykey(colname)


-- To remove pk from the table

alter table tablename
drop primary key


-----------------------------------------------------------------

-- Default key - allows us to set any defalut value

-- The DEFAULT constraint allows us to set a default value for a column when we don't want to 
-- provide any value during the insertion of a row.

create table orders(order_id int,order_status varchar(20) DEFAULT 'pending')
insert into orders (order_id) values (1),(2)
 
 -- here we need to insert data for remaining columns only
 
 select * from orders
 
 
 