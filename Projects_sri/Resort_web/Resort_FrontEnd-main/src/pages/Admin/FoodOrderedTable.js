import React from 'react';
import './Guests.css'; // Import the CSS file for styling (you can adjust the file name accordingly)

const FoodOrderedTable = () => {
  // Sample food ordered data
  const foodOrders = [
    { reservation_id: 1, type: 'Pizza', count: 2 },
    { reservation_id: 2, type: 'Burger', count: 3 },
    { reservation_id: 3, type: 'Salad', count: 1 }
  ];

  return (
    <div className="table-container">
      <h2 className="table-heading">Food Ordered</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Type</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {foodOrders.map(order => (
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
