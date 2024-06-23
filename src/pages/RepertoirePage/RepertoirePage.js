import React from "react";
import "./RepertoirePage.css";
import Navbar from "../../components/NavBar/Navbar";
import Ruzenka from "../../assets/reprertoire/ruzenka.webp";
import Honza from "../../assets/reprertoire/honza.webp";
import Plavacek from "../../assets/reprertoire/plavacek.webp";
import NaPavlaci from "../../assets/reprertoire/napavlaci.webp";
import Spolu from "../../assets/reprertoire/spolu.jpg";
import { useState } from "react";
import ScrollButton from "../../components/ScrollTopButton/ScrollButton";
import { Link } from "react-router-dom";

function RepertoirePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const archiveImages = [
    {
      original: Ruzenka,
      thumbnail: Ruzenka,
    },
    {
      original: Honza,
      thumbnail: Honza,
    },
    {
      original: Plavacek,
      thumbnail: Plavacek,
    },
    {
      original: Spolu,
      thumbnail: Spolu,
    },
    {
      original: NaPavlaci,
      thumbnail: NaPavlaci,
    },
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
      <div className='repertoire-page'>
        {/* First Section: Column with 3 subsections */}
        <div className='section column'>
          <h1 id="forKids">Představení pro děti</h1>
          <div className='subsection'>
            <img src={Ruzenka} alt='Description1' />
            <div>
              <h2>O šípkové Růžence</h2>
              <p>
                Srdečně Vás v lednu 2024 zveme na obnovenou premiéru pohádky O
                Šípkové Růžence nově s hercem Adamem Horkým.
              </p>
              <Link to={"/ruzenkaDetailPage"}>Více informací o představení ▶</Link>
            </div>
          </div>
          <div className='subsection'>
            <img src={Honza} alt='Description2' />
            <div>
              <h2>Jak Hozna ke štěstí přišel</h2>
              <p>
                Srdečně Vás zveme ke shlédnutí veselé pohádky, která je vhodná
                pro předškolní děti a děti prvního stupně.
              </p>
              <Link to={"/honzaDetailPage"}>Více informací o představení ▶</Link>
            </div>
          </div>
          <div className='subsection'>
            <img src={Plavacek} alt='Description3' />
            <div>
              <h2>Plaváček</h2>
              <p>
                Když se osudu začnete vzpírat, tak můžete být král, ale
                nezmůžete nic. Neboť zlatá nitka osudu děda Vševěda dovede ke
                štěstí. A to především Plaváčka, kterému sudičky daly do kolébky
                sňatek s princeznou. A král to slyšel a vůbec se mu to nelíbilo.
                A udělal všechno, aby osud zvrátil. Jenže osud je silnější
                člověka. A máte-li něco v osudu, třeba...
              </p>
              <Link to={"/plavacekDetailPage"}>Více informací o představení ▶</Link>
            </div>
          </div>
        </div>

        {/* Second Section: 2 subsections */}
        <div className='section'>
          <h1 id="forAdult">Představení pro dospělé</h1>
          <div className='subsection'>
            <img src={Spolu} alt='Description4' />
            <div>
              <h2>SPOLU</h2>
              <p>
                Něžná komedie o nehynoucí lásce v manželství propletená spoustou
                slovních hříček. Chcete-li věřit na velkou lásku na celý život,
                a přitom se i zasmát, pak je tu pro vás hra Spolu.
              </p>
              <Link to={"detailPage"}>Více informací o představení ▶</Link>
            </div>
          </div>
          <div className='subsection'>
            <img src={NaPavlaci} alt='Description5' />
            <div>
              <h2>Na Pavlači</h2>
              <p>
                Nahlédněte pod pokličku dvou žen před padesátkou a zjistěte, co
                jim nejvíce leží na srdci - vrásky, špíčky, práce nebo muži? To
                vše a mnohem více můžete shlédnout v komedii Na pavlači
                provoněné kávou...
              </p>
              <Link to={"detailPage"}>Více informací o představení ▶</Link>
            </div>
          </div>
        </div>
        <div className='section'>
          <h1 id="archive">Archiv představení</h1>
          <div className='subsection'>
            <img src={Honza} alt='Description4' />
            <div>
              <h2>Jak honza ke štěstí přišel</h2>
              <p>
                Něžná komedie o nehynoucí lásce v manželství propletená spoustou
                slovních hříček. Chcete-li věřit na velkou lásku na celý život,
                a přitom se i zasmát, pak je tu pro vás hra Spolu.
              </p>
              <Link to={"detailPage"}>Více informací o představení ▶</Link>
            </div>
          </div>
          <div className='subsection'>
            <img src={NaPavlaci} alt='Description5' />
            <div>
              <h2>Na Pavlači</h2>
              <p>
                Nahlédněte pod pokličku dvou žen před padesátkou a zjistěte, co
                jim nejvíce leží na srdci - vrásky, špíčky, práce nebo muži? To
                vše a mnohem více můžete shlédnout v komedii Na pavlači
                provoněné kávou...
              </p>
              <Link to={"detailPage"}>Více informací o představení ▶</Link>
            </div>
          </div>
        </div>
      </div>
      <ScrollButton/>
    </>
  );
}

export default RepertoirePage;
