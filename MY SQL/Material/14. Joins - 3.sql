-- when to use left and right join, whenever we are taking about 
 -- null values or the data which is not available 
 
  use sql8
 
 
 select * from customer;
 select * from age
 
 -- Display the data of customer whose age is not available is null means null value there
 
 select c.id, cname from customer as c
 left join age as a
 on c.id = a.id
 where age is null
 
 select c.id, cname from age as a
 right join customer as c
 on a.id = c.id
 where age is null

-----------------------------------------------------

create table orders(orderid int,Sales int)
insert into orders values (1,100),(2,110),(3,120),(4,130),(5,140)

select * from orders

create table order_status(orderid int,Returned Varchar(5))
insert into order_status values (3,'Yes'),(5,'Yes')

select * from orders;
select * from order_status


-- Fetch the details of only returned orders
-- we can use inner join or right join

select o.orderid,Sales,Returned from orders as o
inner join order_status as os
on o.orderid = os.orderid

-- Right join
select * from orders as o
right join order_status as os
on o.orderid = os.orderid

-- Fetch the details of only not returned orders 
-- Left join

select o.orderid,sales from orders as o 
left join order_status as os
on o.orderid = os.orderid
where os.orderid is null

select o.orderid,sales from order_status as os
right join orders as o 
on os.orderid = o.orderid
where os.returned = Yes




