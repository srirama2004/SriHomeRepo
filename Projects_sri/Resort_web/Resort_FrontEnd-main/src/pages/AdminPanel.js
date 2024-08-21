import { Link } from "react-router-dom";
import '../App.css';
import NavBar from '../components/login_page/NavBar';
import Introduction from '../components/login_page/Introduction';
import Background from '../components/login_page/Background';
import Cabservice from '../components/cabservice/cabservice';
import Cab_img from "../components/cabservice/cab_img";

const adminpanel = () => {
    return (
        <>
        <Background></Background>
        <NavBar></NavBar>
        <div className="flexbox">
        <Cab_img></Cab_img>
        <Cabservice></Cabservice>
        </div>   
        </>
    )
};

export default adminpanel;