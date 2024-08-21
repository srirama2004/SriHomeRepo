import React from 'react'
import html2pdf from 'html2pdf.js';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Paysucc from './Paysucc';
import image from '../components/login_page/asssets/bg.png';
function Payments() {
   const[openModal, setOpenModal] = useState(false);
    const location = useLocation();
    const htmlContent = location.state?.htmlContent;
    const encodeHTML = (html) => {
        return html.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
            return '' + i.charCodeAt(0) + ';';
        });
    };
    const downloadInvoice = () => {
        const element = document.createElement('div');
        element.innerHTML = htmlContent;
        
        // Configure html2pdf options
        const options = {
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Generate PDF from HTML content
        html2pdf().from(element).set(options).save();
    };
    return <div className="p_c">
        <img src={image} alt="" />
        <div className="p_rectangle1">
            <h1 className="p_c1">
                INVOICES
            </h1>

            <div className="p_textarea" style={{ paddingLeft: '1px' }}  dangerouslySetInnerHTML={{ __html: htmlContent }} /><div/>

            <div className="p_rectangle"></div>
            <div className='p_pass'>
                <p><b>CARD NO:</b> <input type="password" id="p_password" name="password" required></input></p>
            </div>
            <div className='p_pass1'>
        <b>CVV:</b> <input type="password" id="p_password1" name="password1" pattern="[0-9]{3}" title="Please enter a valid CVV (3 digits)"></input>
                <b>EXPIRY:</b> <input type="text" name="text" id="p_text" required></input>


                <button className="p_download_btn" onClick={downloadInvoice}style={{ backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '1px 15px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer',marginLeft:'75px' }}>Download Invoice</button>
            </div> <input className = "p_submit" type="submit" value="PAY NOW" onClick={() => {setOpenModal(true);}}></input></div>
            {openModal && <Paysucc closeModal={setOpenModal}/>}


    </div>
}
export default Payments;