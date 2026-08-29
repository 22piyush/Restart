-- Regular Expressions - used for pattern matching of data
-- regexp - keyword used Regular Expressions

-- similar to like operator
-- like  - 2 wildcards
-- % - any number of characters
-- _ underscore - single character

-- Regexp - Anchors
-- carat/hover - ^ - starts with
-- dollar - $ - ends with

use mavenmovies

select * from film

-- Fetch the movie names starting with S

-- like operator

select title from film
where title like 'S%'

-- Regexp
select title from film
where title regexp '^S'

-- movie names ending with M
-- Like
select title from film
where title like '%M'

-- Regexp
select title from film
where title regexp 'M$'

-- Display the movie names having AT in it

like

select title from film
where title like '%at%'

select title from film
where title regexp 'at'

-- whatever i write within the quotes, that data should
-- display together


-- [] - can write multiple character in it
-- [] - if we write any data inside [], i.e. we are searching for any of that data present
-- inside []
-- Same as in operator


-- Movie names having any of the vowels
-- a,e,i,o,u

select title from film
where title regexp '[aeiou]'

-- movie names starting with vowels

select title from film
where title regexp '^[aeiou]'

-- movie names ending with vowels
select title from film
where title regexp '[aeiou]$'

use mavenmovies

-- movie names not ending with vowels
-- movie name ending with any consonants

select title from film
where title not regexp '[aeiou]$'

-- Fetch the data of movies which has S followed by any vowel

select title from film
where title regexp 'S[aeiou]'


-- Fetch the data of movies starting with S and followed by any vowel

select title from film
where title regexp '^S[aeiou]'


-- Fetch the data of the movies starting with A and ending with H


select title from film
where title regexp '^A.*H$'


-- .* - any number of characters 
-- in like - % - any number of characters
-- in Regexp - .* - any number of characters 

-- in like - _ underscore - single character
-- in regexp - single charcter - dot .

-- movie names starting with and ending with vowels
select title from film
where title regexp '^[aeiou].*[aeiou]$'

-- pipe | - something like OR operator
-- OR - where, OR - where length>100 OR rating = 'G'
-- pipe is used to compare characters

-- Display titles names with at or es

select title from film
where title regexp 'at|es'


-- titles starting with A or starting with e
select title from film
where title regexp '^a|^e'

select title from film
where title regexp '^a|e'

-- the above will display starting with a or titles names containing e in it

-- Fetch the movies based on drama

select title, description from film
where description regexp 'drama'

select title, description from film
where description regexp '[drama]'


-- regexp_replace - a function used to replace

select regexp_replace('Capgemini','ni','ny')

select regexp_replace('capgemini campus','campus','office')































 










 













