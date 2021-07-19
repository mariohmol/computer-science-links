# Knex


Knex 
* https://stackfame.com/knexjs-complete-tutorial

Cheatsheet:
* https://devhints.io/knex

Express with Knex and migrations:
* https://medium.com/@tobie.tsuzuki/getting-started-with-node-js-express-and-knex-5640f595df98


Connecting Express to Knex:
* https://www.youtube.com/watch?v=9lW7SHtGCAY

----

## Assignment:

We will build an app with express and knex

Create an database called `school`.
There are 2 migratios:
* table students with name(string) , phone(integer), email(string)
* table city with name(string) , state(string)

Make a seed process for city and add 3 cities (NY, LA, Washginton)

Remember to configure on knexfile.js to have your local postgres credentials (database: 'school', user: postgres, pass...)

```sh
knex init
# Open the knexfile.js, delete the development,stagind and let the produtcion
# Configure to have your user (try postgres or your machine user),dbname and password
knex migrate:make students
knex migrate:latest
```

Create a file called queries.js to have those methods. Use the knexcheatsheet to help you.
Create one express route for each query, that will return the data as asked.

* /user - Create new User               (POST)
* /student - CREATE new Student         (POST)
* /student - READ All students          (GET)
* /student/:id - UPDATE one student     (PATCH)
* /student/:id - DELETE one Student     (DELETE)
* /student/:id - Get User By Id         (GET)

Follow this project as an guide for the assignment:
* https://github.com/Fayhen/node-sample-api