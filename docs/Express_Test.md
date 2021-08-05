# Express Test

**Mocha and Chai**

Intro:
* https://dev.to/bushraalam/introduction-to-testing-with-mocha-and-chai-57po

Detail:
* https://www.nexsoftsys.com/articles/test-mocha-chai-test-driven-development.html

**Chai**

* https://www.chaijs.com/

Expect
* https://www.chaijs.com/api/bdd/

Plugins:
* https://www.chaijs.com/plugins/

## Express

Basic:
* https://groundberry.github.io/development/2016/12/10/testing-express-with-mocha-and-chai.html

Full material:
* https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai

## Assignment

Apply testing for the movies app.

### Environment

- First create a new database: movies-test
- Open the knexfile.js and create an `test `tag based on the `development`
- On package.json , add "migrate:test": "NODE_ENV=test npm run migrate"
- run `npm run migrate:test`

### Base

- Create an server.js file and move the db connection and app.listen to this file
- Export the app inside the `app.js` and import it on server.js

Create the test file to test LIST, READ, CREATE , DELETE, DELETE AND UPDATE.
