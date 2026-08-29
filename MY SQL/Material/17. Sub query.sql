-- Sub query - query with in a query
-- If a query is nested in another query to retrive 
-- the results, then that query is called as sub query

-- Basically sub query contains 2 parts
-- 1.Inner query/sub query
-- 2. Outer query/ main query

use sql8

select * from employees

-- display the employees details whose salary is less than 
-- the average salary of all the employees

select avg(salary) from employees - 56500

select * from employees where salary < 56500 - static way 

-- dynamic way 
                                
select * from employees where salary <
(select avg(salary) from employees)
			

-- sub query/ inner query - we need to write inside paranthesis only
-- the output of inner query will become input for the outer query

-- Types of sub queries
-- Single row sub query/Scalar sub query
-- Multi Row Sub query
-- Correlated sub query

-- Non correlated sub query

-- Single row sub query/Scalar sub query - it returns a single value
-- if a sub query returns single value, then it is called as single row sub query

-- agg functions - min,max,sum,count,avg -it displays single value only
-- so mostly we use Aggregate functions in Single Row Sub query and for comparing the conditions we use
-- single valued operators - =,>,<,>=,<=,!=

use mavenmovies

-- Fetch the data of those transactions where amount paid is 
-- greater than average amount

select * from payment where amount >
(select avg(amount) from payment)

-- Find the second highest amount from payments

-- without sub queries
select * from payment
order by amount desc
limit 1,1

-- using sub queries

select max(amount) from payment where amount <
(select max(amount) from payment)
50,49
50<50
49<50

-- Multi Row Subquery - if a sub query returns more than 1
-- row as a output, then it is called as Multi Row Subquery

use dataanalytics
select * from employees;
select * from departments

-- Display the employees whose salary is equal to the salary
-- of atleast one employee in deptid 2

select * from employees 
where salary IN
(select salary from employees
where department_id = 2)

75k
60k
65k

-- Display details of employees who work in
-- departments with more than 1 employee

-- we need to find number of employees working in each department

select * from employees where 
department_id IN
(select department_id from employees
group by department_id
having count(*)>1)
2,3,4

-- Non Correlated Sub query - If inner query/sub query is not related
-- to outer query then that is called as Non Correlated Sub query

-- If we can able to execute inner queries seperatly, then it is 
-- Non Correlated Sub query

-- Correlated sub  query - If inner query/sub query is related
-- to outer query then that is called as Correlated Sub query

-- Fetch the firstname and lastname of the customers who
-- made atleast 30 transactions 
select first_name,last_name from customer as c
where 30 <
(select count(*) from payment as p
where p.customer_id = c.customer_id)

32

p 
1 - 1 - 1
1- 1 - 2  
32
33- 2 -1


c-1 p- 32
c-2 p-27

select * from customer;
select * from payment

/*
select * from customer;
select * from payment
32 - cus - 1
27  cus2 - 2
29  - 3
Basically in correlated sub query, after query is executed the SQL query processing will depends on the number of times 
that condition is satisfying for each output value, i.e SQL will execute each row many times according to the conditions
which leads to the performance issue
*/
-- Subqueries we will face performance issues
-- Joins are better to use instead of sub queries






