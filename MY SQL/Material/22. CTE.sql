-- CTE - common table expression
-- It is a kind of temporary table which has the exisistance only for one query itself

select * from film


with cte as
(select * from film)
select title,description from cte

-- To write CTE's we follow this in syntax -

-- we start writing CTE by writing
with CTENAME as
-- then within the paranthesis we can write any sql query, and that output will be saved in
-- the given CTENAME  
-- then we can write any SQL queries according to the requirement but we use CTENAME in this 
-- part, i.e whatever output we saved in CTENAME, we are reusing that in this section

EXAMPLES

-- To solve below examples you can create table by using this syntax

CREATE TABLE employees (Id INT PRIMARY KEY, Name VARCHAR(50), 
department VARCHAR(50),salary float)

INSERT INTO employees (Id, Name, department, salary) VALUES
(1, 'Alice', 'HR', 50000),
(2, 'Bob', 'IT', 60000),
(3, 'Charlie', 'IT', 70000),
(4, 'David', 'HR', 55000);

select * from employees


-- find the average salary of employees in the IT department
--  and then list employees who earn more than that average.

-- By using sub queries
select name,salary from
employees where salary > 
(select avg(salary)
from employees
where department = 'IT')

-- By using CTE
with Average_salary as 
(select avg(salary) as avg_salary
from employees
where department = 'IT')
select name,salary from employees,Average_salary
where salary > Average_salary.avg_salary

select * from employees

-- find the total salary expenditure for each department and then 
-- list departments where the total salary exceeding 1,10,000.

-- here i want to find total salary of each department and i need to display the data of 
-- departments whose total salary > 110000

-- Using CTE
with DepartmentSalaries as(
select department,sum(salary) as total_salary from employees
group by department)
select department,total_salary
from DepartmentSalaries
where total_salary >110000

-- Normal sql query
select department,sum(salary) as Total_Salary from employees1
group by department
having Total_Salary >110000

-- Using Sub queries
select * from (select department,sum(salary) as Total_Salary from 
employees1 group by department) as DeptTotalSalary
where Total_Salary > 110000

/* 
By using WITH clause or CTE's in queries we can make query easily readable. 
suppose if we write big sql query, it might not easy to read and understand 
for any others, but if we use with clause it can be easily understandable 
as we break big query into multiple different sections
2. improves performance if we use cte than sub query
the way how sql treats cte is when we execute query - sql will 1st execute query we used
inside cte and it stores that data in cte and when we use this cte in anywhere 
of our sql query, sql will just reuse the data which is already stored in cte.
this will improves performance when compared with correlated sub query

*/












