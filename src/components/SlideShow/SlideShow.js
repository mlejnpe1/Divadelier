import React, { useState, useEffect } from "react";
import "./SlideShow.css";
import image1 from "../../assets/slideshow/1.jpg";
import image2 from "../../assets/slideshow/2.jpg";
import image3 from "../../assets/slideshow/3.jpg";
import image4 from "../../assets/slideshow/4.jpg";
import image5 from "../../assets/slideshow/5.jpg";
import image6 from "../../assets/slideshow/6.jpg";
import image7 from "../../assets/slideshow/7.jpg";

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: image1,
      title: "O ŠÍPKOVÉ RŮŽENCE",
      subtitle: "Činoherní humorná pohádka pro děti",
    },
    { url: image2, title: '"Dávám ti do vínku auto a vilu."' },
    { url: image3, title: '"Tady máte ruku mou, budu Vaší Růženou."' },
    {
      url: image4,
      title: "JAK HONZA KE ŠTĚSTÍ PŘIŠEL",
      subtitle: "Činoherní veselá pohádka pro děti",
    },
    {
      url: image5,
      title: '"Když mám hlad, tak zastavím, sednu si, krávu podojím."',
    },
    {
      url: image6,
      title: "SPOLU",
      subtitle: "Činoherní něžná komedie z manželského života",
    },
    {
      url: image7,
      title: '"Jako bublinka vodováhy?"',
      title2: '"Základ rovnováhy."'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className='slideshow-container'>
        <div className='navigation-arrows'>
          <button className='arrow left-arrow' onClick={goToPreviousSlide}>
            &#10094;
          </button>
          <button className='arrow right-arrow' onClick={goToNextSlide}>
            &#10095;
          </button>
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className='slide-title'>
              {image.title}
              <br />
              {image.title2}
              <div className='slide-subtitle'>{image.subtitle}</div>
            </div>
          </div>
        ))}
        <div className='dots'>
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default SlideShow;
