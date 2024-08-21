import React from "react";
import "./Guests.css"; // Import the CSS file for styling (you can adjust the file name accordingly)
import { useState, useEffect } from "react";
import Axios from "axios";

const PaymentsTable = () => {
  // Sample payment data
  // const payments = [
  //   { payment_id: 301, invoice_id: 1, amount_paid: 150, payment_date: '2024-03-21' },
  //   { payment_id: 302, invoice_id: 2, amount_paid: 200, payment_date: '2024-04-15' },
  //   { payment_id: 303, invoice_id: 3, amount_paid: 400, payment_date: '2024-05-10' }
  // ];

  const [payments, setpayments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/getpayments");
        setpayments(response.data);
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
      <h2 className="table-heading">Payments</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Invoice ID</th>
            <th>Amount Paid</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.payment_id}>
              <td>{payment.payment_id}</td>
              <td>{payment.invoice_id}</td>
              <td>${payment.amount_paid}</td>
              <td>{payment.payment_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;
