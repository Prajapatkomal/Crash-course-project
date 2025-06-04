import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const[cityName, setCityName] = useState("")
    const navigate = useNavigate()


function handlecity(){
   if(cityName ==""){
       return  alert("Please enter a city name." )
   }
 
    navigate(`/weather/${cityName}`)
}


  

  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between", margin:"auto",marginTop:'100px', width:"20%"}}>
        <input type="text" placeholder='search city name' value={cityName} onChange={(e)=>setCityName(e.target.value)} />
        <button onClick={handlecity}>Search </button> 
    </div>
    </>
  )
}
