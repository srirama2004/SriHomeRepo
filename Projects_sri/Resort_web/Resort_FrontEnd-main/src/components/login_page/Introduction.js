import React from 'react'
import resort from '../login_page/asssets/resort.png';
import './login.css'

function Introduction(){
    return <div className="intro">
        <img src={resort} alt="" className="introresort" />
        <h1 className="introtitle">
            Manipal Resort
        </h1>
        <h2 className="introdesc">
        Experience luxury like never before  
        </h2>
    </div>
}

export default Introduction;