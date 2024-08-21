import React from 'react';
import './Guests.css'; // Import the CSS file for styling (you can adjust the file name accordingly)

const DepartmentsTable = () => {
  // Sample department data
  const departments = [
    { dept_name: 'Administration', staff_id: 1, staff_count: 3 },
    { dept_name: 'Front Desk', staff_id: 2, staff_count: 2 },
    { dept_name: 'Housekeeping', staff_id: 3, staff_count: 5 }
  ];

  return (
    <div className="table-container">
      <h2 className="table-heading">Departments</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Staff ID</th>
            <th>Staff Count</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr key={department.dept_name}>
              <td>{department.dept_name}</td>
              <td>{department.staff_id}</td>
              <td>{department.staff_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentsTable;
