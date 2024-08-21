import { Link } from "react-router-dom";
import '../App.css';
import NavBar from '../components/login_page/NavBar';
import WelcomeText from '../components/signup_page/WelcomeText';
import Background from '../components/login_page/Background';
import Signup_form from "../components/signup_page/signup";

const Signup = () => {
    return (
        <>
        <Background></Background>
        <NavBar></NavBar>
        <div className="flexbox">
        <WelcomeText></WelcomeText>
        <Signup_form></Signup_form>
        </div>   
        </>
    )
};

export default Signup;