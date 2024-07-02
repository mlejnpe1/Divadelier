import React from "react";
import "./RepertoirePage.css";
import Navbar from "../../components/NavBar/Navbar";
import Ruzenka from "../../assets/reprertoire/ruzenka.webp";
import Honza from "../../assets/reprertoire/honza.webp";
import Plavacek from "../../assets/reprertoire/plavacek.webp";
import NaPavlaci from "../../assets/reprertoire/napavlaci.webp";
import Spolu from "../../assets/reprertoire/spolu.jpg";
import ScrollButton from "../../components/ScrollTopButton/ScrollButton";
import { Link } from "react-router-dom";
import Honza1 from "../../assets/archive/honza/160.jpg";
import Honza2 from "../../assets/archive/honza/161.jpg";
import Honza3 from "../../assets/archive/honza/162.jpg";
import Honza4 from "../../assets/archive/honza/163.jpg";
import Honza5 from "../../assets/archive/honza/164.jpg";
import Honza6 from "../../assets/archive/honza/165.jpg";
import Honza7 from "../../assets/archive/honza/166.jpg";
import Honza8 from "../../assets/archive/honza/167.jpg";
import Honza9 from "../../assets/archive/honza/168.jpg";
import Honza10 from "../../assets/archive/honza/169.jpg";
import Honza11 from "../../assets/archive/honza/170.jpg";
import Honza12 from "../../assets/archive/honza/171.jpg";
import Honza13 from "../../assets/archive/honza/172.jpg";
import Honza14 from "../../assets/archive/honza/175.jpg";
import Honza15 from "../../assets/archive/honza/176.jpg";
import Honza16 from "../../assets/archive/honza/177.jpg";
import Honza17 from "../../assets/archive/honza/178.jpg";
import Honza18 from "../../assets/archive/honza/179.jpg";
import Honza19 from "../../assets/archive/honza/182.jpg";
import Honza20 from "../../assets/archive/honza/183.jpg";
import Honza21 from "../../assets/archive/honza/184.jpg";
import Honza22 from "../../assets/archive/honza/185.jpg";
import Honza23 from "../../assets/archive/honza/186.jpg";
import Honza24 from "../../assets/archive/honza/187.jpg";
import Honza25 from "../../assets/archive/honza/188.jpg";
import Honza26 from "../../assets/archive/honza/189.jpg";
import Ruzenka1 from "../../assets/archive/ruzenka/1.jpg"
import Ruzenka2 from "../../assets/archive/ruzenka/2.jpg"
import Ruzenka3 from "../../assets/archive/ruzenka/3.jpg"
import Ruzenka4 from "../../assets/archive/ruzenka/4.jpg"
import Pavlac1 from "../../assets/archive/pavlac/1.PNG"
import Pavlac2 from "../../assets/archive/pavlac/2.PNG"
import Pavlac3 from "../../assets/archive/pavlac/3.PNG"
import Pavlac4 from "../../assets/archive/pavlac/4.PNG"
import Pavlac5 from "../../assets/archive/pavlac/5.PNG"
import Pavlac6 from "../../assets/archive/pavlac/6.PNG"
import Pavlac7 from "../../assets/archive/pavlac/7.PNG"
import Pavlac9 from "../../assets/archive/pavlac/9.PNG"
import Pavlac11 from "../../assets/archive/pavlac/11.PNG"
import Pavlac12 from "../../assets/archive/pavlac/12.PNG"
import Pavlac13 from "../../assets/archive/pavlac/13.PNG"
import Pavlac14 from "../../assets/archive/pavlac/14.PNG"
import Plavacek1 from "../../assets/plavacek/1.webp";
import Plavacek2 from "../../assets/plavacek/2.webp";
import Plavacek3 from "../../assets/plavacek/3.webp";
import Plavacek4 from "../../assets/plavacek/4.webp";
import Plavacek5 from "../../assets/plavacek/5.webp";
import Plavacek6 from "../../assets/plavacek/6.webp";
import Plavacek7 from "../../assets/plavacek/7.webp";
import Plavacek8 from "../../assets/plavacek/8.webp";
import ImageGalery from "../../components/ImageGalery/ImageGalery";
import SlideShow from "../../components/SlideShow/SlideShow";

