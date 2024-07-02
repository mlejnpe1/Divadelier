import React from "react";
import "./DetailPages.css";
import Title from "../../assets/naPavlaci/title.webp";
import Picture1 from "../../assets/naPavlaci/1.webp";
import Picture2 from "../../assets/naPavlaci/2.webp";
import Picture3 from "../../assets/naPavlaci/3.webp";
import Picture4 from "../../assets/naPavlaci/4.webp";
import Picture5 from "../../assets/naPavlaci/5.webp";
import Picture6 from "../../assets/naPavlaci/6.webp";
import Picture7 from "../../assets/naPavlaci/7.webp";
import Picture8 from "../../assets/naPavlaci/8.webp";
import Picture9 from "../../assets/naPavlaci/9.webp";
import Picture10 from "../../assets/naPavlaci/10.webp";
import Picture11 from "../../assets/naPavlaci/11.webp";
import Picture12 from "../../assets/naPavlaci/12.webp";
import Picture13 from "../../assets/naPavlaci/13.webp";
import Picture14 from "../../assets/naPavlaci/14.webp";
import Picture15 from "../../assets/naPavlaci/15.webp";
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
  ];

  return (
    <>
      <Navbar />
      <div id="top" className='detail-page'>
        <div className='header'>
          <img src={Title} alt='Header' className='header-image' />
          <h1 className='header-title'>Na Pavlači</h1>
        </div>
        <div className='info-section'>
          <p>
            Nahlédněte pod pokličku dvou žen před padesátkou a zjistěte, co jim
            nejvíce leží na srdci - vrásky, špíčky, práce nebo muži? To vše a
            mnohem více můžete shlédnout v komedii Na pavlači provoněné kávou...
          </p>
          <div className='short-info'>
            <div className='info-item'>
              <strong>Hrají:</strong> Monika Münsterová - Berta (nyní hraje
              Markéta Voříšková), Adéla Pellarová - Evža
            </div>
            <div className='info-item'>
              <strong>Scénografie a kostými:</strong> Monika Münsterová
            </div>
            <div className='info-item'>
              <strong>Hudba:</strong> Claud Debussy - The Little Negro, Ludwig
              van Beethoven - Sonata Opus 27, No. 2, 3. věta Presto agiato
            </div>
            <div className='info-item'>
              <strong>Klavíristka:</strong> Barbora Machovcová
            </div>
            <div className='info-item'>
              <strong>Technická spolupráce:</strong> Jiří Holomek
            </div>
            <div className='info-item'>
              <strong>Prostorová náročnost:</strong> Toto představení hrajeme v
              Divadeliéru i zájezdově.
            </div>
            <div className='info-item'>
              <strong>Délka trvání:</strong> 60 minut
            </div>
          </div>
        </div>
        <ImageGalery images={images} h2={"foto: Petra Šplíchalová"} />
      </div>
      <ScrollButton />
    </>
  );
};

export default DetailPage;
