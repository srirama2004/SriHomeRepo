import React from 'react'
import { Link } from "react-router-dom";

function Cabservice(){
 return <div className="loginform">
    <div className="loginbg">
    <div className="loginheader"></div>

    <form>
           <div className="emailgrp">
           
           <h2 className="emailtxt">From</h2>
            <div className="email"> <input  type='text' required   /></div>
            </div>


            <div className="passgrp">
          
            <h2 className="passtxt">To</h2>
            <div className="pass"> <input type='text' required/>
            </div>
            </div>
            

            <div className="loginbtn">
                <h2 className="login">Book</h2>
                <input type='submit'/>
            </div>
            <Link to="/">
            <h2 className="login_signupbtn">
                return back!!
            </h2>
            </Link>
            </form>


    </div>
    </div>
}

export default Cabservice;