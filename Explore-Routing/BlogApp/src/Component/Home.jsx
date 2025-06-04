
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export const Home = () => {
     const [posts,setPosts] = useState([])
      const [searchTerm,setsearchTerm] = useState("")


    async function fetchdata(){
      const res =  await fetch("https://dummyjson.com/posts")
      const data = await res.json()
      setPosts(data.posts)
    }

    useEffect(()=>{
      fetchdata()
    },[])
 
   if(!posts.length){
     return <h1>Loding....</h1>
   }
   

  const filterposts = posts.filter((post)=>
     post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
      
  


  return (
    <>
    <input style={{margin:"30px",marginLeft:"44%", padding:"5px"}} type="text" placeholder="search post by title here" value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)}/>
    <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
         {filterposts?.map((el)=>{
           return (
           <>
           <div key={el.id}   style={{border:"1px solid black"  , margin:'5px', textAlign:"center"}}>
            <Link style={{color:"black",textDecoration:"none"}} to={`/posts/${el.id}`}><h3 key={el.id} >{el.title}</h3></Link>
            </div>
            </>
          )
     
      })} 

    </div>
    </>
  )
}

