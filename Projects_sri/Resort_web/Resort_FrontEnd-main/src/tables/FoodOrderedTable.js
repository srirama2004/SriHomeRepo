import React from "react";
import "./Guests.css"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";
const FoodOrderedTable = () => {
  // Sample food ordered data
  // const foodOrders = [
  //   { reservation_id: 1, type: 'Pizza', count: 2 },
  //   { reservation_id: 2, type: 'Burger', count: 3 },
  //   { reservation_id: 3, type: 'Salad', count: 1 }
  // ];
  const [foodOrders, setfoodOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:5000/getfoodordered"
        );
        setfoodOrders(response.data);
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
      <h2 className="table-heading">Food Ordered</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Type</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {foodOrders.map((order) => (
            <tr key={order.reservation_id}>
              <td>{order.reservation_id}</td>
              <td>{order.type}</td>
              <td>{order.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodOrderedTable;
