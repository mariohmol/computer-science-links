
Use one API example like: 
* https://jsonplaceholder.typicode.com/
*

```jsx
const [posts, setPosts] = useState([])
const [selectedPost, setSelectedPost] = useState()
const [comments, setComments] = useState([])

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>setPosts(data))
},[])


useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts/'+selectedPost+'/comments')
.then(res=>res.json())
.then(data=>setComments(data))
},[selectedPost])


return <>

  {posts.map(post=><li>
    {post.title}
    <button onClick={()=> setSelectedPost(post.id) }>show comments</button>
    
    {post.id === selectedPost && comments.map(comment=> <div>
      {comments.body}
    </div>)
  </li>)

</>
```
