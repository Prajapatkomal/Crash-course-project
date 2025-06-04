
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav style={{padding:"15px", border:"1px solid", backgroundColor:"aqua", display:'flex',justifyContent:"space-around"}}>
        <Link className="linktag" to="/home">Home</Link>
         <Link className="linktag" to="/about">About</Link>
    </nav>
  )
}
