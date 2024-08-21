import React from "react";
import "./Guests.css"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";

const RoomTable = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/getrooms");
        setRooms(response.data);
        // Assuming your server returns an array of guest objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // doesnt work
    fetchData();
  }, []);

  // Sample room data
  // const rooms = [
  //   { room_number: 101, room_type: 'Standard', capacity: 2, price_per_night: 100, availability: 'Available' },
  //   { room_number: 102, room_type: 'Deluxe', capacity: 4, price_per_night: 200, availability: 'Booked' },
  //   { room_number: 103, room_type: 'Suite', capacity: 6, price_per_night: 300, availability: 'Available' }
  // ];

  return (
    <div className="table-container">
      <h2 className="table-heading">Rooms</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Room Type</th>
            <th>Capacity</th>
            <th>Price Per Night</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.room_number}>
              <td>{room.room_number}</td>
              <td>{room.room_type}</td>
              <td>{room.capacity}</td>
              <td>${room.price_per_night}</td>
              <td>{room.availability ? "True" : "False"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;
