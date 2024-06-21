import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Navbar from '../../components/NavBar/Navbar';

const Homepage = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 60000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
    <Navbar/>
    <div className="slideshow-container">
      <div className="navigation-arrows">
        <button className="arrow left-arrow" onClick={goToPreviousSlide}>
          &#10094;
        </button>
        <button className="arrow right-arrow" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className="slide-title">{image.title}<br/>{image.subtitle}</div>
        </div>
      ))}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
    </>
  );
};

export default Homepage;