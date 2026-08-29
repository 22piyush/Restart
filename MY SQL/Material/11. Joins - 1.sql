/*
Joins - when the data is in 2 or more tables and if we want to bring that data from multiple tables into 
 single view, we use joins

Joins are used to combine rows between 2 or more tables based on common column between them

Joins are mainly divided into 2 types - Inner Join and Outer join
Outer join futher divided into  3 types - Left outer join or Left join
										  Right outer join or Right join
                                          Full outer join or Full join

-- We have some more joins - Natural join, Cross Join and Self join
*/
use sql8

create table customer(Id int primary key,Name varchar(10))

insert into customer 
values (1,'A'),(2,'B'),(3,'C'),(4,'D')

create table age(Id int primary key,Age int)
insert into age
values (1,21),(2,22),(3,23),(5,24)

select * from customer;
select * from age


-- Inner join - It returns the common data from 2 tables based on the common column

-- syntax 
select * from table1
inner join table2
on table1.commoncol = table2.commoncol

select * from customer
inner join age
on customer.ID = age.ID


-- In the above query as we used * in select command, we will get common column i.e id column 2 times in output 

select id,name,age from customer
inner join age
on customer.ID = age.ID

-- If we want to display common column only once in output, and if we use id in select statement like mention above we will get ambiguous error.

/*
 ambiguous Error - Whenever we are performing joins, if we want to display common column 
 and if we use common col name directly in select command we will get this error.
because sql will get confuse that from which table it should fetch that data.
to avoid that we need to use table name or alias name before common column name in select command
*/


-- using table name before common column name

select customer.id,name,age from customer
inner join age
on customer.ID = age.ID



-- Writing joining using alais names

select * from customer as c
inner join age as a
on c.id = a.id

-- by using alias names for table names, sql query will become shorter

-- using alias name before common column name

select c.id,name,age from customer as c
inner join age as a
on c.id = a.id


-- Left join - It display complete data from left table and matching values from 
-- right table, for non matching values it returns null

-- syntax
select * from table1
left join table2
on table1.commoncol = table2.commoncol

select * from customer
left join age
on customer.ID = age.ID

select age.id,name,age from customer
left join age
on customer.ID = age.ID

-- Right Join - used to display complete data from right table and matching 
-- values from left table and non matching it returns null

select * from table1
right join table2
on table1.commoncol = table2.commoncol

select * from customer
right join age
on customer.ID = age.ID

-- Full - It displays complete data from 2 tables
-- Full join - Left join + Right join

-- Full join - In mysql we cannot perform full join
-- but if we want to perform we need to use Union 
-- Union - used to combine the result set of two or more select queries
-- syntax
select * from table1
left join table2
on table1.commoncol = table2.commoncol
UNION
select * from table1
right join table2
on table1.commoncol = table2.commoncol

select * from customer
left join age
on customer.ID = age.ID
union
select * from customer
right join age
on customer.ID = age.ID










