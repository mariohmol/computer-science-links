app = express() //creates a new express app

//get - method , // path route   
app.get('/folders', (req,res) => {

    if(req.get('Authorization') !== 'mytoken'){
        return res.send('you are not authorized!')
    }

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

app.listen(8080) // http://localhost:8080

fetch(`http://localhost:8080/folders?id=1`, {
    headers: {
        Authorization: 'mytoken'
    }
})
.then(res=> console.log(res.body)) // [{}]