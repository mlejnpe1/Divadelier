import React from "react";
import "./DetailPages.css";
import Title from "../../assets/spolu/title.jpg";
import Picture1 from "../../assets/spolu/1.webp";
import Picture2 from "../../assets/spolu/2.webp";
import Picture3 from "../../assets/spolu/3.webp";
import Picture4 from "../../assets/spolu/4.webp";
import Picture5 from "../../assets/spolu/5.webp";
import Picture6 from "../../assets/spolu/6.webp";
import Picture7 from "../../assets/spolu/7.webp";
import Picture8 from "../../assets/spolu/8.webp";
import Picture9 from "../../assets/spolu/9.webp";
import Picture10 from "../../assets/spolu/10.webp";
import Picture11 from "../../assets/spolu/11.webp";
import Picture12 from "../../assets/spolu/12.webp";
import Picture13 from "../../assets/spolu/13.webp";
import Picture14 from "../../assets/spolu/14.webp";
import Picture15 from "../../assets/spolu/15.webp";
import Picture16 from "../../assets/spolu/16.webp";
import Picture17 from "../../assets/spolu/17.webp";
import Picture18 from "../../assets/spolu/18.webp";
import Picture19 from "../../assets/spolu/19.webp";
import Picture20 from "../../assets/spolu/20.webp";
import Navbar from "../../components/NavBar/Navbar";
import ScrollButton from "../../components/ScrollTopButton/ScrollButton";
import ImageGalery from "../../components/ImageGalery/ImageGalery";

const DetailPage = () => {
  const images = [
    { original: Picture1, thumbnail: Picture1 },
    { original: Picture2, thumbnail: Picture2 },
    { original: Picture3, thumbnail: Picture3 },
    { original: Picture4, thumbnail: Picture4 },
    { original: Picture5, thumbnail: Picture5 },
    { original: Picture6, thumbnail: Picture6 },
    { original: Picture7, thumbnail: Picture7 },
    { original: Picture8, thumbnail: Picture8 },
    { original: Picture9, thumbnail: Picture9 },
    { original: Picture10, thumbnail: Picture10 },
    { original: Picture11, thumbnail: Picture11 },
    { original: Picture12, thumbnail: Picture12 },
    { original: Picture13, thumbnail: Picture13 },
    { original: Picture14, thumbnail: Picture14 },
    { original: Picture15, thumbnail: Picture15 },
    { original: Picture16, thumbnail: Picture16 },
    { original: Picture17, thumbnail: Picture17 },
    { original: Picture18, thumbnail: Picture18 },
    { original: Picture19, thumbnail: Picture19 },
    { original: Picture20, thumbnail: Picture20 },
  ];

  return (
    <>
      <Navbar />
      <div id="top" className='detail-page'>
        <div className='header'>
          <img src={Title} alt='Header' className='header-image' />
          <h1 className='header-title'>Spolu</h1>
        </div>
        <div className='info-section'>
          <p>
            Něžná komedie o nehynoucí lásce v manželství propletená spoustou
            slovních hříček. Chcete-li věřit na velkou lásku na celý život, a
            přitom se i zasmát, pak je tu pro vás hra Spolu.
          </p>
          <div className='short-info'>
            <div className='info-item'>
              <strong>Hrají:</strong> Adéla Pellarová, Tomáš Svarog Valek
            </div>
            <div className='info-item'>
              <strong>Scénář:</strong> Adéla Pellarová
            </div>
            <div className='info-item'>
              <strong>Režie:</strong> Adéla Pellarová
            </div>
            <div className='info-item'>
              <strong>Scénografie a kostými:</strong> Adéla Pellarová a Tomáš
              Svarog Valek
            </div>
            <div className='info-item'>
              <strong>Výtvarná realizace:</strong> Monika Münsterová, Barbara
              Wacková, Adéla Pellarová, Amálie Popelářová
            </div>
            <div className='info-item'>
              <strong>Hudba a hra na cello:</strong> Eduard Příhoda junior
            </div>
            <div className='info-item'>
              <strong>Zvuková spolupráce:</strong> Eduard Příhoda senior
            </div>
            <div className='info-item'>
              <strong>Výtvarná spolupráce:</strong> Lenka Kaira Bauerová
            </div>
            <div className='info-item'>
              <strong>Prostorová náročnost:</strong>Toto představení hrajeme v
              Divadeliéru i zájezdově.
            </div>
            <div className='info-item'>
              <strong>Délka trvání:</strong> 60 minut
            </div>
          </div>
        </div>
        <ImageGalery images={images} h2={"foto: Petra Šplíchalová"}/>
      </div>
      <ScrollButton />
    </>
  );
};

export default DetailPage;
