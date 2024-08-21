const express = require("express");
const cors = require("cors");
const router = express.Router(); 
const app = express();

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());
router.use(express.json());

// Importing server files
const server = require('./server.js');
const servers = require('./servers.js');
const serverc = require('./serverc.js');
const serverf = require('./serverf.js');

// Define routes for each server
app.use('/RoomBook', server); // Changed from '/Room_book' to '/RoomBook'
app.use('/Home_page', servers);
app.use('/cab', serverc);
app.use('/Food', serverf);

app.listen(9000, () => {
  console.log("Router server started on port 9000");
});

module.exports = app;
