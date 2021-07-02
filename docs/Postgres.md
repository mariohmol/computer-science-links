## Instalation

```sh

  To migrate existing data from a previous major version of PostgreSQL run:
  brew postgresql-upgrade-database

To have launchd start postgresql now and restart at login:
  brew services start postgresql
Or, if you don't want/need a background service you can just run:
  pg_ctl -D /usr/local/var/postgres start
  
  ```

Create the db

```sh
createdb restaurants-app
psql -d restaurants-app -f ~/Downloads/nyc-restaurants-data-backup.sql
```


## Database Architecture

General content:
* https://www.postgresqltutorial.com/

Command Line
* https://www.educba.com/postgresql-list-tables/

DataType:
* https://www.postgresqltutorial.com/postgresql-data-types/

Create table:
* https://www.postgresqltutorial.com/postgresql-create-table/


Insert Data:
* https://www.postgresqltutorial.com/postgresql-insert/

Update Data:
* https://www.postgresqltutorial.com/postgresql-update/

Select Data:
* https://www.postgresqltutorial.com/postgresql-select/

Delete Data:
* https://www.postgresqltutorial.com/postgresql-delete/


## Assignment

Create a new database e Import the [postgres](./postgres/movie_database.sql.zip)
Do the following SQLs:

1. Find all the movies
2. Find all the movies by actor George Hardy
3. Find all movies by genre Comedy
4. Find all movies by genre Comedy and Rating greater than 2
5. Count all the movies
6. Count all the movies by genre Comedy
7. Count total movies by genre
8. Create a new Table called Rating, that will hold the movie_id and a rating
9. Insert 3 new movies
10. Update all the movies that has Rating = 0 to be Rating = 1
