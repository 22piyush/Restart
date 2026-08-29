-- Stored Procedures
-- Store procedure in SQL is a group of SQL stmts that are stored and reused


-- i.e If any queries, we need to execute on daily basis instead of writing every query daily 
-- we can store that queries in one procedure and we can call that procedure whenever we need them.


use mavenmovies

select * from film where rating = 'PG';
select * from payment where amount > 5

-- Suppose if I want to store above 2 queries inside a procedure, we will create like this

delimiter $$
create procedure sp_rating_transaction()
begin
select * from film where rating = 'PG';
select * from payment where amount > 5;
end
$$
-- By executing this procedure will be created

call sp_rating_transaction()
-- To display the output we will call the procedure like this
-- syntax to call procedure - call procedure_name()

/*
 Delimiter - Before started writing procedure we will declare delimiter with any one of the below symbols. 
 we can use either 
 Delimiter //
 or
 Delimiter $$
 Basically we use delimiter to let SQL understand that procedure is starting and ending with the symbols which
 we declared inside delimiter. 
 
 Because by default SQL delimiter is ;(semicolon)
 i.e whenever sql sees ; it will understand that as the end of the sql statement. As we will store group of 
 SQL statements inside procedure we need to use ; at the end of each sql query
 and to differenciate or to let sql know what is the end of sql query and what is the end of procedure 
 we will declare either // or $$ as a delimiter before creating procedure and after end also we use the same
 symbol which indicates that is the end of procedure
 
 

 We can write procedures in dynamic way also, to make dynamic procedures we will declare parameters.
we have 2 parametes in and out - IN indicates input parameter and OUT indicates output parameter.
For parameters we will declare variables which helps us to store the data and we need to define the datatype

*/

-- Procedure names should be unique
-- If we want to remove any procedure we can use drop command

-- To DROP a Procedure 
Drop procedure procedurename

-- Example1 - Creating a dynamic procedure by using parameters for above query

delimiter $$
create procedure sp_rating_transactionD(in rate varchar(10),in amt int)
begin
select * from film where rating = rate;
select * from payment where amount > amt;
end
$$

call sp_rating_transactionD('G',6)

call sp_rating_transactionD('NC-17',7)

-- In the above example iam using IN parameter and declared a variable called as rate.
-- I.e By using like this we can able to give some inputs to the procedure and according to the inputs procedure 
-- should display the ouput, by using this when ever i will call the procedure i can give inputs accordingly


-- Example-2
-- create a procedure to display cities names of any country
delimiter //
create procedure sp_cityofcountry(in cntry varchar(40))
begin
select city from city c inner join
country cn 
on c.country_id = cn.country_id
where country = cntry;
end
//

call sp_cityofcountry('India')

-- Using OUT parameter 

-- create a procedure to count the number of cities in any country

delimiter //
create procedure sp_citycount(in cntry varchar(40),out cnt int)
begin
select count(city) into cnt from city c inner join
country cn 
on c.country_id = cn.country_id
where country = cntry;
end
//
call sp_citycount('India',@cnt)
select @cnt

/*
 Here i used OUT parameter and declared cnt as variable and i also used IN paramter and declared cntry 
 as variable. By executing above query iam expecting SQL to store the count(city) i.e aggregated 
 value in cnt variable

and while calling procedure we are using @variable name

according to the inputs given in call procedure, SQLL will execute the procedure and store that out parameter 
value in @cnt

and to display that particular output we use select @cnt

This is how we works with OUT parameter

*/

-- The above procedure can be created by without using OUT parameter as well as given below

delimiter //
create procedure sp_citycount1(in cntry varchar(40))
begin
select count(city) from city c inner join
country cn 
on c.country_id = cn.country_id
where country = cntry;
end
//
call sp_citycount1('India')






















