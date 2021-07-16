-- // all movies with or withou genre
select * from movies left outer join genre 


-- // all genres with or without movie
select * from movies right outer join genre
select * from genres left outer join movies

-- // Full multiplication
select * from movies m, genres g


Movies Table
ID - Name                - genre_id 
1  - Movie Matrix        - 2
2  - Movie Jurassic Park - 1

Genres
ID - Name 
1 - Action
2 - Comedy


1  - Movie Matrix        - 2  1 - Action
1  - Movie Matrix        - 2  2 - Comedy
2  - Movie Jurassic Park - 1  1 - Action
2  - Movie Jurassic Park - 1  2 - Comedy


select * from movies m, genres g where m.genre_id = g.id
select movies m inner join genres g on m.m.genre_id = g.id

1  - Movie Matrix        - 2  2 - Comedy
2  - Movie Jurassic Park - 1  1 - Action