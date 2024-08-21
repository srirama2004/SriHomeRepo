import React from "react";
import "./Guests.css"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";

const FoodTable = () => {
  const [foods, setfoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/getfood");
        setfoods(response.data);
        // Assuming your server returns an array of guest objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // doesnt work
    fetchData();
  }, []);

  // Sample food data
  // const foods = [
  //   { type: 'North Indian Cuisine', price: 100 },
  //   { type: 'South Indian Cuisine', price: 120 },
  //   { type: 'Chinese Cuisine', price: 75 },
  //   { type: 'British Cuisisne', price: 555}
  // ];

  return (
    <div className="table-container">
      <h2 className="table-heading">Food Menu</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food.type}>
              <td>{food.type}</td>
              <td>{food.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodTable;
