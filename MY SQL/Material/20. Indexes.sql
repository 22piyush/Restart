/*
Index - Index is somethinglike a reference which is used to retrieve data from the database quickly.
Indexes are created on tables.
Indexes will help sql to find the values or data faster

We have 2 Types of indexes
1.Clustered INdex
2.Non-clustered index

 Cluster index - In MySQL, clustered index will be defined automatically when we define a Primary key in a table 
 and with that cluster index only, data is stored in sorted manner which helps SQL to retrieve the data faster

We have only 1 PK for every table, so automaticaly i can say, we will have only 1 clustered index for every table
In MySQL, we won't create cluster index manually

In clustered index data is stored in sorted manner 
For example, when we create a table and defined any column as primary key ex-Empid, clustered index will be created 
automatically and helps in sorting data , 
i.e, suppose in Empid column the data we enter is in 1 2 3 5 4 ,
although we entered data like this, SQL will store the data or display the data in sorted manner.
 
we can check by using the below syntaxes
*/


create table emp(EID int,Name varchar(10))

insert into emp values (1,'Sam'),(2,'John'),(4,'Ram'),(3,'Abhi')

select * from emp

-- Here primary key is not defined and we inserted data randomly, whenever we displayed data we got data in the same order which we inserted 

create table emp1(ID int primary key,Name varchar(10))
insert into emp1 values (1,'Sam'),(2,'John'),(4,'Ram'),(3,'Abhi')
-- Here I inserted some values randomly not sequentially

select * from emp1 

-- Here i got the data in sequential order only. This is because of the clustered index which was created automatically when 
-- PK is defined on the ID column. 
-- And beacuse of this, SQL will retrive the data quickly



/*
 2. Non clustered index - If we want to create index for any other remaining columns than PK, we create non cluster index
  
  In the above created Emp table, as we define ID has PK, automatically clustered index was created. 
but in same table we have name column and data in name column will be  in unsorted manner
like for example - b d a c e, 
id   name 
1     b
2     d
3     a
4     c
5     e
 
 i.e, names are not in sequence and if i write a query to display the details where name = c , 
at that time sql will search in every row to understand where that name is there,

 instead of that we can create a non clustered index for that column,
 in non clustered index  sql will create a seperate table and saves the names in sorted manner
 and saves the memory address of that value in the table. 
 now if we ask any query sql will go to that table sees the index and then go back to the emp table and find the data.
where as in clustered index, since everything is sorted automatically it does not refer to any
other table, it directly finds the value and fetch the data. 
  
-- Drawbacks we have with Non cluster index

clustered index can only be 1 but we can create multiple non clustered indexes.

 But by creating multiple non cluster indexes, as the tables will be created in back ground ,
 which leads to wastage of memory, so performance goes down.

For that reason we will create index for those columns that are frequently searched, sorted or filtered.

*/

-- How to create index
     
create index index_name
on tablename(colname)

create index ix_ename
on emp1(ename)

-- Another way to creating index

alter table tbname
add index indexname(colname)

alter table employees
add index ix_EN(ename)

-- Dropping a index
alter table employees
drop index ix_EN











