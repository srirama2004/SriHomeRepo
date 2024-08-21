import React from "react";
import "./Guests.css"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";
const InvoicesTable = () => {
  // Sample invoice data

  const [invoices, setinvoices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/getinvoices");
        setinvoices(response.data);
        // Assuming your server returns an array of guest objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // doesnt work
    fetchData();
  }, []);

  // const invoices = [
  //   { invoice_id: 1, reservation_id: 1, total_amount: 150, invoice_date: '2024-03-21' },
  //   { invoice_id: 2, reservation_id: 2, total_amount: 200, invoice_date: '2024-04-15' },
  //   { invoice_id: 3, reservation_id: 3, total_amount: 400, invoice_date: '2024-05-10' }
  // ];

  return (
    <div className="table-container">
      <h2 className="table-heading">Invoices</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Reservation ID</th>
            <th>Total Amount</th>
            <th>Invoice Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.invoice_id}>
              <td>{invoice.invoice_id}</td>
              <td>{invoice.reservation_id}</td>
              <td>${invoice.total_amount}</td>
              <td>{invoice.invoice_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesTable;
