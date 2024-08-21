import React from 'react';
import './Guests'; // Import the CSS file for styling (you can adjust the file name accordingly)

const ReviewsTable = () => {
  // Sample review data
  const reviews = [
    { guest_id: 101, review: 'Great experience, highly recommended!', rating: 5 },
    { guest_id: 102, review: 'Average stay, could be better.', rating: 3.5 },
    { guest_id: 103, review: 'Excellent service and facilities.', rating: 4.5 }
  ];

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
          {reviews.map(review => (
            <tr key={review.guest_id}>
              <td>{review.guest_id}</td>
              <td>{review.review}</td>
              <td>{review.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewsTable;
