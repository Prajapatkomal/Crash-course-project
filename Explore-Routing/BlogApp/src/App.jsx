
import './App.css'
import { About } from './Component/About'
import { Home } from './Component/Home'
import { Navbar } from './Component/Navbar'
import {Route, Routes} from 'react-router-dom'
import ProductDetails from './Component/ProductDetails'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="*" element={<h1>404 Not Found</h1>}/>
         <Route path="/posts/:id" element={<ProductDetails/>}/>
    </Routes>

    </>
  )
}

export default App
