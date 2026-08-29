-- 3 tables
actor,film_actor,film

use mavenmovies

select * from actor as a
inner join film_actor as fa
on a.actor_id = fa.actor_id
inner join film as f
on fa.film_id = f.film_id

-- Modify the above query to give first name and last name
--  of actors worked in movies starting with A

select first_name, last_name,title from actor as a
inner join film_actor as fa
on a.actor_id = fa.actor_id
inner join film as f
on fa.film_id = f.film_id
where title like 'A%'

-- Display Full Actor name

select concat(first_name,' ', last_name) as Full_Name ,title from 
actor as a3
inner join film_actor as fa
on a.actor_id = fa.actor_id
inner join film as f
on fa.film_id = f.film_id
where title like 'A%'

-- join payment table and customer

select * from payment as p
inner join customer as c
on p.customer_id = c.customer_id

-- fetch the total amount paid by mary smith
select * from customer
select * from payment

select sum(amount),first_name,last_name from payment as p
inner join customer as c
on p.customer_id = c.customer_id
where first_name = 'mary' and last_name = 'Smith'

-- 4 tables

-- Display all the customers whose name starts with A and lives in India

customer,country

customer,address,city,country
addressid
country,city,address,customer


select first_name, last_name,country from customer as c
inner join address as ad
on c.address_id = ad.address_id
inner join city as ct 
on ad.city_id = ct.city_id
inner join country as cn
on ct.country_id = cn.country_id
where first_name like 'A%' and country = 'India'

select first_name, last_name,title from actor as a
right join film_actor as fa
on a.actor_id = fa.actor_id
right join film as f
on fa.film_id = f.film_id
where title like 'A%'


























