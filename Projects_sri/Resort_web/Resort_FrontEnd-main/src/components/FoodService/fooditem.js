import React from 'react';
import resort from '../FoodService/asssets/bg.png';
import './foodservice.css';
function FoodItems(props){
return <div className="fooditem">
    <div className="F_itemicon">
        <img src={props.img} alt="" />
    </div>
    <div className='F_text'>
    <div className="F_Title">
        <h4>{props.title}</h4>
    </div>
    <div className="F-Desc">
    <h2>{props.desc}</h2></div>
    </div>
    <div className="price"> <h2>{props.price}</h2></div>

</div>
}

export default FoodItems