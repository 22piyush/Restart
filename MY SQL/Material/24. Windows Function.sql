-- Window Functions
-- Rank,Denserank, RowNumber, Lead and Lag

use sql8

-- Rank - it will skip the ranks
-- DenseRank - It will not skip the ranks

create table tbl_score (id int,Gender varchar(5),score int)
insert into tbl_score values (1,'M',101),(2,'F',101),(3,'M',300),
(4,'M',400),(5,'F',500),(6,'M',600)

select * from tbl_score

-- Rank - it will skip the ranks

select *, rank() over(order by score) as Ranking from tbl_score

-- over is used to specify sql to create window of records

select *, rank() over(order by score desc) as Ranking from tbl_score

-- Partition by Gender
-- Gender wise we will rank

select *, rank() over(partition by Gender order by score) as Ranking
 from tbl_score


-- Dense_Rank - it won't skip the ranks

select *, dense_rank() over(order by score) as Ranking from tbl_score

select *, dense_rank() over(order by score desc) as Ranking from tbl_score

-- partition by 

select *, dense_rank() over(partition by Gender order by score) as Ranking
 from tbl_score
 
 insert into tbl_score values (7,'M',300)


-- RowNumber - used to give numbers to rows in sequential
-- just like index

select *, row_number() over() from tbl_score

use divya
select * from employees
select *, row_number() over(partition by department) from employees

-- Lag - used to display previous record data


select *, lag(salary) over(partition by department order by id) as PreviousEmpSal
from employees 

select *, lag(salary,2,0) over(partition by department order by id) as PreviousEmpSal
from employees 

-- Lead - used to display next record data

select *, lead(salary) over(partition by department order by id) as NextEmpSal
from employees 

select *, lead(salary,2,0) over(partition by department order by id) as NextEmpSal
from employees 


-- Fetch a query to display if the salary of an employee is higher, lower or equal to previous
-- employee

select * , lag(salary,1,0) over(partition by department order by id) as PreviousEmpSal,
case when salary > lag(salary,1,0) over(partition by department order by id) 
then 'Higher than Previous Employee'
when salary < lag(salary,1,0) over(partition by department order by id) then 
'Lower than Previous Employee'
when salary = lag(salary,1,0) over(partition by department order by id) then
'Same as Previous Employee'
end Salary_Status from employees






