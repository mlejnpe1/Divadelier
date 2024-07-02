import React from 'react';
import Navbar from '../../components/NavBar/Navbar';
import SlideShow from '../../components/SlideShow/SlideShow';

const Homepage = ({ images }) => {
  return (
    <>
    <Navbar/>
    <SlideShow/>
    </>
  );
};

export default Homepage;