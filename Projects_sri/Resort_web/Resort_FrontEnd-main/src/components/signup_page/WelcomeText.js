import React from 'react';
import resort from '../login_page/asssets/resort.png'

function WelcomeText(){
    return <div className="intro">
    <img src={resort} alt="" className="introresort" />
    <h1 className="introtitle">
        Manipal Resort
    </h1>
    <h2 className="introdesc">
    Welcomee To Our Resorts
    </h2>
</div>
}

export default WelcomeText;