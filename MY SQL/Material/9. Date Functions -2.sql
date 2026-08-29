-- Date function

-- year() - it extracts years from dates

select * from rental

select rental_date,year(rental_date) from rental

-- month - it extracts month from date

select rental_date, month(rental_date) from rental

-- monthname() - it extracts month name

select rental_date, monthname(rental_date) from rental


-- How many movies were rented in the month of may

select * from rental

select count(rental_date) from rental
where monthname(rental_date) = 'May'

or 

select count(rental_date) from rental
where month(rental_date) = 5


-- curdate() - it gives current date

select curdate()

-- sysdate() - it returns system date

select sysdate()

-- current_time() - it gives current time

select current_time()

-- now() - it displays current date and time

select now()

select now(), curdate(),current_time(),sysdate()


-- datediff() - used to find difference between any 2 dates
-- the output we will get in the form of number of days

select * from rental

select rental_date,return_date,datediff(return_date,rental_date) from rental

use mavenmovies

use sql8

select * from employees

insert into Employees
values (3,'John',80000,'2020-04-22',8000),
(4,'Nick',36000,'2023-05-23',3600)

-- Expereince of Employees

now() - display current date and time


select *,datediff(now(),dateofjoining) from employees


-- Approximation method

-- datediff in the form of years

select *,(datediff(now(),dateofjoining) / 365) as Experience_Years from employees

-- datediff in the form of months

 select *,(datediff(now(),dateofjoining) / 30.43) as Experience_Months from employees
 
 
 sales
 
 -- Number of days it took to deliver any product
 -- How many days they took to start shipping - datediff (shipdate,orderdate)
 
 orders table
 
 orderid orderdate delivarydate shipdate 
 
 
 -- adddate - used to add any number of days or months to any date
 
 
 -- add 10 days to rental_date
 
 select rental_date, adddate(rental_date, interval 10 day) from rental
 
 
 select rental_date, adddate(rental_date, interval 1 month) from rental
 
 
 