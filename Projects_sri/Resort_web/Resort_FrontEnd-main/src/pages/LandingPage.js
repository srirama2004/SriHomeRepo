
import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from '../components/login_page/NavBar';
import banner from '../components/LandingPage/bg1.png';
import mumbai from '../components/LandingPage/Gateway-of-India-Mumai-monument-2012.webp';
import delhi from '../components/LandingPage/fb-img-1502472371491.jpg';
import bangalore from '../components/LandingPage/Featured-image-The-Vidhana-Soudha-in-Bangalore-1244x700.jpg';
import '../components/LandingPage/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
const { guest_id} = location.state || {};
 console.log(guest_id);
  const handleNavigate = (resortId) => {
    navigate('/Home_page', { state: { resort_id: resortId,guest_id:guest_id} });
  };
  return (
    <div className='bod'>
      <NavBar />
      <img src={banner} alt='Banner' className='banner' />
      <center>
        <b style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: 60 }}>MANIPAL RESORTS</b>

      </center>
      <div className='container'>
        <div className='locations-heading'>
          <h1>Locations</h1>
        </div>
        <div className='image-container'>

          <div>
            <button onClick={() => handleNavigate(2)}>
              <img src={mumbai} alt='Mumbai' className='image'></img>
            </button>
            <center>
              <h2>Mumbai</h2>
            </center>
          </div>
          <div>
            <button onClick={() => handleNavigate(3)}>
              <img src={delhi} alt='Delhi' className='image'></img>
            </button>
            <center>
              <h2>Delhi</h2>
            </center>
          </div>
          <div>
            <button onClick={() => handleNavigate(1)}>
              <img src={bangalore} alt='Bangalore' className='image'></img>
            </button>
            <center>
              <h2>Bangalore</h2>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

