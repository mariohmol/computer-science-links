app = express() //creates a new express app

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
    ])
})

app.delete()
app.post()
app.put()

app.listen(8080) // http://localhost:8080 - For specific domain, configure under your VPS (Virtual Private Server)

// Two query parameters key=value&key=value ...
fetch(`http://localhost:8080/folders?id=1&sort=name`, {
    headers: {
        Authorization: 'mytoken'
    }
})
.then(res=> console.log(res.body)) // [{}]