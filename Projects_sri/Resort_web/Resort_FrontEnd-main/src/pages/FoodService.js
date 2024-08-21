
import NavBar from '../components/login_page/NavBar';
import FoodImgBg from "../components/FoodService/foodimagebg";
import FoodBelowPage from "../components/FoodService/foodpagebelow";
import North from '../components/FoodService/asssets/cus_north.png';
import South from '../components/FoodService/asssets/cus_south.png';
import Chinese from '../components/FoodService/asssets/cus_chinese.png';
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
const FoodService = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState("");
    const [orderQuantities, setOrderQuantities] = useState({
        "North Indian Cuisine": 0,
        "South Indian Cuisine": 0,
        "Chinese Cuisine": 0
    });
    const [guest_id, setGuestId] = useState(null);
    useEffect(() => {
        if (location.state && location.state.guest_id) {
          setGuestId(location.state.guest_id); // Set guest_id if available
      }
    }, [location]);
    console.log(guest_id);
    const handleOrder = (title, price) => {
        const quantity = orderQuantities[title];
        if (quantity === 0) {
            setMessage("Please enter a valid quantity.");
            return;
        }

        const data = {
            item: title,
            price: price,
            quantity: quantity,
            guest_id:guest_id,
        };

        fetch('http://localhost:9000/Food', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to book the food item');
            }
            return response.text();
        })
        .then((response) => {
            console.log("Food booked successfully");
            const htmlContent = response; // Response is already in text format
            navigate("/payments", { state: { htmlContent: htmlContent } });
        })    
          .catch((error) => {
            console.error("Error:", error);
            setMessage("An error occurred while booking the room.");
          });
    };

    const handleChangeQuantity = (title, event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            setOrderQuantities(prevQuantities => ({
                ...prevQuantities,
                [title]: value
            }));
        }
    };

    return (
        <>
            <NavBar />
            <FoodImgBg />
            <h1 className="cusines">Order Cuisines</h1>
            <div className="fooditems">
                <div className="food-item">
                    <img src={North} alt='North India Cuisine' />
                    <div className="food-item-details">
                        <h2>North India Cuisine</h2>
                        <p>North Indian cuisine is characterized by its rich and aromatic dishes, featuring a diverse array of flavors and spices. Staples include butter chicken, biryani, and naan bread, often prepared using tandoori cooking techniques and creamy gravies. </p>
                        <p>Price: 100$</p>
                        <textarea value={orderQuantities["North India Cuisine"]} onChange={(e) => handleChangeQuantity('North India Cuisine', e)}></textarea>
                        <button onClick={() => handleOrder('North India Cuisine', '100$')}>Order</button>
                    </div>
                </div>
                <div className="food-item">
                    <img src={South} alt='South India Cuisine' />
                    <div className="food-item-details">
                        <h2>South India Cuisine</h2>
                        <p>South Indian cuisine is known for its vibrant flavors and extensive use of rice, lentils, and coconut. Signature dishes such as dosa, idli, and sambar highlight the region's unique culinary traditions, with a focus on fermented batters and savory accompaniments.</p>
                        <p>Price: 120$</p>
                        <textarea value={orderQuantities["South India Cuisine"]} onChange={(e) => handleChangeQuantity('South India Cuisine', e)}></textarea>
                        <button onClick={() => handleOrder('South India Cuisine', '120$')}>Order</button>
                    </div>
                </div>
                <div className="food-item">
                    <img src={Chinese} alt='Chinese Cuisine' />
                    <div className="food-item-details">
                        <h2>Chinese Cuisine</h2>
                        <p>Chinese cuisine offers a diverse and bold culinary experience, encompassing a wide range of flavors and cooking techniques. From sweet and sour dishes to savory stir-fries, Chinese cuisine showcases a variety of regional specialties, including dim sum, noodles, and dumplings, often prepared using techniques such as steaming, stir-frying, and deep-frying. </p>
                        <p>Price: 75$</p>
                        <textarea value={orderQuantities["Chinese Cuisine"]} onChange={(e) => handleChangeQuantity('Chinese Cuisine', e)}></textarea>
                        <button onClick={() => handleOrder('Chinese Cuisine', '75$')}>Order</button>
                    </div>
                </div>
            </div>
            <p>{message}</p>
            <FoodBelowPage />
        </>
    );

};

export default FoodService;