-- Temorary tables -- By using temporary tables, we will create any table temporarly 
-- temporary tables will be exists till the session is opened, once i close the workbench temporary table will be removed automatically

create temporary table sample(ID int,sname varchar(10))

insert into sample
values (1,'S1'),(2,'S2')

select * from sample

-- creating temporary table syntax is same as create table syntax, we will just use an extra keyword temporary after create keyword
-- insert and select syntax are same as tables


-- Usecase of Temporary tables: 
-- To remove duplicate values from any table

select * from employees

-- If i have any duplicate values in employees and i want to remove that duplicate values i will follow the below process

-- step 1. create temporary table and store unique values of  employees table

create temporary table temp_emp as
select distinct * from employees

select * from temp_emp

-- step 2 - use truncate/ delete to remove complete data from employees

truncate table employees

select * from employees 
-- Now my table will become empty

-- step3 - insert unique data which we stored in temp table inside employees
insert into employees
select * from temp_emp

select * from employees

-- Now i got only unique values in employees table. i.e i removed all the duplicate values



