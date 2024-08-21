import React from 'react'
import paysuccess from '../components/paysuccess/paysuccess.jpg';
import '../components/paysuccess/paysucc.css';
import { useState , useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import { Link } from "react-router-dom";

function Paysucc({ closeModal }) {
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])
  return (
      <div className='modal'>
      <center>
        <div className='overlay'>
            <div className='inspin'>
            {loading?<div className='outloader'>
                <br></br>
                <br></br>
                <center>
            <div className='loader'><BounceLoader color={'#36d7b7'} loading={loading} size={100} aria-label="Loading Spinner" data-testid="loader" /></div>
            </center>
            </div>
                :
                <div>
            <br></br>
            <br></br>
            <center>
                
                <div className='img'>
                    <img src={paysuccess} alt="" />
                </div>
                <br></br>
                <div className='text'>
                    <h1>Payment Successful</h1>
                    <br></br>
                    
                    <div>
                        <Link to="/">
                        <button className='close' onClick={() => closeModal()}>Home</button>
                        </Link>
                    </div>
                    
                </div>
                
                
            </center>
            </div>
            }
            </div>
        </div>
        </center>
    </div>
  )
}

export default Paysucc
