'use strict';

const chai = require('chai');
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

const promise1 = chai.request('https://api.github.com')
  .get('/search/repositories?q=bookmark');

const promise2 = chai.request('https://api.github.com')
  .get('/search/repositories?q=bookmark');

const promise3 = chai.request('https://api.github.com')
  .get('/search/repositories?q=bookmark');


const promise4 = chai.request('https://api.github.com')
  .get('/search/repositories?q=bookmark');

const promise5 = chai.request('https://api.github.com')
  .get('/search/repositories?q=bookmark');

const promise6 = chai.request('https://api.github.com')
  .get('/search/repositories?q=bookmark');



const all = Promise.all([promise4, promise5, promise6])
  .then(responses => {
    console.log(responses.length);
  });

const chain = promise1
  .then((response) => {
    console.log(1);
    return promise2;
  })
  .then((response) => {
    console.log(2);
    return promise3;
  })
  .then((response) => {
    console.log(3);
  });