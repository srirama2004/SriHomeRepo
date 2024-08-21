import React from "react";
import "./Guests"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";

const StaffTable = () => {
  // Sample staff data
  // const staff = [
  //   { staff_id: 1, resort_id: 101, name: 'John Doe', position: 'Manager', department: 'Administration', email: 'john@example.com' },
  //   { staff_id: 2, resort_id: 102, name: 'Jane Smith', position: 'Receptionist', department: 'Front Desk', email: 'jane@example.com' },
  //   { staff_id: 3, resort_id: 103, name: 'Alice Johnson', position: 'Housekeeper', department: 'Housekeeping', email: 'alice@example.com' }
  // ];

  const [staff, setstaff] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/getstaff");
        setstaff(response.data);
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
      <h2 className="table-heading">Staff Members</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Resort ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((person) => (
            <tr key={person.staff_id}>
              <td>{person.staff_id}</td>
              <td>{person.resort_id}</td>
              <td>{person.name}</td>
              <td>{person.position}</td>
              <td>{person.department}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
