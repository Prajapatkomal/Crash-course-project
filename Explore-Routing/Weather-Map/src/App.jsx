

import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Component/Home'
import { ProductDetail } from './Component/ProductDetail'

function App() {
  return (
   <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/weather/:city" element={<ProductDetail/>}/>
     </Routes>
   
    </>
  )
}


export default App
