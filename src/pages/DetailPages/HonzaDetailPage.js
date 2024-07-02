import React from "react";
import "./DetailPages.css";
import Title from "../../assets/honza/title.webp";
import Picture1 from "../../assets/honza/1.webp";
import Picture2 from "../../assets/honza/2.webp";
import Picture3 from "../../assets/honza/3.webp";
import Picture4 from "../../assets/honza/4.webp";
import Picture5 from "../../assets/honza/5.webp";
import Picture6 from "../../assets/honza/6.webp";
import Picture7 from "../../assets/honza/7.webp";
import Picture8 from "../../assets/honza/8.webp";
import Picture9 from "../../assets/honza/9.webp";
import Picture10 from "../../assets/honza/10.webp";
import Picture11 from "../../assets/honza/11.webp";
import Picture12 from "../../assets/honza/12.webp";
import Picture13 from "../../assets/honza/13.webp";
import Picture14 from "../../assets/honza/14.webp";
import Picture15 from "../../assets/honza/15.webp";
import Picture16 from "../../assets/honza/16.webp";
import Picture17 from "../../assets/honza/17.webp";
import Picture18 from "../../assets/honza/18.webp";
import Picture19 from "../../assets/honza/19.webp";
import Picture20 from "../../assets/honza/20.webp";
import Picture21 from "../../assets/honza/21.webp";
import Picture22 from "../../assets/honza/22.webp";
import Picture23 from "../../assets/honza/23.webp";
import Picture24 from "../../assets/honza/24.webp";
import Picture25 from "../../assets/honza/25.webp";
import Picture26 from "../../assets/honza/26.webp";
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
    { original: Picture21, thumbnail: Picture21 },
    { original: Picture22, thumbnail: Picture22 },
    { original: Picture23, thumbnail: Picture23 },
    { original: Picture24, thumbnail: Picture24 },
    { original: Picture25, thumbnail: Picture25 },
    { original: Picture26, thumbnail: Picture26 },
  ];

  return (
    <>
      <Navbar />
      <div id="top" className='detail-page'>
        <div className='header'>
          <img src={Title} alt='Header' className='header-image' />
          <h1 className='header-title'>Jak Honza ke štěstí přišel</h1>
        </div>
        <div className='info-section'>
          <p>
            Srdečně Vás zveme ke shlédnutí veselé pohádky, která je vhodná pro
            předškolní děti a děti prvního stupně. Honzovi doma teče do buchet
            děravou střechou. A tak se vydá do světa, aby našel službu a na
            střechu si vydělal. Se zlatou hroudou se šťastně vrací ze světa
            domů. Ale donese ji domů? Opraví střechu? Přijďte se ponořit do
            světa pohádek, kde nic není nemožné a konec je vždycky dobrý.
          </p>
          <div className='short-info'>
            <div className='info-item'>
              <strong>Hrají:</strong> Adéla Pellarová (alternace Adam Horký),
              Amálie Popelářová (alternace Adéla Pellarová)
            </div>
            <div className='info-item'>
              <strong>Scénografie a kostými:</strong> Monika Münsterová
            </div>
            <div className='info-item'>
              <strong>Výtvarná realizace:</strong> Monika Münsterová, Barbara
              Wacková, Adéla Pellarová, Amálie Popelářová
            </div>
            <div className='info-item'>
              <strong>Hudba:</strong> Šimon Martínek, člen hudební skupiny
              Perutě
            </div>
            <div className='info-item'>
              <strong>Technická spolupráce:</strong> Ladislav Plšek, Jiří
              Holomek
            </div>
            <div className='info-item'>
              <strong>Prostorová náročnost:</strong> Představení lze hrát ve
              třídě i na jevišti. Představení lze pro Vaši třídu zahrát i v
              Divadeliéru ve Vámi vybraném termínu.
            </div>
            <div className='info-item'>
              <strong>Délka trvání:</strong> 45 minut
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
