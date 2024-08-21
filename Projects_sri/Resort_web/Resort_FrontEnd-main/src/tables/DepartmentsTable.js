import React from "react";
import "./Guests.css"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";
const DepartmentsTable = () => {
  // Sample department data
  // const departments = [
  //   { dept_name: 'Administration', staff_id: 1, staff_count: 3 },
  //   { dept_name: 'Front Desk', staff_id: 2, staff_count: 2 },
  //   { dept_name: 'Housekeeping', staff_id: 3, staff_count: 5 }
  // ];

  const [departments, setdepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/getdepartment");
        setdepartments(response.data);
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
      <h2 className="table-heading">Departments</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Department ID</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.dept_name}>
              <td>{department.dept_name}</td>
              <td>{department.dept_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentsTable;
