import React from "react";
import "./Guests.css"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";
const ReservationsTable = () => {
  // Sample reservation data
  // const reservations = [
  //   { reservation_id: 1, resort_id: 101, guest_id: 201, room_number: 101, payment_id: 301, check_in_date: '2024-03-21', check_out_date: '2024-03-24', total_price: 300 },
  //   { reservation_id: 2, resort_id: 102, guest_id: 202, room_number: 102, payment_id: 302, check_in_date: '2024-04-15', check_out_date: '2024-04-18', total_price: 450 },
  //   { reservation_id: 3, resort_id: 103, guest_id: 203, room_number: 103, payment_id: 303, check_in_date: '2024-05-10', check_out_date: '2024-05-15', total_price: 600 }
  // ];

  const [reservations, setreservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:5000/getreservations"
        );
        setreservations(response.data);
        // Assuming your server returns an array of guest objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // doesnt work
    fetchData();
  }, []);

  return (
    <div className="table-container">
      <h2 className="table-heading">Reservations</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Resort ID</th>
            <th>Guest ID</th>
            <th>Room Number</th>
            <th>Payment ID</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.reservation_id}>
              <td>{reservation.reservation_id}</td>
              <td>{reservation.resort_id}</td>
              <td>{reservation.guest_id}</td>
              <td>{reservation.room_number}</td>
              <td>{reservation.payment_id}</td>
              <td>{reservation.check_in_date}</td>
              <td>{reservation.check_out_date}</td>
              <td>${reservation.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsTable;
