import React, { useState, useEffect } from 'react';
import NavBar from '../components/login_page/NavBar';
import Introduction from '../components/login_page/Introduction';
import Background from '../components/login_page/Background';
import '../components/cabservice/cabservice.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
function Cabservice() {
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState(""); 
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [resort_id, setResortId] = useState(null);
    const [guest_id, setGuestId] = useState(null);
    useEffect(() => {
      if (location.state && location.state.resort_id) {
          setResortId(location.state.resort_id);
      }
      if (location.state && location.state.guest_id) {
        setGuestId(location.state.guest_id); // Set guest_id if available
    }
  }, [location]);
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            from: from,
            to: to,
            resort_id:resort_id,
            guest_id:guest_id,
        };

        fetch('http://localhost:9000/cab', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to book the food item');
            }
            return response.text();
        })
        .then((response) => {
            console.log("Cab booked successfully");
            const htmlContent = response; // Response is already in text format
            navigate("/payments", { state: { htmlContent: htmlContent } });
        })    
          .catch((error) => {
            console.error("Error:", error);
            setMessage("An error occurred while booking the cab.");
          });
    };

    return (
        <>
          <NavBar />
          <Background />
          <Introduction />
            <div className="loginform">
            <div className="loginbg" style={{ marginLeft: "800px" }}>
                    <div className="loginheader"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="emailgrp">
                            <h2 className="emailtxt">From</h2>
                            <div className="email">
                                <input type='text' value={from} onChange={(e) => setFrom(e.target.value)} required />
                            </div>
                        </div>
                        <div className="passgrp">
                            <h2 className="passtxt">To</h2>
                            <div className="pass">
                                <input type='text' value={to} onChange={(e) => setTo(e.target.value)} required />
                            </div>
                        </div>
                        <div className="loginbtn">
                            <h2 className="login">Book</h2>
                            <input type='submit' />
                        </div>
                        <Link to="/">
                            <h2 className="login_signupbtn">
                                Return Back
                            </h2>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Cabservice;

