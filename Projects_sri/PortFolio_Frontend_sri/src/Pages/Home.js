import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Home.css';
import fig1 from '../Components/pic/sri.png';
import fig2 from '../Components/pic/download.jpg';
import fig3 from '../Components/pic/img1.jpeg'
import fig4 from '../Components/pic/img2.jpeg'
import fig5 from '../Components/pic/img3.webp'
import Header from '../Components/Header';
const Home = () => {
  const projectsRef = useRef(null);

  const handleScroll = () => {
    console.log('handleScroll called');
    if (projectsRef.current) {
      console.log('Scrolling to projects section...');
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log('projectsRef.current is null');
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; // Number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    console.log('projectsRef on mount:', projectsRef.current); // Check if ref is attached correctly on mount
  }, []);
  return (
    <div>
      <Header />
      <div className='fig2'>
        <div className='rect-container'>
          <div className='rect1'>
            <div className='fig1'>
              <img src={fig1} alt="Srirama" />
            </div>
            <div className='text1'>
            <div className='text2'><h1><b><i><h4 style={{fontFamily:'sans-serif', marginTop:'10px'}}> Hello,</h4>Iam SriRama V.</i></b></h1></div>
              <p className="description">A Computer Science B-tech student with keen interest in coding and other technologies. Eager for positions where I can apply my skills and learn more. I always strive for excellence, whether working alone or with a team.</p>
              <button className="scroll-button" onClick={handleScroll}>
                <p style={{ fontSize: '1em', fontFamily: 'cursive' }}>View My Projects</p>
              </button>
            </div>
          </div>
          <div className='Rect'>
          <div className='sliding-window' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <div className='rect2'> 
          <div className="rect-title"><p style={{fontSize:'1.5em',fontFamily:'cursive',marginTop:'1px',color:'orange' }}><b>Project 1</b></p>
            <div className='fig4'>
              <img src={fig3} alt="Srirama" />
         <div className='t1'> <p>A website built with react.js for the frontend
,express.js for the backend and postgresql as database that allows
users to book rooms, hire taxis, and order utilities.!!!Go to projects for source code and more!!!.</p></div>
         </div>
          </div>
          </div>
          <div className='rect3'>
          <div className="rect-title"><p style={{fontSize:'1.5em',fontFamily:'cursive',marginTop:'1px',color:'orange' }}><b>Project 2</b></p>
            <div className='fig4'>
              <img src={fig4} alt="Srirama" />
         <div className='t1'> <p>A Machine learning project that predicts
         ICU admission of paediatric Respiratory illness patients.     !!!Go to projects for source code and more!!!.</p></div>
         </div>
          </div>
          </div>
          <div className='rect4'>
          <div className="rect-title"><p style={{fontSize:'1.5em',fontFamily:'cursive',marginTop:'1px',color:'orange' }}><b>Project 3</b></p>
            <div className='fig3'>
              <img src={fig5} alt="Srirama" />
         <div className='t1'> <p>A Computer Science B-tech student with keen interest in coding and other technologies. Eager for positions where I can apply my skills and learn more. I always strive for excellence, whether working alone or with a team.</p></div>
         </div>
          </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
