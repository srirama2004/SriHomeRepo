
import React from "react";
import { Link } from "react-router-dom";

import '../components/nopage/nopage.css';
import NavBar from '../components/login_page/NavBar'

const NoPage = () => {

    return <div className="nopage">
    <NavBar></NavBar>
    <h1>404</h1>
    <h5>Return Or Sleep Outside!!</h5>
    <Link to="/">
    <button className="nopagebutton">Return Back!!</button></Link>
    </div>
};

export default NoPage;