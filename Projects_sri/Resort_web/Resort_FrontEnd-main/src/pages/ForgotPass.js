import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../components/login_page/NavBar";
import Introduction from "../components/login_page/Introduction";
import Background from "../components/login_page/Background";
import PassReset from "../components/forgot-pass/forgot_pass";

const PassResetForm = () => {
  return (
    <>
      <Background></Background>
      <NavBar></NavBar>
      <div className="flexbox">
        <Introduction></Introduction>
        <PassReset></PassReset>
      </div>
    </>
  );
};

export default PassResetForm;
