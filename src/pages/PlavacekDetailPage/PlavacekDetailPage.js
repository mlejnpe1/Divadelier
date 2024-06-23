import React, { useState } from "react";
import Modal from "react-modal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./PlavacekDetailPage.css";
import Title from "../../assets/plavacek/title.webp";
import Picture1 from "../../assets/plavacek/1.webp";
import Picture2 from "../../assets/plavacek/2.webp";
import Picture3 from "../../assets/plavacek/3.webp";
import Picture4 from "../../assets/plavacek/4.webp";
import Picture5 from "../../assets/plavacek/5.webp";
import Picture6 from "../../assets/plavacek/6.webp";
import Picture7 from "../../assets/plavacek/7.webp";
import Picture8 from "../../assets/plavacek/8.webp";
import Navbar from "../../components/NavBar/Navbar";
import ScrollButton from "../../components/ScrollTopButton/ScrollButton";

Modal.setAppElement("#root"); // Set root element for accessibility

const DetailPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const images = [
    { original: Picture1, thumbnail: Picture1 },
    { original: Picture2, thumbnail: Picture2 },
    { original: Picture3, thumbnail: Picture3 },
    { original: Picture4, thumbnail: Picture4 },
    { original: Picture5, thumbnail: Picture5 },
    { original: Picture6, thumbnail: Picture6 },
    { original: Picture7, thumbnail: Picture7 },
    { original: Picture8, thumbnail: Picture8 },
  ];

  const openModal = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className='detail-page'>
        <div className='header'>
          <img src={Title} alt='Header' className='header-image' />
          <h1 className='header-title'>Plaváček</h1>
        </div>
        <div className='info-section'>
          <p>
            Když se osudu začnete vzpírat, tak můžete být král, ale nezmůžete
            nic. Neboť zlatá nitka osudu děda Vševěda dovede ke štěstí. A to
            především Plaváčka, kterému sudičky daly do kolébky sňatek s
            princeznou. A král to slyšel a vůbec se mu to nelíbilo. A udělal
            všechno, aby osud zvrátil. Jenže osud je silnější člověka. A máte-li
            něco v osudu, třeba princeznu, i když jste polosirotek uhlíře a
            vyrůstáte u rybáře, tak s tím nehne ani král. Vtipná loutková
            pohádka, která Vás provede jistotou, že štěstí Vás nemine. Chce to
            jenom věřit.
          </p>
          <div className='short-info'>
            <div className='info-item'>
              <strong>Scénář a režie:</strong> Adéla Pellarová
            </div>
            <div className='info-item'>
              <strong>Scénografie a loutky:</strong> Monika Münsterová
            </div>
            <div className='info-item'>
              <strong>Hudba:</strong> Šimon Martínek, člen hudební skupiny Perutě
            </div>
            <div className='info-item'>
              <strong>Výtvarná realizace:</strong> Barbara Wacková
            </div>
            <div className='info-item'>
              <strong>Technická realizace:</strong> Ladislav Plšek, Michal Veselý
            </div>
            <div className='info-item'>
              <strong>Hrají:</strong> Adéla Pellarová, Monika Münsterová
            </div>
            <div className='info-item'>
              <strong>Produkce:</strong> Monika Münsterová
            </div>
            <div className='info-item'>
              <strong>Prostorová náročnost:</strong> Představení lze hrát ve
              třídě i na jevišti.
            </div>
            <div className='info-item'>
              <strong>Délka trvání:</strong> 45 minut
            </div>
          </div>
        </div>
        <div className='gallery-section'>
          <h2>foto: Petra Šplíchalová</h2>
          <div className='gallery-images'>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.thumbnail}
                alt={`Gallery Image ${index + 1}`}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className='modal'
          overlayClassName='overlay'
        >
          <div className='modal-content'>
            <ImageGallery
              items={images}
              startIndex={startIndex}
              showThumbnails={true}
              showFullscreenButton={true}
              showPlayButton={false}
              showNav={true}
            />
            <button onClick={closeModal} className='close-button'>
              X
            </button>
          </div>
        </Modal>
      </div>
      <ScrollButton />
    </>
  );
};

export default DetailPage;
