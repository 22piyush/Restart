/*
 Denormalization - If we store all the related data in one single
table,it is denormalized data
 Disadvantages - Data Redundancy, Memory wastage, Performance issues

 we have only one advantage in denormalised data i.e accessing the 
 data is easy. No need of  joins, Unions, sub queries 
 
 But if we store data in denormalised form we will face some Anomalies
 
Anomalies - also termed as problems
If we store data in denormalized form we have 3 anomalies
 1. Insertion Anomaly 
 2.Deletion Anomaly
 3.Updation Anomaly
 
  1. Insertion Anomaly  - That means, when your data is something which will creates issues when we 
 want to insert some new data
   
   Examples - (To explain these examples iam considering the same table which we used while discussing Limitations of Excel)
   
Example - If we want to add any other new product name, which is not sold yet. 
 we cannot add that details because order id will be primary key for this table. 
 
  2.Deletion Anomaly - If we delete the data of any record which is having any particular information only in that 
  single row, we will loss the information of some data from the table which leads to Deletion Anomaly 

 Example - If the Supplier will sell 3 Products and if any one product like charger is sold only one time and as we are
 maintaining all the data  in one single table the order id will be primary key as charger sold only one time 
 we have only one record of charger,
 And if suppose that order is returned and we need to delete that row, the info about charger will also get deleted. 
 And now the table will look like the seller will sell only 2 products, which is wrong.
 
 
  3.Updation Anomaly - When ever we are updating some related data, that update will effect many rows if we store data 
  in denormalised form, which is considered as Updation Anomaly
  
  Example - If i want to update the price of any product, for ex- i want to update smartphone price from 30000 to 35000.
 I will use single update query but it will get updated in all the rows where i sold smartphones. 
 Suppose if i sold 500 smartphones, the price will get updated in all the 500 rows, which will effect the performance. 
 
 So avoid all these anomalies we use normalisation
 
  Normalization - The data is divided into smaller chunks of 
  pieces so that we can handle all the anomalies easily
  
 -- if we divide one large table into smaller different tables
 we should make sure there should common col b/w tables
 
 To avoid all the anomalies the data is stored in normalisation, 
 which will reduce data redundancy and data integrity
 
 -- Levels of Normalisations 
 -- For any denormalised data, if we want to convert it to normalised 
 -- form we need to follow certain rules in order to normalise that data.
 i.e we have different levels of normalisations and each level we will have some 
 particular rules 

 -- That Levels of Normalisations is also called as Normal Forms
 
 1st level of Normalisation is called 1NF like wise we have
 1NF
 2NF
 3NF
 BCNF (not used)
 4NF 
 5NF
 
 Though we have many different levels of normalizations or normal forms, 
the standard form of normalization is 3rd normal form(3NF). 
All the companies today if they have any denormalized dataset and if they try to
normalise their data, they will normalise only until third normal form

 -- i.e if any denormalised dataset is converted in such a way which is satisfying all the 
 rules of 3NF then we can say that dataset is a Normalised dataset
 
 Rules of Normal Forms:
 
If any denormalised dataset satisfies below 2 rules(1NF) that dataset is said to be 
 in 1NF i.e 1st Normal Form
1NF says
 1. Every column must have one single value
 2. Each row must be unique and not mandate to have a primary key
 
2NF says 
1. Data must be 1NF
2. All the non key attributes we have they must be fully dependent on the candidate key. 
i.e if a non key attribute is partially dependent on candidate key, then split them into 
separate tables
3. Every table must have a primary key and it should be connected to other tables with
foreign key.

Here,
 CANDIDATE KEY - A combination of 2 columns that can act as a primary key is called as 
 candidate key.
 In candidate key , we have combination of 2 columns and that 2 columns is choosed by us
but we need to make sure the data of that combined columns should always be unique 

NON KEY ATTRIBUTES - Any column that is not a part of candidate key, primary key

If the dataset satisfies above mentioned 3 rules of 2NF, then that dataset is said to be in
2nd Normal form i.e 2NF 

3NF says 
1.Data must be in 2NF.
2.There must no transitive dependency. 
(If any column is existing which shows transitive dependency 
we need to split that columns also into separate tables)
TRANSITIVE DEPENDENCY means
 if A-B (A depends on B) , B-C , then i can say A-C 
 
If the dataset satisfies above mentioned 3 rules of 3NF, then that dataset is said to be in
3rd Normal form i.e 3NF

If any dataset is satisfying all the 3NF rules, then that dataset is considered as a 
 Normalized dataset
 
 


 
 
 





 
 
 
 
 
 
 
 
 
 
 
 
 
 
 