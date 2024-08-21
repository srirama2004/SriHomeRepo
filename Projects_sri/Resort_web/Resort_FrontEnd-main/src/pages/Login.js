import { Link } from "react-router-dom";
import '../App.css';
import NavBar from '../components/login_page/NavBar';
import Introduction from '../components/login_page/Introduction';
import Background from '../components/login_page/Background';
import LoginForm from '../components/login_page/login_form';

const Login = () => {
    return (
        <>
        <Background></Background>
        <NavBar></NavBar>
        <div className="flexbox">
        <Introduction></Introduction>
        <LoginForm></LoginForm>
        </div>   
        </>
    )
};

export default Login;