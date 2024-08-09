import React, { useState } from 'react';
import './Carousel.css';
import Right from './Right';
import About from './About';
import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import JoinParty from './JoinParty';
import NewsFeedPage from './NewsFeedPage';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);

  const handleBottomIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const handleRightIndicatorClick = (index) => {
    setActiveComponentIndex(index);
    if (index === 0) {
      document.getElementById('carousel-section').scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById(`component-${index}`).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div id="carousel-section" className="carousel-container">
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
            <img src={image1} alt="Carousel Image 1" className="full-screen-image " />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
            <img src={image2} alt="Carousel Image 2" className="full-screen-image" />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
            <div className="container h-100 d-flex justify-content-center align-items-center" style={{backgroundColor:'lightblue'}}>
              <div className="row w-100">
                <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0">
                  <div className="grid-item text-center">
                    <div className="grid-image-container">
                      <img src={image1} alt="Grid Image 1" className="img-fluid rounded-circle" />
                    </div>
                    <div className="grid-text">
                      <h1>MAKE A DONATION TOWARDS NEW INDIAN'S CREATIONS</h1>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0">
                  <div className="grid-item text-center">
                    <div className="grid-image-container">
                      <img src={image2} alt="Grid Image 2" className="img-fluid rounded-circle" />
                    </div>
                    <div className="grid-text">
                      <h2>Support TDPP With Micro-Donations</h2>
                      <p>Support the party of Indians' aspirations</p>
                      <p>Support PM Modi in building a New India</p>
                      <p>Support with donations between ₹<b>5</b> to ₹<b>1,000</b></p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                  <div className="grid-item text-center">
                    <div className="grid-image-container">
                      <img src={image1} alt="Grid Image 3" className="img-fluid rounded-circle" />
                    </div>
                    <div className="grid-text">
                      <h1>DONATE NOW</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-indicators-bottom">
          {[0, 1, 2].map(index => (
            <div
              key={index}
              className={`indicator ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleBottomIndicatorClick(index)}
            />
          ))}
        </div>
        <div className="carousel-indicators-right">
          {[0, 1, 2].map(index => (
            <div
              key={index}
              className={`indicator ${activeComponentIndex === index ? 'active' : ''}`}
              onClick={() => handleRightIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="component-container">
        <div id="component-0" className="component-section">
          <div className="carousel-section"></div>
        </div>
        <div id="component-1" className="component-section">
        <JoinParty />

        </div>
        <div id="component-2" className="component-section ">
        <NewsFeedPage />
        </div>
       
      </div>
    </div>
  );
}

export default Carousel;
