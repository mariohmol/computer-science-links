# Intro


## Nodejs Project

NPM:
* https://www.cloudhadoop.com/2018/10/beginner-guide-to-packagejson-file.html

MVC:
* https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
## HTTP

HTTP Methods:
* https://medium.com/swlh/restful-api-design-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-e37a8416e2a0

HTTP Status Code:
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
- 200 - OK : GET - PUT(replace) - PATCH (alter)
- 201 - Created : POST
- 204 - No Content DELETE
- 400 - Bad Request ( ex: name is required but was not provided)
- 401 - Unauthorized
- 404 - Not Found
- 500 - Internal Server Error



## Express

Hello World, environment and set up of a new project:
* https://codecondo.com/how-to-create-a-simple-web-app-with-express-js/


```js
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

const users = [];

app.get('/users', function (req, res) {
    res.json(users);
});

app.post('/users/:id', function (req, res) {
    const id = req.params.id;
    const name = req.query.name
    const country = req.query.country
    const newUser = {
        userId: id,
        userName: name,
        country: country,
        text: 'Hi Mario!'
    }
    users.push(newUser)
    res.status(201).json(newUser);
});

const server = app.listen(3000, function () {
    const port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});
```

## Router

Express Router Methods:
* https://appdividend.com/2018/09/15/express-router-tutorial-example-from-scratch/

Route parameters/Query/Body:
* https://dev.to/gathoni/express-req-params-req-query-and-req-body-4lpc

Route Methods Structure:
* https://coursework.vschool.io/express-params-and-query/

Simple Router Groups:
* https://www.geeksforgeeks.org/express-js-express-router-function/
* http://expressjs.com/en/guide/routing.html

MVC Router:
* https://www.terlici.com/2014/09/29/express-router.html


Assigment:
1. Make on express app with GET/POST/GETID/PATCH/DELETE
2. Make an router group called /cars
3. Each Method should return a simple message just as an example

Example:

```js
// cars.js
var router = express.Router()
router.get('/')
router.post('/')
// by id
router.get('/:id') 
router.patch('/:id')
router.delete('/:id')
module.exports = router

// index.js
var cars = require('./cars')

// ...

app.use('/cars', cars)

// ..
```

