import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const ProductDetail = () => {

  const {city} = useParams()
  const [data,setData] = useState({})


   async function fetchdata(){
     try {
        const res =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2c4fd5d107ec7a103172e6110fce76e7`)
     const data = await res.json()
     setData(data)
     } catch (error) {
        console.log("error",error)
     }
   }

   useEffect(()=>{
       fetchdata()
   },[city])

  if(!data.name) return <h2>Loding...</h2>


  return (
    <>
    <div style={{ margin:"auto",marginTop:'100px', width:"40%", border:"1px solid", textAlign:"center", backgroundColor:"lightblue"}}>
        <h1 style={{color:"darkRed" , fontFamily:"monospace", fontWeight:"bolder", fontSize:"40px"}}>{data.name}</h1>

        <p><strong>Coordination-Longitude:</strong>{data.coord?.lon}</p>
         <p><strong>Coordination-Latitude:</strong>{data.coord?.lat}</p>
           <p><strong>Sunrise:</strong>{data.sys?.sunrise}</p>
             <p><strong>Sunset:</strong>{data.sys?.sunset}</p>
         <p><strong>Temperature:</strong>{data.main?.temp}</p>
           <p><strong>Humidity:</strong>{data.main?.humidity}</p>
            <p><strong>Pressure:</strong>{data.main?.pressure}</p>
           <p><strong>Condition:</strong>{data.weather?.[0]?.description}</p>
      </div>
    </>
  )
}
