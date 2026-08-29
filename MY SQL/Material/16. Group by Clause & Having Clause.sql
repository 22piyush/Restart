-- Group by Clause & Having clauses

-- Group by clause  - used with aggregate functions i.e, 
-- min(),max(),sum(),count(),avg() to summarize the data
-- based on specific column

-- grouping will be done based on gender,score,location or any other 
-- columns based on our requirements

50 employess
30 are male 20 are female

-- who will get highest salary from male
max

empid empname gender  sal
1   sdsd        F      50k
2    abvsha     M       45k
3  dcdf         M       50k

male   female
95k      50k

use mavenmovies

select * from payment

-- Total amount collected by each staff_id

select staff_id, sum(amount) from payment
group by staff_id

-- whatever column name we write in group by, we need to
-- write it in select command

-- How many payments were collected by staff_id

select staff_id,count(*) from payment
group by staff_id


-- we can use multiple calculations at a time


select staff_id, sum(amount), count(*) from payment
group by staff_id


-- Total amount paid by each customer

select customer_id, sum(amount) from payment
group by customer_id

-- Total amount paid by each customer and display their names

select c.customer_id,first_name,last_name, sum(amount) from
 customer as c
inner join payment as p
on c.customer_id = p.customer_id
group by c.customer_id


-- where clause - filtering or conditions
-- where clause works in row level

select * from film 
where length>100


-- Having Clause - If we want to filter the grouped data,
--  then we use having clause


-- Having clause - when we want to filter the data which we
-- aggregated or on the data on which we used group by clause,
-- then we need to use having clause


-- For aggregate functions we use group by clause and if we use group by
-- clause we need to use having clause for filtering that data


-- Fetch the data of the customer whose total amount greater
-- than 150

 select first_name,last_name, sum(amount) from customer as c
 inner join payment as p
 on c.customer_id = p.customer_id
 group by first_name,last_name
 having sum(amount) >150
 
 /*
 we will always use where clause before group by
 and having clause after group by
 */
 
 -- On the grouped data if we need to apply filter then
 -- we use having clause, on the individual data if we need
 -- to apply filter, i.e before grouping the data 
 -- then we use where clause
 

-- Sort the above data by total amount in descending order
-- and fetch top 2 customer details whose amount greater
-- than 150

select first_name, last_name, sum(amount) from customer as c
 inner join payment as p
 on c.customer_id = p.customer_id
 group by first_name, last_name
 having sum(amount) >150
 order by sum(amount) desc
limit 2

-- 


employees

empid gender sal
1       M     50
2       F     60
3       M     65
4       M     70
5       F     65

gender wise total sal

select sum(sal) from emp
group by gender

M    F
185  125

having sum(sal) >130

where sal>60

-- modify the above to show the data of active customers only

-- or

-- Fetch the top 2 customer details by sorting the data in descending
-- whose total amount greater than 150 but display only active customers

 
select first_name , last_name, sum(amount) from customer as c
inner join payment as p
on c.customer_id = p.customer_id
where active = 1
group by first_name , last_name
having sum(amount) >150
order by sum(amount) desc
limit 2


-- sequence of writing SQL query

select
distinct
from/join
where
group by
having
order by
limit

-- sequence of sql query execution

from/join
where
group by 
having
select 
distinct
order by 
limit

select * from city;
select * from country

-- Fetch the total amount collected by each city in india

payment,customer, address, city,country

select city, sum(amount) from payment as p
inner join customer as c
on p.customer_id = c.customer_id
inner join address as ad
on c.address_id = ad.address_id
inner join city as ct
on ad.city_id = ct.city_id
inner join country as cn
on ct.country_id = cn.country_id
where country = 'India'
group by city

-- Find the total amount for all cities and all countries

select country, city, sum(amount) from payment as p
inner join customer as c
on p.customer_id = c.customer_id
inner join address as ad
on c.address_id = ad.address_id
inner join city as ct
on ad.city_id = ct.city_id
inner join country as cn
on ct.country_id = cn.country_id
group by country, city


-- we can use multiple columns in group by 


