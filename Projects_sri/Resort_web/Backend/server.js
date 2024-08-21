const express = require("express");
const cors = require("cors");
const db = require("./db");
const router = express.Router();
const app = express();
var price=100;
var price1=200;
var price2=300;
var total_price=0;
var resort_id;
var guest_id;
var payment_id=101;
var Invoices;
// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());
router.use(express.json());
router.post("/", async (req, res) => {
  const { roomNo, checkInDate, checkOutDate,roomType,others,resort_id,guest_id} = req.body;
  const startDate = new Date(checkInDate);
  const endDate = new Date(checkOutDate);
  console.log(endDate);
  console.log(startDate);
  console.log(guest_id);
  const differenceInDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  if(roomType==="Single")
  total_price=differenceInDays*price;
  else if(roomType==="Double")
  total_price=differenceInDays*price1;
  else if(roomType==="Deluxe")
  total_price=differenceInDays*price2;
if(others==="Jym"||others==="Spa")
total_price=total_price+50;
payment_id=payment_id+1;
// Generate today's date
const today = new Date();
const date = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
try {
  const insertReservationQuery = await db.query("INSERT INTO reservations (resort_id, guest_id, room_number, check_in_date, check_out_date, total_price) VALUES ($1, $2, $3, $4, $5, $6)",
      [resort_id, guest_id, roomNo, checkInDate, checkOutDate, total_price]
    );
    reservationId = await db.query("SELECT reservation_id FROM reservations ORDER BY reservation_id DESC LIMIT 1");
const latestReservationId = reservationId.rows[0].reservation_id;
console.log(latestReservationId);

   // Insert invoice into database with reservation_id
   const insertInvoiceQuery = await db.query("INSERT INTO invoices (reservation_id, total_amount, invoice_date) VALUES ($1, $2, $3)",
     [reservationId .rows[0].reservation_id, total_price, date]
   );
 Invoices = await db.query("SELECT * FROM invoices");
  Invoices .rows[0].invoice_id
  console.log("Insertion successful");
   // HTML content generation
   const htmlContent = `
   <html>
     <head>
       <title>Room Booking Confirmation</title>
     </head>
     <body>
       <h1 style="color: black; font-size: 16px;">Room Booking Confirmation</h1>
       <p>Invoices Id: ${Invoices.rows[0].invoice_id}</p>
       <p>Resort_Id: ${resort_id}</p>
       <p>Room Number: ${roomNo}</p>
       <p>Check-in Date: ${checkInDate}</p>
       <p>Check-out Date: ${checkOutDate}</p>
       <p>Room_Type: ${roomType}</p>
       <p>Others: ${others}</p>
       <p>Total Price: $${total_price}</p>
       <p>guest_Id: ${guest_id}</p>
     </body>
   </html>
 `;

 // Set the Content-Type header to text/html
 res.setHeader("Content-Type", "text/html");
 // Send the HTML content as the response
 res.send(htmlContent);
} catch (error) {
  console.error("Error inserting into database:", error);
}
});
module.exports = router;