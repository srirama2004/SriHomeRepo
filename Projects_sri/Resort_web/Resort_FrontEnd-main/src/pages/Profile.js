import { Link } from "react-router-dom";
import '../App.css';
import NavBar from '../components/login_page/NavBar';
import WelcomeText from '../components/signup_page/WelcomeText';
import Background from '../components/login_page/Background';
import Signup_form from "../components/signup_page/signup";
import Foodbelowpage from "../components/FoodService/foodpagebelow";
import FoodImgBg from "../components/FoodService/foodimagebg";
import Profile_IMG from "../components/profilepage/profile_img";
import Review from "../components/profilepage/review";
import BookedItem from "../components/profilepage/BookedItem";
import Hotel from '../components/profilepage/assets/hotel_book.png'
import Cab from '../components/profilepage/assets/cab_book.png'
import Food from '../components/profilepage/assets/food_book.png'
const Profile = () => {
    return <>
    <NavBar></NavBar>
    <FoodImgBg></FoodImgBg>
    <Profile_IMG></Profile_IMG>
    <div className="book_page">
    <div className="bookings_page">
    <BookedItem title='Empty' desc="You Havent Ordered Anything"
    img ={Hotel} price ='100'></BookedItem>



    </div>
    <Review></Review>
    </div>
    <Foodbelowpage></Foodbelowpage>
    </>
}

export default Profile;