function RepertoirePage() {
  const honzaImages = [
    { original:  Honza1 , thumbnail:  Honza1  },
    { original:  Honza2 , thumbnail:  Honza2  },
    { original:  Honza3 , thumbnail:  Honza3  },
    { original:  Honza4 , thumbnail:  Honza4  },
    { original:  Honza5 , thumbnail:  Honza5  },
    { original:  Honza6 , thumbnail:  Honza6  },
    { original:  Honza7 , thumbnail:  Honza7  },
    { original:  Honza8 , thumbnail:  Honza8  },
    { original:  Honza9 , thumbnail:  Honza9  },
    { original:  Honza10 , thumbnail:  Honza10  },
    { original:  Honza11 , thumbnail:  Honza11  },
    { original:  Honza12 , thumbnail:  Honza12  },
    { original:  Honza13 , thumbnail:  Honza13  },
    { original:  Honza14 , thumbnail:  Honza14  },
    { original:  Honza15 , thumbnail:  Honza15  },
    { original:  Honza16 , thumbnail:  Honza16  },
    { original:  Honza17 , thumbnail:  Honza17  },
    { original:  Honza18 , thumbnail:  Honza18  },
    { original:  Honza19 , thumbnail:  Honza19  },
    { original:  Honza20 , thumbnail:  Honza20  },
    { original:  Honza21 , thumbnail:  Honza21  },
    { original:  Honza22 , thumbnail:  Honza22  },
    { original:  Honza23 , thumbnail:  Honza23  },
    { original:  Honza24 , thumbnail:  Honza24  },
    { original:  Honza25 , thumbnail:  Honza25  },
    { original:  Honza26 , thumbnail:  Honza26  },
  ];

  const ruzenkaImages = [
    { original:  Ruzenka1 , thumbnail:  Ruzenka1  },
    { original:  Ruzenka2 , thumbnail:  Ruzenka2  },
    { original:  Ruzenka3 , thumbnail:  Ruzenka3  },
    { original:  Ruzenka4 , thumbnail:  Ruzenka4  },
  ];


  const pavlacImages = [
    { original:  Pavlac1 , thumbnail:  Pavlac1  },
    { original:  Pavlac2 , thumbnail:  Pavlac2  },
    { original:  Pavlac3 , thumbnail:  Pavlac3  },
    { original:  Pavlac4 , thumbnail:  Pavlac4  },
    { original:  Pavlac5 , thumbnail:  Pavlac5  },
    { original:  Pavlac6 , thumbnail:  Pavlac6  },
    { original:  Pavlac7 , thumbnail:  Pavlac7  },
    { original:  Pavlac9 , thumbnail:  Pavlac9  },
    { original:  Pavlac11 , thumbnail:  Pavlac11  },
    { original:  Pavlac12 , thumbnail:  Pavlac12  },
    { original:  Pavlac13 , thumbnail:  Pavlac13  },
    { original:  Pavlac14 , thumbnail:  Pavlac14  },
  ];

  const plavacelImages = [
    { original: Plavacek1, thumbnail: Plavacek1 },
    { original: Plavacek2, thumbnail: Plavacek2 },
    { original: Plavacek3, thumbnail: Plavacek3 },
    { original: Plavacek4, thumbnail: Plavacek4 },
    { original: Plavacek5, thumbnail: Plavacek5 },
    { original: Plavacek6, thumbnail: Plavacek6 },
    { original: Plavacek7, thumbnail: Plavacek7 },
    { original: Plavacek8, thumbnail: Plavacek8 },
  ];
  return (
    <>
      <div className='repertoire-page'>
      <Navbar />
      <SlideShow/>
        {/* First Section: Column with 3 subsections */}
        <div className='section column'>
          <h1 id="forKids">Představení pro děti</h1>
          <div className='subsection'>
            <img src={Ruzenka} alt='Description1' />
            <div>
              <Link to={"/ruzenkaDetailPage/#top"} onClick={() => window.location.replace("/ruzenkaDetailPage/#top")}><h2>O šípkové Růžence</h2></Link>
              <p>
                Srdečně Vás v lednu 2024 zveme na obnovenou premiéru pohádky O
                Šípkové Růžence nově s hercem Adamem Horkým.
              </p>
              <Link to={"/ruzenkaDetailPage/#top"} onClick={() => window.location.replace("/ruzenkaDetailPage/#top")}>Více informací o představení ▶</Link>
            </div>
          </div>
          <div className='subsection'>
            <img src={Honza} alt='Description2' />
            <div>
              <Link to={"/honzaDetailPage/#top"} onClick={() => window.location.replace("/honzaDetailPage/#top")}><h2>Jak Hozna ke štěstí přišel</h2></Link>
              <p>
                Srdečně Vás zveme ke shlédnutí veselé pohádky, která je vhodná
                pro předškolní děti a děti prvního stupně.
              </p>
              <Link to={"/honzaDetailPage/#top"} onClick={() => window.location.replace("/honzaDetailPage/#top")}>Více informací o představení ▶</Link>
            </div>
          </div>
          <div className='subsection'>
            <img src={Plavacek} alt='Description3' />
            <div>
              <Link to={"/plavacekDetailPage/#top"} onClick={() => window.location.replace("/plavacekDetailPage/#top")}><h2>Plaváček</h2></Link>
              <p>
                Když se osudu začnete vzpírat, tak můžete být král, ale
                nezmůžete nic. Neboť zlatá nitka osudu děda Vševěda dovede ke
                štěstí. A to především Plaváčka, kterému sudičky daly do kolébky
                sňatek s princeznou. A král to slyšel a vůbec se mu to nelíbilo.
                A udělal všechno, aby osud zvrátil. Jenže osud je silnější
                člověka. A máte-li něco v osudu, třeba...
              </p>
              <Link to={"/plavacekDetailPage/#top"} onClick={() => window.location.replace("/plavacekDetailPage/#top")}>Více informací o představení ▶</Link>
            </div>
          </div>
        </div>

        {/* Second Section: 2 subsections */}
        <div className='section'>
          <h1 id="forAdult">Představení pro dospělé</h1>
          <div className='subsection'>
            <img src={Spolu} alt='Description4' />
            <div>
              <Link to={"/spoluDetailPage/#top"} onClick={() => window.location.replace("/spoluDetailPage/#top")}><h2>SPOLU</h2></Link>
              <p>
                Něžná komedie o nehynoucí lásce v manželství propletená spoustou
                slovních hříček. Chcete-li věřit na velkou lásku na celý život,
                a přitom se i zasmát, pak je tu pro vás hra Spolu.
              </p>
              <Link to={"/spoluDetailPage/#top"} onClick={() => window.location.replace("/spoluDetailPage/#top")}>Více informací o představení ▶</Link>
            </div>
          </div>
          <div className='subsection'>
            <img src={NaPavlaci} alt='Description5' />
            <div>
              <Link to={"/naPavlaciDetailPage/#top"} onClick={() => window.location.replace("/naPavlaciDetailPage/#top")}><h2>Na Pavlači</h2></Link>
              <p>
                Nahlédněte pod pokličku dvou žen před padesátkou a zjistěte, co
                jim nejvíce leží na srdci - vrásky, špíčky, práce nebo muži? To
                vše a mnohem více můžete shlédnout v komedii Na pavlači
                provoněné kávou...
              </p>
              <Link to={"/naPavlaciDetailPage/#top"} onClick={() => window.location.replace("/naPavlaciDetailPage/#top")}>Více informací o představení ▶</Link>
            </div>
          </div>
        </div>

        {/* Third Section: 3 subsections */}
        <div className='section'>
          <h1 id="archive">Archiv</h1>
          <h2>Představení s Monikou Münsterovou</h2>
          <div className="gallery-subsection">
            <ImageGalery images={plavacelImages} h2={"PLAVÁČEK"}/>
          </div>
          <div className="gallery-subsection">
            <ImageGalery images={ruzenkaImages} h2={"O ŠÍPKOVÉ RŮŽENCE"}/>
          </div>
          <div className="gallery-subsection">
            <ImageGalery images={honzaImages} h2={"JAK HONZA KE ŠTĚSTÍ PŘIŠEL"}/>
          </div>
          <div className="gallery-subsection">
            <ImageGalery images={pavlacImages} h2={"NA PAVLAČI"}/>
          </div>
          
        </div>
      </div>
      <ScrollButton/>
    </>
  );
}

export default RepertoirePage;
