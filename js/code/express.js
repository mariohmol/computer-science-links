// npm i express - 
// Same as import React from 'react' -> ES6
const express = require('express'); // require -> ES5
app = express() // creates a new express app ( HTTP Server )

//get - method , // path route   
// endpoint = '/folders'
app.get('/folders', (req,res) => {

    if(req.get('Authorization') !== 'mytoken'){
        return res.send('you are not authorized!')
    }

    // req.query = { id: 1, sort: 'name' }
    const id = req.query.id;    
    const sort = req.query.sort; 
    console.log(id, sort);
    res.json([
        {
            id: 1,
            name: 'myfolder'
        }
    ]) // 200
})

app.delete()
app.post('/folder', (req,res)=>{
    res.status(201).json({}); // .send() -> text
})
app.put()

app.listen(8080) // http://localhost:8080 - For specific domain, configure under your VPS (Virtual Private Server)

// Two query parameters key=value&key=value ...
fetch(`http://localhost:8080/folders?id=1&sort=name`, {
    headers: {
        Authorization: 'mytoken'
    }
})
.then(res=> console.log(res.body)) // [{}]