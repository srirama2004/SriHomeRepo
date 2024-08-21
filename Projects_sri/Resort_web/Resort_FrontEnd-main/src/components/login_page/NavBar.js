import React from 'react'
import resort from '../login_page/asssets/resort.png';
import './login.css';
import { Link } from "react-router-dom";
function NavBar(){
return(
    <div className="navbar">
    <div className='navrect'>
    <img src= {resort} className='resort'/>
        <div className="navcontents">
    <ul className='Navlist'>
    <li> <Link to="/">Home</Link></li>
    <li><Link to="/profile">Bookings</Link></li>
    <li><Link to="/login">Login</Link></li>
    </ul>
    </div>
    </div>
    </div>
);

}

export default NavBar;