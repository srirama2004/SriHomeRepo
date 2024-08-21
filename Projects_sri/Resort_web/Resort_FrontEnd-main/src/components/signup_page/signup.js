
import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [ph_no, setPh_no] = useState("");

  const [text, setText] = useState("");

  const createUser = (event) => {
    event.preventDefault();
    // Check if sentPh_no is not an empty string and is a valid numeric value
    if (ph_no !== "" && isNaN(ph_no)) {
      // Display error message for invalid phone number format
      setText("Please enter a valid numeric ph no.");
      return; // Stop further execution
    }

    Axios.post("http://localhost:5000/signup", {
      // create variable to send to the server through the route
      Email: email,
      Name: name,
      Password: password,
      Address: address,
      Ph_no: ph_no, // Pass sentPh_no directly
    })
      .then(() => {
        console.log("User Created ");
        setEmail("");
        setPassword("");
        setName("");
        setaddress("");
        setPh_no("");
        setText("User created successfully");
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
      <div className="signupbg">
        <div className="loginheader"></div>
        <form onSubmit={(event) => createUser(event)}>
          <div className="signUp_list">
            <div className="signup_email">
              <h2 className="signup_emailtxt">Email</h2>
              <div className="signup_email_inp">
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
            <div className="signup_email">
              <h2 className="signup_emailtxt">Password</h2>
              <div className="signup_email_inp">
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
            <div className="signup_email">
              <h2 className="signup_emailtxt">Name</h2>
              <div className="signup_email_inp">
                {" "}
                <input
                  type="text"
                  required
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="signup_email">
              <h2 className="signup_emailtxt">Ph.No</h2>
              <div className="signup_email_inp">
                {" "}
                <input
                  type="tel"
                  required
                  onChange={(event) => {
                    setPh_no(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="signup_email">
              <h2 className="signup_emailtxt">Address</h2>
              <div className="signup_email_inp">
                {" "}
                <input
                  type="text"
                  required
                  onChange={(event) => {
                    setaddress(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="errors">
            <h5>{text}</h5>
          </div>
          <div className="signupbtn">
            <h2 className="signup">SignUp</h2>
            <input type="submit" />
          </div>
          <Link to="/login">
            <h2 className="signup_loginbtn">
              Already have an account? Login here
            </h2>
          </Link>
        </form>
      </div>
    </div>
  );
}


export default Signup;
