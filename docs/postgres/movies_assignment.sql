-- 1. Find all the movies
select * from movies;


-- 2. Find all movies by genre Comedy
select * from movies m, genres g  
where g.name = 'Comedy' AND m.genre_id = g.id

-- 3. Find all movies by genre Comedy and Rating greater than 80
select * from movies m, genres g  
where g.name = 'Comedy' AND m.genre_id = g.id 
and m.rating > 80

-- 4. Count all the movies
select count(*) from movies

-- 5. Count all the movies from genre Comedy
select count(*) from movies m, genres g  
where g.name = 'Comedy' AND m.genre_id = g.id


-- 6. Find title and rating for movies with Rating greater than 90
select title, rating from movies where rating > 90

-- 7. Count total movies by genre name
select count(*), g.name from movies m, genres g 
where m.genre_id = g.id
group by g.name

-- 8. Create a new Table called rating, that will hold the movie_id and a rating
create table rating(
    movie_id integer,
    rating integer
)

-- 9. Insert 3 new movies
insert into movies(name, genre_id) values ('Movie A', 1),('Movie B', 3),('Movie C', 2)

-- 10. Update all the movies that has Rating = 80 to be Rating = 100
update movies set rating = 80 where rating = 100


-- 11. Find all the movies name by actor George Hardy
select m.title from movies m
join cast_members c on m.id = c.movie_id
join actors a on a.id = c.actor_id
where a.name ='George Hardy';
