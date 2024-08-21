const express = require("express");
const cors = require("cors");
const router = express.Router(); 
const db = require("./db");
const app = express();
var Invoice=0;
// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

// Route to handle POST requests to the /Food endpoint
router.post("/",async (req, res) => {
  const { item, price,quantity,guest_id } = req.body;
  const total_price = parseInt(price) * parseInt(quantity) ; // Just an example calculation
  const quant=parseInt(quantity);
  console.log(item);
  console.log(quantity);
console.log(guest_id);
// Generate today's date
const today = new Date();
const date = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
try {
  const reservationQuery = await db.query(
    "SELECT reservation_id FROM reservations WHERE guest_id = $1 ORDER BY reservation_id DESC LIMIT 1",
    [guest_id]
);
   const reservation_id = reservationQuery.rows[0]?.reservation_id; // Use optional chaining to handle undefined rows
   console.log(reservation_id);
     const insertQuery = await db.query("INSERT INTO food_ordered (reservation_id,type,count) VALUES ($1,$2,$3)",
     [reservation_id,item,quant]
     );
     const insertQuery1 = await db.query("INSERT INTO invoices (reservation_id,total_amount,invoice_date) VALUES ($1,$2,$3)",
   [ reservationQuery.rows[0].reservation_id,total_price,date]
   );
   Invoice = await db.query("SELECT * FROM invoices");
    Invoice.rows[0].invoice_id
    console.log("Insertion successful");
  const htmlContent = `
    <html>
      <head>
        <title>Food Order Confirmation</title>
      </head>
      <body>
        <h1 style="color: black; font-size: 16px;">Food Order Confirmation</h1>
        <p>Invoice_id: ${Invoice.rows[0].invoice_id}</p>
        <p>Item: ${item}</p>
        <p>Price: ${price}</p>
        <p>Quantity: ${quantity}</p>
        <p>Total Price: $${total_price}</p>
        <p>guest_id: ${guest_id}</p>
        <p>reservation: ${reservation_id}</p>
      </body>
    </html>
  `;
  // Set the Content-Type header to text/html
  res.setHeader("Content-Type", "text/html");
  // Send the HTML content as the response
  res.send(htmlContent);
}catch (error) {
    console.error("Error inserting into database:", error);
  }
  });
  module.exports = router;