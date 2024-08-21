import React from 'react';
import './Guests.css'; // Import the CSS file for styling (you can adjust the file name accordingly)

const OtherAmenitiesTable = () => {
  // Sample other amenities data
  const amenities = [
    { reservation_id: 101, type: 'Spa', charge: 50 },
    { reservation_id: 102, type: 'Gym', charge: 20 },
    { reservation_id: 103, type: 'Pool Access', charge: 30 }
  ];

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
          {amenities.map(amenity => (
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
