import React from 'react';
import './Guests.css';

const Guests = () => {
  // Sample guest data
  const guests = [
    { id: 1, name: 'John Doe', email: 'john@example.com' , password: 'John123', phnumber: 8888888888, address: 'Mumbai'},
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' , password: 'Jane123', phnumber: 8888787655, address: 'London'},
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' , password: 'Alice123', phnumber: 8888456743, address: 'Los Angeles'}
  ];

  return (
    <div className='out'>
    <div className='table-container'>
      <h2 className='table-heading'>Guests</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {guests.map(guest => (
            <tr key={guest.id}>
              <td>{guest.id}</td>
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.password}</td>
              <td>{guest.phnumber}</td>
              <td>{guest.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Guests;
