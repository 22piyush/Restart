-- Order by clause

use mavenmovies

-- Order by clause - used to sort the data either in 
-- ascending or descending order

select * from film
order by length desc

-- display the details of payment table by sorting
-- amount column in descending

select * from payment
order by amount desc

-- ascending
select * from payment
order by amount asc

-- by default it sorts in ascending order

select * from payment
order by amount

-- Display the details of payment table by sorting
-- amount in descending but display only staff_id 1 data

select * from payment
where staff_id = 1 
order by amount desc

-- we can sort data in multiple levels also

-- sort the data by customer id , then sort by amount
-- in descending

select * from payment
order by customer_id, amount desc

select * from payment
order by customer_id desc, amount desc

-- Limit clause - 2 use cases

-- 1.used to restrict the number of records we wanted
-- to see in the output

select * from film
limit 10

-- Display top 10 amounts in payment

select * from payment
order by amount desc
limit 10

top 5 salary emp details

select * from employees
order by salary desc
limit 3

use sqldemo

select * from employees

-- 2.limit is used to skip the records

select * from payment

-- dont want to see 1st 4 records, want to display next
-- 6 records

select * from payment
limit 4,6

-- we use 2 parameters after limit
-- 1st - whatever number we give, that many records 
-- it will skip
-- 2nd - whatever number we give,that many next
--  values it will display

select * from payment
limit 2,3

-- find the transaction details of top 5 amounts

select * from payment
order by amount desc
limit 5

-- fetch the top 20 transactions for staff_id 1

select * from payment
where staff_id = 1
order by amount desc
limit 20

use sqldemo

select * from employees

-- Find the second lowest salary employee details

select * from employees
order by salary 
limit 1,1

-- third highest sal

select * from employees
order by salary desc
limit 2,1

-- 2nd & 3rd highest sal

select * from employees
order by salary desc
limit 1,2

-- Distinct clause - used to display unique values 

use mavenmovies

select * from payment

select distinct staff_id from payment

select distinct customer_id from payment

select distinct * from tbname

use sqldemo1

select * from employees

insert into employees values 
(2,'sam',60000,'2021-02-12')

select distinct * from employees

delete from employees where salary = 6000

-- sequence of writing sql query

select
distinct
from/join
where
order by
limit

-- sequence of sql query execution

from/join   
where  
select 
distinct 
order by  
limit 

use mavenmovies

-- Like operator - used for pattern matching of the data

-- wildcards - 2 wildcards
-- % - any number of characters
-- _(underscore) - single character

select * from customer

-- Fetch the details of customers whose name starting
-- with M

select * from customer 
where first_name like 'M%'  


-- Fetch the details of customers whose name ending 
-- with M

select * from customer
where first_name like '%M'

-- Fetch the details of customers whose name starting
-- and ending with M

select * from customer
where first_name like 'M%M'

-- underscore _ single charcter

select * from customer 
where first_name like 'T_M' 

select * from country

-- Display 7 letter country name and it should 
-- start with A

select * from country
where country like 'A______'

select * from country
where country like 'A%i_'

select * from customer
where first_name like '_O%'

------------------------------------------

select * from actor;
select * from film_actor; -- Relationship
select * from film


create table film_actor (actor_id int,film_id int,
foreign key(actor_id) references actor(actor_id),
foreign key(film_id) references film(film_id))

show create table film_actor
