

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login";
import NoPage from "./pages/Nopage";
import Signup from "./pages/Signup";
import Payements from "./pages/Payment";
import Cabservice from "./pages/CabService";
import RoomBook from "./pages/RoomBok";
import FoodService from "./pages/FoodService";
import Profiles from "./pages/Profile";
import Home_page from "./pages/Home_page";
import PassResetForm from "./pages/ForgotPass";
import AdminPage from "./pages/AdminPage";
import LandingPage from './pages/LandingPage';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<LandingPage />} />
        <Route  path="*" element={<NoPage />} />
        <Route path="/Home_page" element={<Home_page/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payments" element={<Payements />} />
        <Route path="/cab" element={<Cabservice />} />


        <Route path="/RoomBook" element={<RoomBook />} />
        <Route path="/Food" element={<FoodService />} />
        <Route path="/Profile" element={<Profiles />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/resetpassword" element={<PassResetForm />} />

      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
