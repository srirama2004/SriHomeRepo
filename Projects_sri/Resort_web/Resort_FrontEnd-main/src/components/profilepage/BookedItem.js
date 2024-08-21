import React from 'react';
import resort from '../FoodService/asssets/bg.png';
function BookedItem(props){
return <div className="prof_booked">
<div className="fooditem">
    <div className="F_itemicon">
        <img src={props.img} alt="" />
    </div>
    <div className='F_text'>
    <div className="F_Title">
        <h4>{props.title}</h4>
    </div>
    <div className="F-Desc">
    <h2>{props.desc}</h2></div>
    <div className="Book_cancel">
        <div className="cancelbtn">
            <h5 className="canceltxt">Cancel</h5>
        </div>
    </div>
    </div>
    {/* <div className="P_price"> <h2>{props.price}</h2></div> */}
   

    </div>
</div>
}

export default BookedItem