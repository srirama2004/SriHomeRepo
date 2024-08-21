import React from 'react'
import './profile.css';
import star from'./assets/star.png'
import { Link } from "react-router-dom";

function Review(){ return<>
<div className="profile_stars">
<h2 className='profile_name'>Leave A Review</h2>

</div>
<div className="profile_stars">
    <img src={star} alt="" className="prof_stars" />
    <img src={star} alt="" className="prof_stars" />
    <img src={star} alt="" className="prof_stars" />
    <img src={star} alt="" className="prof_stars" />
    <img src={star} alt="" className="prof_stars" />
</div>
</>
}

export default Review