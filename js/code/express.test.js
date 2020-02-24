// Create a test file for app.js: /test/app.test.js

const supertest = require('supertest'); // make the request to your endpoint
const { expect } = require('chai'); // assert - check if the response match you expect

const app = require('./app'); // app.js - app you will test

describe("Testing my Sum endpoint", () =>{

    it('Is sum endpoint requiring A variable query string', () => {
        supertest(app)
        .get('/sum')
        .query({ b: 1 })
        .expect(400)
    })

    // Alternative Flow
    it('Is sum endpoint requiring B query string', () => {
        supertest(app)
        .get('/sum')
        .query({ a: 1 })
        .expect(400)
    })

    // Main Flow or Happy Flow
    it('Is sum endpoint working', () => {
        supertest(app)
        .get('/sum')
        .query({ a: 1, b: 1 })
        .then(res => {
            expect(re.body.c).to.eql(2) // { c: 2 }
        })
    })
})

describe("Testing my Cipher endpoint", () =>{
    // ...
})