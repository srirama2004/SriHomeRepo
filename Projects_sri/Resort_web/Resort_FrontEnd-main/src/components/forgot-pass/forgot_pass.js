import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

function PassReset() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const LoginUser = (event) => {
    event.preventDefault();
    setText("Sent");

    Axios.post("http://localhost:5000/passreset", {
      Email: email,
      Password: password,
    })
      .then((response) => {
        // Assuming the response contains guest_id

        setEmail(""); // Clear email input
        setPassword(""); // Clear password input
        setText("Password Reset successfully");

        // Redirect to home page with guest_id
        window.location.href = `http://localhost:3000/login`;
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setText(error.response.data); // Display the error message in the Error div
        } else {
          setText("An error occurred. Please try again."); // Default error message
        }
      });
  };

  return (
    <div className="loginform">
      <div className="loginbg">
        <div className="loginheader"></div>
        <form onSubmit={(event) => LoginUser(event)}>
          <div className="emailgrp">
            <h2 className="emailtxt">Email</h2>
            <div className="email">
              {" "}
              <input
                type="email"
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="passgrp">
            <h2 className="passtxt">New Password</h2>
            <div className="pass">
              {" "}
              <input
                type="password"
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="errors">
            <h5>{text}</h5>
          </div>
          <div className="loginbtn">
            <h2 className="login">Reset</h2>
            <input type="submit" />
          </div>
          <Link to="/login">
            <h2 className="login_signupbtn">Return to login page!</h2>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default PassReset;
