-- Functions
-- Numeric Functions
-- Character Functions
-- Date Functions

-- Numeric Functions - min(),max(),count(),sum(),avg(),round(),
-- ceil(), floor(), mod()

-- min(),max(),count(),sum(),avg() - Aggregate functions


-- min() - it displays minimum value

select * from payment

select min(amount) from payment

select min(length) from film

-- Max() - it displays maximum value

select max(amount) as Maximum_Amount from payment


-- Alias - other name - as keyword

select max(length) from film

-- count() - it returns number of records

select count(title) from film

select count(*) from film

select * from film

-- sum() - used to find the total value

select sum(amount) from payment

-- avg() - used to find average value

select avg(length) from film

select min(amount),max(amount),sum(amount),avg(amount) from
payment

-- round() - it rounds a number to the specified number of
-- decimal points 

-- 5.2 - 5
-- 5.8 - 6

select round(5.8) 
select round (5.1)
select round (5.5)

select amount from payment
select round(amount) from payment

0,1,2,3,4
5,6,7,8,9

select round(10.356,2)

select round(10.3519,4)

select round(10.3512,3)

-- ceil() - it always rounds up the value

-- if we have any digits from 1-9 after decimal we will ceil
-- it to next number only

select ceil(6.8)

select ceil(6.2)


-- floor() - it always rounds down the value

-- irrespective of what number we use after decimal we 
-- will floor it to same number

select floor(6.8)

select floor(6.2)

select floor(6.9)

select ceil(6.923)

select floor(7.8911)

-- mod() - it returns remainder value

select mod(4,2)

select mod(3,2)

select mod(3.2,2)


-- Character Functions - 

-- left(),right(),lower(), upper(), length(),substr(),mid(),
-- concate(), trim(), ltrim(),rtrim()

-- left() - it extracts number of characters from left side


use mavenmovies

select * from customer

select left(first_name,3) from customer

-- right() - it extracts number of characters from right side

select first_name, right(first_name,3) from customer

 

-- lcase() or lower() - it converts into lower case

select first_name from customer

select lcase(first_name) from customer

select lower(first_name) from customer


-- Upper()/ ucase() - it converts into upper case

select upper('sqlclass') 


-- length() - displays number of characters in string

select length('sql')

select first_name,length(first_name) from customer



-- substr() - used to extract any substring from the main string

select first_name, substr(first_name,2,3) from customer

select substr('This is SQL Session',9,11) 

select substr('This is SQL Session',9,3) 

-- 3 parameters - 1st parameter is any string/ colname
-- 2nd parameter - the starting position from where we want to extract
-- 3rd parameter - how many number of characters we wanted to extract


-- mid() - mid() and substr() are same

select mid('This is SQL Session',9,11) 

select mid('This is SQL Session',9,3) 


-- concat() - used to combine together

select * from customer

select concat(first_name,' ',last_name) as Full_Name from customer

select concat(first_name,' ',address_id) as Full_Name from customer

-- trim() - used to remove spaces from both sides

select ('           This is SQL Class    ') ;

select trim('           This is SQL Class    ') 

-- ltrim() - it removes spaces from left side i.e, leading space

select ltrim('           This is SQL Class    ') 


-- rtrim() - it removes right side space i.e, trailing space

select rtrim('           This is SQL Class    ') 



select ltrim('  this is good  ') , rtrim('  this is good    ') 


select trim('   this is good     '),trim('   this is pen   ')





