import React, { useState, useRef, useEffect } from "react";
import "./EventsPage.css";
import Navbar from "../../components/NavBar/Navbar";
import ScrollButton from "../../components/ScrollTopButton/ScrollButton";
import SlideShow from "../../components/SlideShow/SlideShow";

const EventsPage = () => {
  const events = [
    {
      date: "2024-01-07",
      place: "Divadeliér",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-01-09",
      place: "MŠ Horní Jelení",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-02-01",
      place: "MŠ Slapy u Tábora",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-02-08",
      place: "MŠ Lukavice u Chrudimi",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-02-15",
      place: "MŠ Srdíčko Pardubice",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-02-20",
      place: "MŠ Skuteč",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-02-27",
      place: "MŠ Zálší",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-02-29",
      place: "MŠ Javorník u Svitav",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-03-03",
      place: "Divadeliér",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-03-05",
      place: "MŠ Brandýs n. Orl.",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-03-06",
      place: "MŠ Záv. Míru Pardubice 2x",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-03-07",
      place: "MŠ Pod lesem Ústí nad Orlicí",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-03-07",
      place: "Divadeliér",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-03-14",
      place: "Divadeliér",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-03-17",
      place: "Kulturní dům Bučina",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-03-19",
      place: "MŠ Lačnov přesunuto",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-03-21",
      place: "MŠ Ostřetín",
      name: "Jak Honza ke štěstí přišel ",
    },
    {
      date: "2024-03-26",
      place: "MŠ Cerekvice nad Loučnou",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-04-04",
      place: "MŠ Příluka",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-04-09",
      place: "MŠ Smiřice",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-04-11",
      place: "ZŠ a MŠ Lukavice",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-04-14",
      place: "Sokol Sruby",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-04-16",
      place: "MŠ Čistá",
      name: "Plaváček",
    },
    {
      date: "2024-04-18",
      place: "MŠ a ZŠ Slapy",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-04-25",
      place: "Speciální ZŠ Vysoké Mýto",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-05-09",
      place: "MŠ Horní Újezd",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-05-10",
      place: "Divadeliér MŠ Slunečná",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-05-12",
      place: "Sokol Dobříkov",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-05-23",
      place: "MŠ Kunčina",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-05-28",
      place: "MŠ Hrochův Týnec",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-05-30",
      place: "MŠ Rokytnice v Orlických H.",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-06-06",
      place: "ZŠ Vidlatá Seč",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-06-08",
      place: "Hrad Vízmburk",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-06-13",
      place: "MŠ Opatov",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-06-15",
      place: "Měst. slavnosti Horní Jelení",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-06-25",
      place: "MŠ Česká Třebová U koupaliště",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-07-14",
      place: "Stromová galerie Choceň",
      name: "Na Pavlači",
    },
    {
      date: "2024-07-17",
      place: "Koupaliště Choceň",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-09-07",
      place: "Náměstí VM Měs. slavnosti",
      name: "Potrestaná pýcha",
    },
    { date: "2024-09-11", place: "MŠ Příluka", name: "Potrestaná pýcha" },
    {
      date: "2024-09-12",
      place: "MŠ Horákové Svitavy",
      name: "Potrestaná pýcha",
    },
    {
      date: "2024-09-19",
      place: "MŠ Javorník u Svitav",
      name: "Potrestaná pýcha",
    },
    { date: "2024-09-25", place: "MŠ Hrušová", name: "Potrestaná pýcha" },
    { date: "2024-09-26", place: "MŠ Tisová", name: "Potrestaná pýcha" },
    { date: "2024-10-02", place: "MŠ a ZŠ Slapy", name: "Potrestaná pýcha" },
    {
      date: "2024-10-03",
      place: "MŠ Horní Jelení",
      name: "Když rozum srdce neslyší",
    },
    {
      date: "2024-10-09",
      place: "MŠ Strojařů Chrudim",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-10-10",
      place: "MŠ Masaryk Kolín",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-10-16",
      place: "MŠ Morašice okr. Chrudim",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-10-17",
      place: "MŠ Srdíčko Pardubice",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-10-23",
      place: "MŠ Jiráskova Moravská Třeb.",
      name: "O Šípkové Růžence",
    },
    { date: "2024-10-24", place: "MŠ Osík", name: "Potrestaná pýcha" },
    {
      date: "2024-10-31",
      place: "MŠ České Meziřící",
      name: "Potrestaná pýcha",
    },
    {
      date: "2024-11-05",
      place: "MŠ Brodská Žďár nad Sáz.",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-11-06",
      place: "MŠ a ZŠ Jehnědí",
      name: "Potrestaná pýcha",
    },
    {
      date: "2024-11-11",
      place: "CČSH Litomyšl",
      name: "Jak Honza ke štěstí přišel",
    },
    {
      date: "2024-11-13",
      place: "MŠ Brandýs nad Orlicí",
      name: "Potrestaná pýcha",
    },
    {
      date: "2024-11-20",
      place: "MŠ Kunčina",
      name: "O Šípkové Růžence",
    },
    {
      date: "2024-12-09",
      place: "MŠ Kaštánek Choceň",
      name: "Vánoční Zeměkoule",
    },
    {
      date: "2024-12-11",
      place: "MŠ Sedliště",
      name: "Vánoční Zeměkoule",
    },
    {
      date: "2024-12-12",
      place: "MŠ Dolní Roveň",
      name: "Vánoční Zeměkoule",
    },
    {
      date: "2024-12-09",
      place: "MŠ Dobříkov",
      name: "Vánoční Zeměkoule",
    },
    {
      date: "2025-01-15",
      place: "MŠ Dolní Újezd",
      name: "Potrestaná pýcha",
    },
    {
      date: "2025-01-16",
      place: "MŠ Pod lesem Ústí nad Orlicí",
      name: "Potrestaná pýcha",
    },
    { date: "2025-02-12", place: "MŠ Skuteč", name: "Potrestaná pýcha" },
    { date: "2025-03-12", place: "MŠ Smiřice", name: "Potrestaná pýcha" },
    {
      date: "2025-04-10",
      place: "MŠ Čtyřlístek Vysoké Mýto",
      name: "Jak Honza ke štěstí přišel",
    },
    { date: "2025-05-14", place: "MŠ Kunčina", name: "Potrestaná pýcha" },
    {
      date: "2025-06-03",
      place: "MŠ Zvoneček Hradec Králové",
      name: "O Šípkové Růžence",
    },
    {
      date: "2025-06-04",
      place: "ZŠ Vidlatá Seč",
      name: "Potrestaná pýcha",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day}. ${month} ${year}`;
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [sortedEvents, setSortedEvents] = useState(events);

  useEffect(() => {
    setSortedEvents(events);
  }, []);

  const filterEvents = () => {
    return sortedEvents.filter(
      (event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formatDate(event.date).includes(searchTerm)
    );
  };

  const handleSortAscending = () => {
    const sorted = [...sortedEvents].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setSortedEvents(sorted);
  };

  const handleSortDescending = () => {
    const sorted = [...sortedEvents].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setSortedEvents(sorted);
  };

  return (
    <>
      <div className='events events-container'>
        <Navbar />
        <SlideShow />
        <div className='event-container'>
          <h2>Plánované akce</h2>
          <div className='search-bar-container'>
            <button onClick={handleSortAscending}>Představení vzestupně</button>
            <div className='search-bar'>
              <input
                type='text'
                placeholder='Vyhledat představení...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className='fa fa-search'></i>
            </div>
            <button onClick={handleSortDescending}>Představení sestupně</button>
          </div>
          {filterEvents().map((event, index) => (
            <div key={index} className='event-item'>
              <div className='event event-date'>
                <i className='fa fa-calendar'></i> {formatDate(event.date)}
              </div>
              <div className='event event-place'>
                <i className='fa fa-map-marker'></i> {event.place}
              </div>
              <div className='event event-name'>
                <i className='fa fa-info-circle'></i> {event.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollButton />
    </>
  );
};

export default EventsPage;
