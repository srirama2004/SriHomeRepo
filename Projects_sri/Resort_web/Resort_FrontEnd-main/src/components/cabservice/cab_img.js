import React from 'react'
import { Link } from "react-router-dom";
import './cabservice.css'
import image from './assets/CAB.png'

function Cab_img(){
return <div className="cabimg">
    <img src={image} alt="" className="cab_image" />
    <h1 className='cabtxt'>CAB SERVICE</h1>
</div>

}

export default Cab_img;
