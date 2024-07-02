import React from "react";
import "../DivadloDI/DiPage.css";
import Navbar from "../../components/NavBar/Navbar";
import DiLogo from "../../assets/DivadloDI/di-logo.png";
import Adela from "../../assets/DivadloDI/adela.jpeg";
import Amy from "../../assets/DivadloDI/amy.jpeg";
import Adam from "../../assets/DivadloDI/adam.jpeg";
import Marketa from "../../assets/DivadloDI/marketa.jpeg";
import Tomas from "../../assets/DivadloDI/tomas.jpeg";
import ScrollButton from "../../components/ScrollTopButton/ScrollButton";

const DIPage = () => {
  return (
    <>
      <Navbar />
      <div id='di' className='about-page'>
        <section className='banner'>
          <img src={DiLogo} alt='DI logo' className='image' />
        </section>
        <section className='history-today'>
          <div className='history'>
            <h2>Jak to vše začalo</h2>
            <p>
              Divadlo Di vzniklo v roce 2017 a založily ho Adéla Pellarová a
              Monika Münsterová. Po skvělých divadelních letech promluvil osud a
              Monika v roce 2023 musela divadelní činnost ukončit. V současné
              době je základnou divadla Di Adéla.
            </p>
            <p>
              Adéla má vystudovanou DAMU a garantuje divadelní kvalitu u všech
              představení divadla Di.
            </p>
          </div>
          <div className='today'>
            <h2>Jak jsme se dostali do součastnosti</h2>
            <p>
              Divadlo Di má zázemí a stálou scénu v Divadeliéru ve Vysokém Mýtě.
            </p>
            <p>
              V roce 2022 se k divadlu Di přidala herečka Amálie Popelářová do
              pohádky O Šípkové Růžence, následně i Jak Honza ke štěstí přišel a
              také herec a režisér Tomáš Valek (JAMU) na inscenaci Spolu.
            </p>
            <p>
              V roce 2023 rozšířil divadelní soubor herec Adam Horký (pohádka O
              Šípkové Růžence, Jak Honza ke štěstí přišel) a zpěvačka a herečka
              Markéta Voříšková (komedie Na pavlači).
            </p>
            <p>
              Od roku 2024 hraje divadlo Di ve složení herců Adéla Pellarová,
              Amálie Popelářová, Adam Horký, Markéta Voříšková, Tomáš Valek.
            </p>
            <p>
              Spolupracujeme s hudebníkem a skladatelem Šimonem Martínkem,
              klavíristkou Bárou Machovcovou.
            </p>
            <p>Podporujeme myšlenku šíření kvalitního divadla.</p>
            <p>
              Venkovní akce pro nás jsou v pohodě, máme vlastní bedny i s
              mikrofony.
            </p>
          </div>
        </section>

        <section id='team' className='team'>
          <h2>Členové divadla DI</h2>
          <div className='team-members'>
            <div className='team-member'>
              <img src={Adela} alt='Team Member 1' />
              <h3>Adéla Pellarová</h3>
              <a href='https://pardubice.rozhlas.cz/divadelier-ve-vysokem-myte-koncentruje-kulturu-na-jedno-misto-zapojuje-i-vylohy-7180107'>
                Rozhovor s Adélou Pellarovou v Českém rozhlase Pardubice si
                můžete přečíst <b>zde</b>.
              </a>
            </div>
          </div>
        </section>
        <section className='team'>
          <h2>Hostující herci divadla DI</h2>
          <div className='team-members'>
            <div className='team-member'>
              <img src={Amy} alt='Team Member 1' />
              <h3>Amálie Popelářová</h3>
            </div>
            <div className='team-member'>
              <img src={Adam} alt='Team Member 1' />
              <h3>Adam Horký</h3>
            </div>
            <div className='team-member'>
              <img src={Marketa} alt='Team Member 1' />
              <h3>Markéta Voříšková</h3>
            </div>
            <div className='team-member'>
              <img src={Tomas} alt='Team Member 1' />
              <h3>Tomáš Valek</h3>
            </div>
          </div>
        </section>
        <section id="co-creators" className='co-creators'>
          <h2>Spolutvůrci</h2>
          <h3>Skladatelé a hudební interpreti</h3>
          <div className='team-members'>
            <div className='team-member'>
              <i class='i-center fa fa-music fa-5x' aria-hidden='true'></i>
              <h3>Bára Machovcová</h3>
            </div>
            <div className='team-member'>
              <i class='i-center fa fa-music fa-5x' aria-hidden='true'></i>
              <h3>Šimon Martínek</h3>
            </div>
            <div className='team-member'>
              <i class='i-center fa fa-music fa-5x' aria-hidden='true'></i>
              <h3>Eduard Příhoda ml.</h3>
            </div>
          </div>
          <h3>Výtvarná realizace</h3>
          <div className='team-members'>
            <div className='team-member'>
              <i class='i-center fas fa-edit fa-5x' aria-hidden='true'></i>
              <h3>Monika Münsterová</h3>
            </div>
            <div className='team-member'>
              <i class='i-center fas fa-edit fa-5x' aria-hidden='true'></i>
              <h3>Anežka Plháková</h3>
            </div>
            <div className='team-member'>
              <i class='i-center fas fa-edit fa-5x' aria-hidden='true'></i>
              <h3>Barbara Wacková</h3>
            </div>
            <div className='team-member'>
              <i class='i-center fas fa-edit fa-5x' aria-hidden='true'></i>
              <h3>Libuše Münsterová</h3>
            </div>
          </div>
          <h3>Technická realizace a výroba kulis</h3>
          <div className='team-members'>
            <div className='team-member'>
              <i class='i-center fa fa-cogs fa-5x' aria-hidden='true'></i>
              <h3>Petr Kubík</h3>
            </div>
            <div className='team-member'>
              <i class='i-center fa fa-cogs fa-5x' aria-hidden='true'></i>
              <h3>Ladislav Plšek</h3>
            </div>
            <div className='team-member'>
              <i class='i-center fa fa-cogs fa-5x' aria-hidden='true'></i>
              <h3>Michal Veselý</h3>
            </div>
            <div className='team-member'>
              <i class='i-center fa fa-cogs fa-5x' aria-hidden='true'></i>
              <h3>Jiří Holomek</h3>
            </div>
          </div>
        </section>
      </div>
      <ScrollButton />
    </>
  );
};

export default DIPage;
