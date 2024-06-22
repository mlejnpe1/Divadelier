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
import DetailPage from "./pages/DetailPage/DetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  const images = [
    {
      url: image1,
      title: "O ŠÍPKOVÉ RŮŽENCE",
      subtitle: "ČINOHERNÍ HUMORNÁ POHÁDKA PRO DĚTI",
    },
    { url: image2, title: '"Dávám ti do vínku auto a vilu."' },
    { url: image3, title: '"Tady máte ruku mou, budu Vaší Růženou."' },
    {
      url: image4,
      title: "JAK HONZA KE ŠTĚSTÍ PŘIŠEL",
      subtitle: "ČINOHERNÍ VESELÁ POHÁDKA PRO DĚTI",
    },
    {
      url: image5,
      title: '"Když mám hlad, tak zastavím, sednu si, krávu podojím."',
    },
    {
      url: image6,
      title: "SPOLU",
      subtitle: "ČINOHERNÍ NĚŽNÁ KOMEDIE Z MANŽELSKÉHO ŽIVOTA",
    },
    {
      url: image7,
      title: '"Jako bublinka vodováhy?"',
      subtitle: '"Základ rovnováhy."',
    },
  ];
  //<Navbar/>
  //<HomePage images={images} />
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<HomePage images={images} />} />
          <Route exact path='contacts' element={<ContactPage />} />
          <Route exact path='divadloDi' element={<DIPage />} />
          <Route exact path='repertoar' element={<RepertoirePage />} />
          <Route exact path='detailPage' element={<DetailPage />} />
          <Route path='*' component={<NotFoundPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
