import React from "react";
import "./Guests.css"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";
const ServicesTable = () => {
  // Sample service data
  // const services = [
  //   { guest_id: 101, service_id: 1, staff_id: 201, service_name: 'Room Cleaning', description: 'Basic cleaning service', price: 50 },
  //   { guest_id: 103, service_id: 3, staff_id: 203, service_name: 'Room Service', description: 'Food and beverage delivery', price: 30 }
  // ];

  const [services, setservices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/getservices");
        setservices(response.data);
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
      <h2 className="table-heading">Services</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Guest ID</th>
            <th>Service ID</th>
            <th>Staff ID</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.service_id}>
              <td>{service.guest_id}</td>
              <td>{service.service_id}</td>
              <td>{service.staff_id}</td>
              <td>{service.service_name}</td>
              <td>{service.description}</td>
              <td>${service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
