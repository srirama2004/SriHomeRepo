
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cabservice() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            from: from,
            to: to
        };

        fetch('http://localhost:9002/CabService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to book the cab');
            }
            return response.text();
        })
        .then(() => {
            console.log("Cab booked successfully");
            // Handle success, maybe show a success message or redirect to a confirmation page
        })
        .catch((error) => {
            console.error("Error:", error);
            // Handle the error here
        });
    };

    return (
        <div className="loginform">
            <div className="loginbg">
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
    );


export default Cabservice;
