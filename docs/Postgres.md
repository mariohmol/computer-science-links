## Instalation

```sh
# To install
brew install postgresql

# To migrate existing data from a previous major version of PostgreSQL run: brew postgresql-upgrade-database

# To have launchd start postgresql now and restart at login:
brew services start postgresql

# Or, if you don't want/need a background service you can just run: 
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


Import and Export Data:
* https://www.prisma.io/dataguide/postgresql/inserting-and-modifying-data/importing-and-exporting-data-in-postgresql




## Relationships

Basic relation:
* https://www.sqlshack.com/learn-sql-types-of-relations/

Primary and Foreign Keys:
* https://www.postgresqltutorial.com/postgresql-foreign-key/
* https://www.javatpoint.com/postgresql-foreign-key

Joins
* https://www.postgresqltutorial.com/postgresql-joins/
* https://www.educba.com/postgresql-inner-join/

![SQL Joins](./postgres/sqljoins.png)

### One to One, One to Many , Many to Many

Basic: 
* https://www.tutorialspoint.com/One-to-Many-or-Many-to-One-Relationship-in-DBMS

With Postgres:
* https://medium.com/@emekadc/how-to-implement-one-to-one-one-to-many-and-many-to-many-relationships-when-designing-a-database-9da2de684710

Visual
* https://wandb.ai/ayush-thakur/dl-question-bank/reports/One-to-Many-Many-to-One-and-Many-to-Many-LSTM-Examples-in-Keras--VmlldzoyMDIzOTM

## Database Tool

Install [Dbeaver](https://dbeaver.io/).

[Here](https://www.cdata.com/kb/tech/postgresql-jdbc-dbvr.rst) you can see how to se up a new connection.

Create a new connection and on PostgresSQL tab click on Show all database. 

## Assignment

Create a new database called `movies`, download the [Movie Database](./postgres/movie_database.sql.zip) and unzip it
Import the database using in your terminal in the folder where has the unzip file:
```sh
psql movies < movie_database.sql
```

Do the following SQLs:

1. Find all the movies
2. Find all movies by genre Comedy
3. Find all movies by genre Comedy and Rating greater than 70
4. Count all the movies
5. Count all the movies from genre Comedy
6. Find title and rating for movies with Rating greater than 90
7. Count total movies by genre name
8. Create a new Table called rating, that will hold the movie_id and a rating
9. Insert 3 new movies
10. Update all the movies that has Rating = 80 to be Rating = 100
11. Find all the movies name by actor George Hardy


You can find the solution [here](./postgres/movies_assignment.sql). 
