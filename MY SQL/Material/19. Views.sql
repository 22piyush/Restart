use mavenmovies

-- Views - It is a way of storing a query
-- also called as Virtual table

select * from film

-- Display the film details whose rating is PG
select * from film
where rating = 'PG'

-- syntax of creating view 
Create view view_name as

-- example

Create view Vfilm_PG as
select * from film
where rating = 'PG'

-- Display the data of view
select * from Vfilm_PG

-- Alter the view

alter view Vfilm_PG as
select * from film
where rating = 'PG' and length>100

select * from Vfilm_PG

-- Drop the view
drop view Vfilm_PG


/*
view won't create seperate table again, it is just creating a view for the existing tables
If we add any new data in the table,that data will be impacted/reflected in our views automatically

we can use create, insert, alter and drop commands in views without any restrictions. 
But if we use update & delete command on views that data which is updated or deleted in view will be impacted in table
also. so to aviod this issue, whenever we create views we need to use any of these concepts -
 i.e, distinct clause, aggregate function, group by clause.
If we use any of this 3 concepts while creating views, then on that views if we tried using Update command 
and delete command on the views, it won't work. As we cannot perform update and delete command on views only then our
data in the table will also be safe

So we need to make sure to use atleast one of either distinct clause, or aggregate functions or group by clause
while creating views. then if we use update or delete command, it will throw error stating views are non updatable.

But again without using any of this 3 concepts also we can create views but we should not use update and delete commands
on them as that will impact our data in tables.


*/

-- Lets solve any example practically

use durgasoft3

select * from employees1

create view Vemp as
select * from employees1
where salary>40000

select * from Vemp

delete from Vemp
where empid = 2

select * from employees1

-- Here that empid 2 row data is deleted from table also 

-- create a view by using distinct clause

create view Vdis_emp as
select distinct * from employees1
where salary>40000

select * from Vdis_emp

delete from Vdis_emp
where empid =4

-- we will get error here as given below:

delete from Vdis_emp
 where empid =4	Error Code: 1288. 
 The target table Vdis_emp of the DELETE is not updatable	0.015 sec
 
 -- i.e as i used distinct while creating view, i was not able to use update/delete commands on view, which will helps me in keeping my data from table also safe.
 

Why we use views:

/*
 Instead of writing complex queries and execute every time, we can save or create those queries as a view so that query 
 writing process will become so faster and easier.
 It helps developer to manage queries well.
 For some non developers we create views, so that they can access data easily.

 suppose they want to access any data, instead of giving all the tables data, we can just give what they needed.
 for that particular query or data we can create a view and we can share that with them

*/

-- Renaming view - Need to use table keyword only 
-- syn - Rename table oldviewname to newviewname
 Rename table v_dis_emp to Dis_EMP
 