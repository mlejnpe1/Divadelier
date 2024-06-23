import React, { useState } from "react";
import Modal from "react-modal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./RuzenkaDetailPage.css";
import Title from "../../assets/ruzenka/title.webp";
import Picture1 from "../../assets/ruzenka/1.webp";
import Picture2 from "../../assets/ruzenka/2.webp";
import Picture3 from "../../assets/ruzenka/3.webp";
import Picture4 from "../../assets/ruzenka/4.webp";
import Picture5 from "../../assets/ruzenka/5.webp";
import Picture6 from "../../assets/ruzenka/6.webp";
import Picture7 from "../../assets/ruzenka/7.webp";
import Picture8 from "../../assets/ruzenka/8.webp";
import Picture9 from "../../assets/ruzenka/9.webp";
import Picture10 from "../../assets/ruzenka/10.webp";
import Picture11 from "../../assets/ruzenka/11.webp";
import Picture12 from "../../assets/ruzenka/12.webp";
import Navbar from "../../components/NavBar/Navbar";
import ScrollButton from "../../components/ScrollTopButton/ScrollButton";

Modal.setAppElement("#root"); // Set root element for accessibility

const DetailPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const images = [
    { original:  Picture1 , thumbnail:  Picture1  },
    { original:  Picture2 , thumbnail:  Picture2  },
    { original:  Picture3 , thumbnail:  Picture3  },
    { original:  Picture4 , thumbnail:  Picture4  },
    { original:  Picture5 , thumbnail:  Picture5  },
    { original:  Picture6 , thumbnail:  Picture6  },
    { original:  Picture7 , thumbnail:  Picture7  },
    { original:  Picture8 , thumbnail:  Picture8  },
    { original:  Picture9 , thumbnail:  Picture9  },
    { original:  Picture10 , thumbnail:  Picture10  },
    { original:  Picture11 , thumbnail:  Picture11  },
    { original:  Picture12 , thumbnail:  Picture12  },
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
          <h1 className='header-title'>O Šípkové Růžence</h1>
        </div>
        <div className='info-section'>
          <p>
            Vytoužená a dlouho
            očekávaná dcerunka neunikne kletbě třinácté sudičky. Však síla lásky
            statečného prince kletbu překoná a vytrhne Růženku z hlubokého
            spánku...
          </p>
          <div className='short-info'>
            <div className='info-item'>
              <strong>Scénář a režie:</strong> Adéla Pellarová
            </div>
            <div className='info-item'>
              <strong>Scénografie a kostými:</strong> Monika Münsterová
            </div>
            <div className='info-item'>
              <strong>Hudba:</strong>  Šimon Martínek, člen hudební skupiny Perutě a Fields of Grain
            </div>
            <div className='info-item'>
              <strong>Piano:</strong> Šimon Martínek
            </div>
            <div className='info-item'>
              <strong>Výtvarná realizace:</strong>  Barbara Wacková, Libuše Münsterová a Mopeadd
            </div>
            <div className='info-item'>
              <strong>Technická realizace:</strong> Josef Pršala, Dan Popelář
            </div>
            <div className='info-item'>
              <strong>Hrají:</strong> Adéla Pellarová, Amálie Popelářová, Adam Horký
            </div>
            <div className='info-item'>
              <strong>Zvuk a ruchy:</strong> Adéla Pellarová
            </div>
            <div className='info-item'>
              <strong>Produkce:</strong> Adéla Pellarová
            </div>
            <div className='info-item'>
              <strong>Prostorová náročnost:</strong>  Představení lze hrát ve třídě i na jevišti.
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
