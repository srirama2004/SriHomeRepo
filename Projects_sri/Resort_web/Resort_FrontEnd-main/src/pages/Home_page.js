
import React, { useState, useEffect } from 'react';
import '../components/home/Home_page.css';
import axios from 'axios';

import bg1 from '../assets/bg1.png';
import Himg from '../assets/Himg.png';
import Himg2 from '../assets/Him2.png';
import Himg3 from '../assets/Him3.jpg';

import Himg4 from '../assets/download1.png';
import { Link, useLocation, useNavigate } from "react-router-dom";

function Home_page() {
    const location = useLocation();
    const [data, setData] = useState("");
    const [resort_id, setResortId] = useState(null);
    const [guest_id, setGuestId] = useState(null);
    const navigate = useNavigate(); // Hook for navigation
      // Check if guest_id is null, if so, redirect to login page
    useEffect(() => {
            setGuestId(location.state.guest_id); // Set guest_id if available
            console.log(guest_id+"guestId");
            if (guest_id === undefined) {
                navigate('/login');
             }
    }, [guest_id, navigate]);

    useEffect(() => {
        if (location.state && location.state.resort_id) {
            setResortId(location.state.resort_id);
        }
    }, [location]);
    let locationName;
    if (resort_id === 2) {
        locationName = "Mumbai";
    } else if (resort_id === 3) {
        locationName = "Delhi";
    } else if (resort_id === 1) {
        locationName = "Bangalore";
    } else {
        locationName = "Unknown";
    }
    const handleCallNow = () => {
        axios.post("http://localhost:9000/Home_page")
            .then(response => {
                console.log("Call request sent successfully");
               alert(response.data)
            })
            .catch(error => {
                console.error("Error sending call request:", error);
                // Handle error, if needed
            });
    };

    return (
        <div className="Hc">
            <div className="Hrectangle">
                <b style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: 30 }}>MANIPAL RESORT</b>
            </div>
            <div className='Hbg'><img src={bg1} alt="" />
                <b style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: 30 }}>WELCOME TO {locationName.toUpperCase()}!!</b>
                <textarea placeholder="" className='Htext0' value={"Welcome to our luxurious resort! Indulge in the ultimate getaway experience with our premium accommodations, exquisite dining options, refreshing spa treatments, and convenient services. Whether you're looking to relax by the pool, explore the city in style, savor delectable cuisine, or enjoy personalized attention from our dedicated staff, we're here to ensure your stay is nothing short of extraordinary. From room service to cab bookings, we've got everything you need for an unforgettable escape. Your dream vacation starts here!"} style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontWeight: 'bold', fontSize: '20px' }}></textarea>
                <div className="Hrectangle1">
                    <div className='Hc1'>
                        <div className='Himg'><img src={Himg} alt="" /></div>
                        <textarea placeholder=""className='Htext'
    value={"Book your perfect getaway with us today! Our luxurious rooms offer unparalleled comfort, making your stay truly unforgettable. Whether you're traveling for business or pleasure, we have the perfect accommodations for you. Reserve your room now and experience the ultimate luxury!"}
    style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontWeight: 'bold', fontSize: '20px' }}
       ></textarea>

                        <div className='practice' style={{ color: 'blue', fontSize: '16px', fontWeight: 'bold' }}>{data}</div>
                        {/* Navigate to RoomBook page with resort_id */}
                        <h2 className="RoomBook" onClick={() => navigate("/RoomBook", { state: { resort_id: resort_id,guest_id: guest_id } })}>
                            <b> Book A Room Now!</b>
                        </h2>
                    </div>
                </div>
                <div className="Hrectangle2">
                    <div className='Hc2'>
                        <div className='Himg2'><img src={Himg2} alt="" /></div>
                        <textarea placeholder="" className='Htext1' value={"Explore the city in style with our premium cab service! Whether it's a quick trip to the airport or a leisurely tour around town, our fleet of luxurious vehicles ensures a comfortable and memorable ride. Sit back, relax, and let us take care of the rest!"} style={{ textAlign: 'center', padding: '10px',fontStyle: 'italic', fontWeight: 'bold',fontSize:'20px'}}></textarea>
                        {/* Navigate to cab page with resort_id */}
                        <h2 className="Cabservice" onClick={() => navigate("/cab", { state: { resort_id: resort_id,guest_id: guest_id} })}>
                            <b> Book A Cab Now!</b>
                        </h2>
                    </div>
                </div>
                <div className="Hrectangle3">
                    <div className='Hc3'>
                        <div className='Himg3'><img src={Himg3} alt="" /></div>
                        <textarea placeholder="" className='Htext2' value={"Indulge in a culinary adventure with our delectable food offerings! From gourmet cuisine to local delicacies, our diverse menu has something for everyone. Whether you're craving a hearty meal or a light snack. Place your order now and treat your taste buds to a delightful feast!"}
    style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', fontWeight: 'bold', fontSize: '20px' }}
></textarea>
                        {/* Navigate to Food page with resort_id */}
                        <h2 className="FoodOrder" onClick={() => navigate("/Food", { state: { resort_id: resort_id,guest_id: guest_id } })}>
                            <b>Order Now!</b>
                        </h2>
                    </div>
                </div>
                <div className="Hrectangle4">
                    <div className='Hc4'>
                        <div className='Himg4'><img src={Himg4} alt="" /></div>
                        <textarea placeholder="" className='Htext3'  value={"Need anything during your stay? Our dedicated room service is just a call away! Enjoy top-notch service and convenience at your fingertips."}  style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '20px',padding:'10px' }}></textarea>
                        <button className="call-now-button" onClick={handleCallNow}>
                            <b>Call Now!</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_page;

