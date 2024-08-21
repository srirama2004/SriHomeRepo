const express = require("express");
const router = express.Router(); 
const db = require("./db");

// Middleware to parse JSON bodies
router.use(express.json());

router.post("/", async (req, res) => {
  const { from, to, resort_id,guest_id} = req.body;
  const price = 50; // Assuming the price is fixed at $50
  const invoiceId=1;
  console.log(resort_id);
  console.log(guest_id);
  // Generate today's date
const today = new Date();
const date = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  try {
     const insertQuery = await db.query("INSERT INTO cab_services (guest_id, resort_id, destination_from,  destination_to, price) VALUES ($1, $2, $3, $4, $5)",
       [guest_id, resort_id, from, to, price]
   );
   const reservationQuery = await db.query(
    "SELECT reservation_id FROM reservations WHERE guest_id = $1 ORDER BY reservation_id DESC LIMIT 1",
    [guest_id]
);
   const reservation_id = reservationQuery.rows[0]?.reservation_id; // Use optional chaining to handle undefined rows
   console.log(reservation_id);
   const insertQuery1 = await db.query("INSERT INTO invoices (reservation_id,total_amount,invoice_date) VALUES ($1,$2,$3)",
   [ reservationQuery.rows[0].reservation_id,price,date]
   );
   // Assuming you want to retrieve the invoice ID from the database
    Invoices = await db.query("SELECT * FROM invoices");
    Invoices .rows[0].invoice_id
    console.log("Insertion successful for cab");

    // For demonstration, let's generate an HTML confirmation page
    const htmlContent = `
      <html>
        <head>
          <title>Cab Booking Confirmation</title>
        </head>
        <body>
          <h1 style="color: black; font-size: 16px;">Cab Booking Confirmation</h1>
          <p>Resort_id: ${resort_id}</p>
          <p>From: ${from}</p>
          <p>To: ${to}</p>
          <p>Price: $${price}</p>
          <p>Your cab has been booked successfully!</p>
          <p>Invoice ID: ${ Invoices .rows[0].invoice_id}</p>
          <p>Guest_id: ${guest_id}</p>
        </body>
      </html>
    `;

    // Set the Content-Type header to text/html
    res.setHeader("Content-Type", "text/html");
    // Send the HTML content as the response
    res.send(htmlContent);
  } catch (error) {
    console.error("Error inserting into database:", error);
    // Sending an error response to the client
    res.status(500).json({ error: "An error occurred while booking the cab." });
  }
});

module.exports = router;
