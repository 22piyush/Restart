use mavenmovies

-- 4 tables

-- Display all the customers whose names starts with A and 
-- lives in India
 
customer,address,city,country
addressid,cityid,countryid

select c.first_name, last_name,country from customer as c
inner join address as a
on c.address_id = a.address_id
inner join city as ci
on a.city_id = ci.city_id
inner join country as cn
on ci.country_id = cn.country_id
where first_name like 'A%' and country = 'India'


customer,store,address,city,country


-- Natural Joins, Cross join, Self join

-- Natural join -  If there is a common col between the tables, natural join
-- simply starts joining the tables based on that common column

-- In natural join, writing on condition and giving common column is not neccessary


use sql8

select * from customer;
select * from age

select * from customer
natural join age

-- default it performs inner join

-- Natural join - if there is common col b/w 2 tables, 
-- it will create a join b/w them - it displays common data b/w them just like inner join
-- but common col will be identified by sql itself, because of this we don't give common column name in syntax i.e we don't use ON 
-- in output it displays common col name only once

-- In natural join we can change join type also, using left or right


select * from customer
natural left join age

select id,cname from customer
natural right join age



-- Drawback - 2 common columns

use mavenmovies

select * from actor;
select * from film_actor

select * from actor 
natural join film_actor

select * from customer
 natural join payment
 
 -- This query returns blank because we have 2 common columns in both tables i.e customer_id and last_update in both the tables, 
 -- so sql will start joining the tables by using 2 common columns but as we have different data in the columns
 -- it cannot perform join and we will get output as blank table
 
 
 
-- cross join - cartesian product - it joins each row of 1st table with every 
-- row of 2nd table



use sql8

select * from customer
cross join age


-- Self join - if any table is joining with itself


-- HR Analytics

create table tb_employees
 (ID int, ename char(10),manager_id int)
 
 insert into tb_employees
 values (1,'A',2),(2,'B',3),(3,'C',1),(4,'D',1),(5,'E',1)
 
select * from tb_employees

 manager_id
 empid 1101 divya
 1105 - managerid - 1101
 
 -- Display emp names and their manager names
 
 select e.ename as EmployeeNames,m.ename as ManagerNames from tb_employees as e
 inner join tb_employees as m
 on m.id = e.manager_id
 
  
 