import React from "react";
import "./Guests.css"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";

const CabServicesTable = () => {
  // Sample cab service data
  const [cabServices, setCabServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/getcabs");
        setCabServices(response.data);
        // Assuming your server returns an array of guest objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // doesnt work
    fetchData();
  }, []);

  // const cabServices = [
  //   {
  //     guest_id: 101,
  //     resort_id: 201,
  //     destination_from: "Airport",
  //     destination_to: "Hotel",
  //     price: 50,
  //   },
  //   {
  //     guest_id: 102,
  //     resort_id: 202,
  //     destination_from: "Hotel",
  //     destination_to: "Club",
  //     price: 30,
  //   },
  //   {
  //     guest_id: 103,
  //     resort_id: 203,
  //     destination_from: "Hotel",
  //     destination_to: "Beach",
  //     price: 40,
  //   },
  // ];

  return (
    <div className="table-container">
      <h2 className="table-heading">Cab Services</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Cab Service ID</th>
            <th>Guest ID</th>
            <th>Resort ID</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cabServices.map((service) => (
            <tr key={`${service.guest_id}-${service.resort_id}`}>
              <td>{service.cabservice_id}</td>
              <td>{service.guest_id}</td>
              <td>{service.resort_id}</td>
              <td>{service.destination_from}</td>
              <td>{service.destination_to}</td>
              <td>${service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CabServicesTable;
