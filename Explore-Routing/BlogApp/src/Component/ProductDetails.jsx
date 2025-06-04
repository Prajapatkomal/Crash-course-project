import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ProductDetails = () => {
  const {id}=  useParams()
 const [posts,setPosts] = useState([])
  
      async function fetchdata(){
        const res =  await fetch(`https://dummyjson.com/posts/${id}`)
        const data = await res.json()
        setPosts(data)
      }
  
      useEffect(()=>{
        fetchdata()
      },[id])
   
 if(!posts.title){
   return <h1>Loding...</h1>
 }

  return (
  <>
  <div style={{width:"60%",margin:"auto", textAlign:"center", border:"1px solid black", padding:"20px", marginTop:"20px"}}>
    <div>
      <h1>ProductDetails</h1>
       <h3>Title: {posts.title}</h3>
       <p>Body:{posts.body}</p>
       <div style={{display:"flex",justifyContent:"space-around"}}>
        <h4>👍Likes:{posts.reactions?.likes}</h4>
         <h4>👎Dislikes:{posts.reactions?.dislikes}</h4>
       </div>
       <div style={{display:"flex", justifyContent:"space-around"}}>
        <h4>Views:{posts.views}</h4>
         <h4>UserId:{posts.userId}</h4>
       </div>
        <h3>Tags: {posts.tags?.join(",")}</h3> 
    </div>
  </div>
</>
  )
}

export default ProductDetails