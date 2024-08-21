const express = require("express");
const cors = require("cors");
const router = express.Router(); 
const app = express();
// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());
router.use(express.json());
router.post("/", (req, res) => {
  res.send("Your request for room service has been received. The service will arrive shortly.");
  console.log("hello");
});
module.exports = router;
