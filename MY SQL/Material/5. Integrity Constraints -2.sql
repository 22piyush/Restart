use sql8

-- Check Constraint -ensures that all values in a column satisfy a specific condition or rule.

create table users (userid int, name varchar(20),age int CHECK (age>=18))

insert into users values (1,'john',21)
insert into users values (2,'sam',12)

-----------------------------------------------------------------------------------

-- Foreign key - used to create a relationship b/w tables

create table Course_Details (cid int primary key,
cname varchar(20),Duration int)

insert into Course_Details values (1,'SQL',35),(2,'TABLEAU',45),(3,'POWER BI',40)

select * from Course_Details


create table Students (Sid int primary key, sname varchar(20),Course_id int,
foreign key(Course_id) references Course_Details(cid))

insert into students values (1101,'Raj',2),(1102,'Sam',1),(1103,'John',1)

select * from Students

insert into students values (1104,'Raj',4)
-- This will throw error because course id 4 is not there in cid column of Course_Details table

---------------------------------------------------------------------------------

-- Using Truncate command on Foreign key tables

truncate table Course_Details
drop table Course_Details

-- If we use trunacte/drop on Course_Details, it throws error because we used references 
-- of this table in students table
-- So to remove Course_Details table /Parent table we have 2 options

-- Option-1. We can drop Students table/child table. By doing this foreign key relation
-- will be deleted and then we use trunacte/drop on Course_Details table
     
     Drop table students

-- Option-2. Without dropping Students table/child table we can only remove the foreign key
-- relationship by using below syntax of alter command
-- syn
alter table tbname
drop foreign key constraint_name

-- To know the constraint_name we can use the below syntax

show create table students

CREATE TABLE `students` (
   `Sid` int NOT NULL,
   `sname` varchar(20) DEFAULT NULL,
   `Course_id` int DEFAULT NULL,
   PRIMARY KEY (`Sid`),
   KEY `Course_id` (`Course_id`),
   CONSTRAINT `students_ibfk_1` FOREIGN KEY (`Course_id`) REFERENCES `course_details` (`cid`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci



-- students_ibfk_1 is the constraint name here, so 


-- To remove foreign key relation,  

alter table students
drop foreign key students_ibfk_1

-- Now i can use truncate/drop command on Course_Details table /Parent table.

truncate table Course_Details



