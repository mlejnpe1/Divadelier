import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import DIPage from "./pages/DivadloDI/DIPage";
import image1 from "./assets/slideshow/1.jpg";
import image2 from "./assets/slideshow/2.jpg";
import image3 from "./assets/slideshow/3.jpg";
import image4 from "./assets/slideshow/4.jpg";
import image5 from "./assets/slideshow/5.jpg";
import image6 from "./assets/slideshow/6.jpg";
import image7 from "./assets/slideshow/7.jpg";
import RepertoirePage from "./pages/RepertoirePage/RepertoirePage";
import RuzenkaDetailPage from "./pages/DetailPages/RuzenkaDetailPage";
import HonzaDetailPage from "./pages/DetailPages/HonzaDetailPage";
import PlavacekDetailPage from "./pages/DetailPages/PlavacekDetailPage";
import NaPavlaciDetailPage from "./pages/DetailPages/NaPavlaciDetailPage";
import SpoluDetailPage from "./pages/DetailPages/SpoluDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EventsPage from "./pages/Events/EventsPage";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='contacts' element={<ContactPage />} />
          <Route exact path='divadloDi' element={<DIPage />} />
          <Route exact path='repertoar' element={<RepertoirePage />} />
          <Route exact path='ruzenkaDetailPage' element={<RuzenkaDetailPage />} />
          <Route exact path='honzaDetailPage' element={<HonzaDetailPage />} />
          <Route exact path='plavacekDetailPage' element={<PlavacekDetailPage/>} />
          <Route exact path='naPavlaciDetailPage' element={<NaPavlaciDetailPage/>} />
          <Route exact path='SpoluDetailPage' element={<SpoluDetailPage/>} />
          <Route exact path='EventsPage' element={<EventsPage/>} />
          <Route path='*' component={<NotFoundPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
