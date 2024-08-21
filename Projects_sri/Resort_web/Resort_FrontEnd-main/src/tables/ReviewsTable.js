import React from "react";
import "./Guests"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";
const ReviewsTable = () => {
  // Sample review data

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/getreviews");
        setReviews(response.data);
        // Assuming your server returns an array of guest objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // doesnt work
    fetchData();
  }, []);

  // const reviews = [
  //   { guest_id: 101, review: 'Great experience, highly recommended!', rating: 5 },
  //   { guest_id: 102, review: 'Average stay, could be better.', rating: 3.5 },
  //   { guest_id: 103, review: 'Excellent service and facilities.', rating: 4.5 }
  // ];

  return (
    <div className="table-container">
      <h2 className="table-heading">Reviews</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Guest ID</th>
            <th>Review</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.guest_id}>
              <td>{review.guest_id}</td>
              <td>{review.reviews}</td>
              <td>{review.ratings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewsTable;
