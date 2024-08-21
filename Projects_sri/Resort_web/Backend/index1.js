
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.post("/signup", async (req, res) => {
  const sentEmail = req.body.Email;
  const sentPassword = req.body.Password;
  const sentName = req.body.Name;
  const sentAddress = req.body.Address;
  const sentPh_no = req.body.Ph_no;

  try {
    // Check if the user already exists
    const exists = await db.query(
      "SELECT COUNT(*) FROM guests WHERE email = $1",
      [sentEmail]
    );
    if (exists.rows[0].count > 0) {
      return res.status(400).send("User with this email already exists");
    }

    // const queryString =
    //   "INSERT INTO guest VALUES (" +
    //   "'" +
    //   sentEmail +
    //   "', " +
    //   "'" +
    //   sentPassword +
    //   "', " +
    //   "'" +
    //   sentName +
    //   "', " +
    //   "'" +
    //   sentAddress +
    //   "', " +
    //   "" +
    //   sentPh_no +
    //   "" +
    //   ")";

    // const result = await db.query(queryString);

    //If the user doesn't exist, proceed to insert the new user
    const result = await db.query(
      "INSERT INTO guests (Email, Password, Name, phone_number, Address) VALUES ($1, $2, $3, $4, $5)",
      [sentEmail, sentPassword, sentName, sentPh_no, sentAddress]
    );

    // const result = await db.query(
    //   "insert into guest values ('roshanssss@gmail.com' , '1234','rr',123,'ss')"
    // );

    // Send success response
    console.log("inserted");
    res.status(200).send("User created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/login", async (req, res) => {
  const sentEmail = req.body.Email;
  const sentPassword = req.body.Password;

  try {
    // Check if the user already exists
    const exists = await db.query(
      "SELECT COUNT(*) FROM guests WHERE email = $1",
      [sentEmail]
    );
    if (exists.rows[0].count <= 0) {
      return res.status(400).send("User with this email doesn't exists");
    }
    const exists2 = await db.query(
      "SELECT COUNT(*) FROM guests WHERE email = $1 and password = $2",
      [sentEmail, sentPassword]
    );
    if (exists2.rows[0].count <= 0) {
      return res.status(400).send("Incorrect Password");
    }

    // If the user doesn't exist, proceed to insert the new user
    // const result = await db.query(
    //   "INSERT INTO guest VALUES ($1, $2, $3, $4, $5)",
    //   [sentEmail, sentPassword, sentName, sentAddress, sentPh_no]
    // );

    // Send success response
    const guestIdQuery = await db.query(
      "SELECT guest_id FROM guestS WHERE email = $1 AND password = $2",
      [sentEmail, sentPassword]
    );

    if (guestIdQuery.rows.length > 0) {
      const guest_id = guestIdQuery.rows[0].guest_id;
      console.log("logged");
      // Send the guest_id as a response
      res.status(200).send({ guest_id });
    } else {
      // Handle case where guest_id is not found
      // For example, send an error response
      res.status(404).send({ message: "Guest not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/passreset", async (req, res) => {
  const sentEmail = req.body.Email;
  const sentPassword = req.body.Password;

  try {
    // Check if the user already exists
    const exists = await db.query(
      "SELECT COUNT(*) FROM guests WHERE email = $1",
      [sentEmail]
    );
    if (exists.rows[0].count <= 0) {
      return res.status(400).send("User with this email doesn't exists");
    }
    const update = await db.query(
      "UPDATE guestS SET password = $1 WHERE email = $2",
      [sentPassword, sentEmail]
    );

    // If the user doesn't exist, proceed to insert the new user
    // const result = await db.query(
    //   "INSERT INTO guest VALUES ($1, $2, $3, $4, $5)",
    //   [sentEmail, sentPassword, sentName, sentAddress, sentPh_no]
    // );

    // Send success response

    return res.status(200).send({ message: "Updation Sucessful" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/getguests", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM guests ORDER BY guest_id "); // Assuming your table is named 'guests'
    res.json(result.rows); // Send the fetched guest data as JSON response
    //   console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getcabs", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM cab_services ORDER BY cabservice_id desc"
    ); // Assuming your table is named 'guests'
    res.json(result.rows); // Send the fetched guest data as JSON response
    //  console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getresorts", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM resort ORDER BY resort_id"); // Assuming your table is named 'guests'
    res.json(result.rows); // Send the fetched guest data as JSON response
    //  console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getrooms", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM rooms ORDER BY room_number");
    res.json(result.rows);
    //   console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getfood", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM food order by price");
    res.json(result.rows);
    //   console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getfoodordered", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM food_ordered order by reservation_id"
    );
    res.json(result.rows);
    //  console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getservices", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM services order by service_id");
    res.json(result.rows);
    //  console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getreservations", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM reservations order by check_in_date desc, reservation_id"
    );
    res.json(result.rows);
    //  console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getinvoices", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM invoices order by invoice_id desc"
    );
    res.json(result.rows);
    // console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getpayments", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM payments order by payment_id");
    res.json(result.rows);
    //   console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getstaff", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM staff order by staff_id");
    res.json(result.rows);
    //  console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getdepartment", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM department order by dept_id");
    res.json(result.rows);
    //   console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getreviews", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM reviews  order by ratings");
    res.json(result.rows);
    //  console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getother", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM other_amenities order by reservation_id"
    );
    res.json(result.rows);
    //   console.log(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

