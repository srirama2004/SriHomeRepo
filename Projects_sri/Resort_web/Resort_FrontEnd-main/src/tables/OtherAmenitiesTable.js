import React from "react";
import "./Guests.css"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";
const OtherAmenitiesTable = () => {
  // Sample other amenities data
  // const amenities = [
  //   { reservation_id: 101, type: 'Spa', charge: 50 },
  //   { reservation_id: 102, type: 'Gym', charge: 20 },
  //   { reservation_id: 103, type: 'Pool Access', charge: 30 }
  // ];

  const [amenities, setamenities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/getother");
        setamenities(response.data);
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
      <h2 className="table-heading">Other Amenities</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Type</th>
            <th>Charge</th>
          </tr>
        </thead>
        <tbody>
          {amenities.map((amenity) => (
            <tr key={`${amenity.reservation_id}-${amenity.type}`}>
              <td>{amenity.reservation_id}</td>
              <td>{amenity.type}</td>
              <td>${amenity.charge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OtherAmenitiesTable;
