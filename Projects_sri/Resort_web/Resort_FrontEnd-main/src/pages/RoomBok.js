
import React, { useState, useEffect } from 'react';
import Axios from "axios";

import '../components/BookRoom/Roombok.css';
import image from '../assets/image.png';
import image1 from '../assets/image1.jpg';
import image3 from '../assets/image3.jpg';
import NavBar from '../components/login_page/NavBar';

import { Link, useLocation, useNavigate } from "react-router-dom";

function RoomBook() {
  const navigate = useNavigate();
  const location = useLocation();
  const [roomNo, setRoomNo] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [message, setMessage] = useState("");
  const [roomType, setRoomType] = useState(""); 
  const [others, setothers] = useState(""); 
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
  const bookRoom = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    Axios.post("http://localhost:9000/roombook", {
      roomNo: roomNo,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      roomType: roomType,
      others:others,
      resort_id:resort_id,
      guest_id:guest_id,
    })
      .then((response) => {
        console.log("Room booked successfully");
        //const newWindow = window.open("", "_blank");
        //newWindow.document.write(response.data); // Write HTML content to the new window
        //newWindow.document.title = "Room Booking Confirmation"; // Set title of the new window
        const htmlContent = response.data;
        //navigate("/payments");
        navigate("/payments", { state: { htmlContent: htmlContent } });
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("An error occurred while booking the room.");
      });
  };

  return (
    <>
        <NavBar />
        <div className="Bc">
            <div className="rectangle"></div>
            <img src={image} alt="" />
            <div className="Brectangle1">
                <h1 className="Bc1">
                    Have A Great Day In {locationName}!!
                </h1>
                <form onSubmit={bookRoom}>
                    <div className='Bpass1'>
                        <b>Check In:</b> <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} name="text1" required />
                        <b>Check Out:</b> <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} name="text" required />
                    </div>
                    <div className='Bt'>
                        <b>Room No:</b> <input type="text" value={roomNo} onChange={(e) => setRoomNo(e.target.value)} name="text1" required />
                        <b>Status:</b> <input type="text" id="text2" name="text2" />
                        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}required>
                          <option value="">Select room type</option>
                          <option value="Single">Single  $45</option>
                          <option value="Double">Double  $60</option>
                          <option value="Deluxe">Deluxe  $80</option>
                        </select>
                        <select value={others} onChange={(e) => setothers(e.target.value)}>
                          <option value="">Others</option>
                          <option value="Jym">GYM</option>
                          <option value="Spa">SPA</option>
                        </select>
                    </div>
                    <div className='Bim1'><img src={image1} alt="" /></div>
                    <div className='Bs'><input type="submit" id='Bsub' value="BOOK ROOM" /></div>
                </form>
            </div>
        </div>
        <div>{message}</div>
    </>
);
}
export default RoomBook;

