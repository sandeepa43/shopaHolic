import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'

 const Navbar = ()=>{
    return(
            <nav className="navbar">   
                    <p><Link to="/">ShopaHolic</Link></p>
                    <ul className="nav-wrapper" >
                    {/* <Link to="/">Shopping</Link> */}
                   <li className="nav-li"><Link to="/wish">Wishlist</Link></li>
                    <li className="nav-li">|</li>
                      <li className="nav-li"><Link to="/cart">cart</Link></li>
                       <li className="nav-li">|</li>
                    </ul>
            
            </nav>  
    )
}

export default Navbar;