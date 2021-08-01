# JWT

* https://jwt.io/


Charts in the begin explaiing the flow:
* https://www.bezkoder.com/node-js-jwt-authentication-mysql/


## Simple example / Using passport

* https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

Here show screenshots using postman to test:
* https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/

## JWT in Details

* https://betterprogramming.pub/a-practical-guide-for-jwt-authentication-using-nodejs-and-express-d48369e7e6d4
## With React

* https://jasonwatmore.com/post/2018/08/06/nodejs-jwt-authentication-tutorial-with-example-api#running-react



## Body Examples

Local Auth 
POST /auth/login (refresh token)
{
    username: MSAssertion,
    password: 12345
}

Response
{
    authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
}

JWT Auth (Bearer Auth)
GET /posts
Headers
{
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
}

