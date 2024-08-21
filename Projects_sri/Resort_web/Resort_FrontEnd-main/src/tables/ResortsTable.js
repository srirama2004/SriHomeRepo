import React from "react";
import "./Guests.css"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";

const ResortsTable = () => {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/getresorts");
        setResorts(response.data);
        // Assuming your server returns an array of guest objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // doesnt work
    fetchData();
  }, []);

  // Sample resort data
  // const resorts = [
  //   { resort_id: 101, location_name: 'Beachfront Resort' },
  //   { resort_id: 102, location_name: 'Mountain Retreat' },
  //   { resort_id: 103, location_name: 'City Center Hotel' }
  // ];

  return (
    <div className="table-container">
      <h2 className="table-heading">Resorts</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Resort ID</th>
            <th>Location Name</th>
          </tr>
        </thead>
        <tbody>
          {resorts.map((resort) => (
            <tr key={resort.resort_id}>
              <td>{resort.resort_id}</td>
              <td>{resort.location_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResortsTable;
