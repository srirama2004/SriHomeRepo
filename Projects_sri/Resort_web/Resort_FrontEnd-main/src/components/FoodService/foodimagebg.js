import React from 'react';
import resort from '../FoodService/asssets/bg.png';
import './foodservice.css';
function FoodImgBg(){
    return(<div className="FoodImg">
        <div className='FoodImgBg'>
        <img src= {resort} className=''/>
        </div>
       
        </div>
    );
    
}

export default FoodImgBg;