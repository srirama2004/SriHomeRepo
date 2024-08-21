import React from 'react'
import './profile.css';
import pfp from'./assets/pfp.png'
import { Link } from "react-router-dom";

function Profile_IMG(){ return<>
<div className="profilepage">
<img src={pfp} alt="pfp" className="profile_pfp" />
</div>
<div className="profilepage">
<h2 className='profile_name'>SriRam V</h2>
</div>

<div className="profilepage2">
<h2 className='profile_booking'>Your Bookings</h2>
</div>
</>
}

export default Profile_IMG;