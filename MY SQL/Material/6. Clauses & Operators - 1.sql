use mavenmovies

select * from actor;
select * from film;

select * from film_actor

select * from category

select * from film_category

select * from customer;

select * from payment;

-- Clauses and Operators

-- Where - used to give conditions abd accordingly the
-- data will be updated, deleted or filtered

-- where clause is used for filtering the data 

-- Fetch the movies whose rating is G

select * from film
where rating = 'G'

-- Fetch the data of the movies whose length greater than 100

select * from film
where length>100

-- Fetch the movies whose rating is G and whose length
-- greater than 100

-- AND operator - used to combine conditions in where clause


-- And - both the conditions should be true

select * from film
where rating = 'G' and length>100

-- where clause works at row level

select * from film

-- Fetch the movies whose rating is G or whose length
-- greater than 100

-- OR - used to combine conditions in where clause

-- atleast one condition should be true

select * from film
where rating = 'G' or length>100

-- Fetch the transaction details whose payment greater than 5 
-- and who made transactions with staff id 1

select * from payment
where amount > 5 and staff_id = 1


select * from customer

-- fetch the data of customer id 5 and customer id 6 from payment

select * from payment
where customer_id = 5 or customer_id = 6

-- Fetch the data of customer id 5,6,7,8,9 from payment table

select * from payment 
where customer_id between 5 and 9

-- Between operator / Range operator
-- used to retrive the data within specified range of values

-- Fetch the data of customer id 5,6,8,9 from payment table

-- In operator/ Membership operator
-- used to retrive the data that matches a list of values

select * from payment
where customer_id in (5,6,8,9)

-- Between operator works for numerical data only


-- Fetch the data of movies whose rating is G,PG,NC-17

select * from film
where rating in ('G','PG','NC-17')


Not 
select * from film
where rating not in ('G')

select * from film
where rating not in ('G') and length not in (86,48)

select * from film
where rating not in ('G') or length in (86,48)

select * from film
where rating not in ('G') and length between 50 and 100 
and rental_duration in (5,7,6)

select * from film
where rating not in ('G') and length between 50 and 100 
or rental_duration in (5,7,6)


-- Order by clause

