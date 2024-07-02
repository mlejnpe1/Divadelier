import React, { useState } from "react";
import "./ImageGalery.css";
import Modal from "react-modal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGalery = (preps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const images = preps.images;

  const openModal = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='gallery-section'>
        <h2>{preps.h2}</h2>
        <div className='gallery-images'>
          {preps.images.map((image, index) => (
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
            showThumbnails={true}
            showPlayButton={false}
            showIndex={true}
          />
          <button onClick={closeModal} className='close-button'>
            X
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ImageGalery;
