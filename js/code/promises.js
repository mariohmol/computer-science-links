// simple

//ES5 - callback
function call(){
    return axios(resp=>{ res.data }, error=>{ console.log(e) })

}
// ES6 - Promises
function call(){
    return axios()
    .then(res=>{
        return res.data
    })
    .catch(e=>{
        console.log(e)
    })
}
//ES7 - async/await
async function call(){
    try{
        const res = await axios();
        return res.data
    }catch(e){
        console.log(e)
    }
}

// -------




/*
Callbacks x Promises x await
*/

// CALLBACKS
console.log('main')
x = 10
setTimeout(()=>{
  console.log('tim1')
  setTimeout(()=>{
    console.log('tim3', x)
    console.log('tim3 ends', x)
  }, 2000);
  console.log('tim1 ends')
}, 1000);


setTimeout(()=>{
  console.log('tim2')
  setTimeout(()=>{
    console.log('tim4', x)
    console.log('tim4 ends', x)
  }, 2000);
  console.log('tim2 ends')
}, 1000);

console.log('main ends')
// console.log(module)
// console.log(require.main)
console.log(require.main === module)
// require.main === module

// Event Loop
// main   tim1, tim2
// tim1   tim2, tim3
// tim2   tim3, tim4
// tim3   tim4
// tim4   ---
// ends


//PROMISES
setTimeoutP = async (time) => new Promise(  (resolve, reject)=> setTimeout(resolve, time) );

console.log('main')
x = 10

setTimeoutP(1000)
.then(()=>{
  console.log('tim1')
  return setTimeoutP(2000);
})
.then(()=>{
  console.log('tim3', x)
})


// AWAIT
const myfunc  = async () => {
  const answer1 = await setTimeoutP(1000);
  console.log('1');
  const answer2 = await setTimeoutP(2000);
  console.log('2');
};

myfunc();







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


// Promises lifecycle
console.log('before promise');

const q = new Promise( (resolve, reject)=>{
    setTimeout(()=>{
        console.log('inside promise');
        if(Math.random()>0.5){
            resolve();
        }else{
            reject();
        }
        
    }, 2000);
});
console.log('after promise');

q
.then(()=>{
    console.log(' promise resolved');
    //loop passing all tests
})
.catch(()=>{
    console.log(' promise rejected');
})

// before
// after
// inside
// resolved
