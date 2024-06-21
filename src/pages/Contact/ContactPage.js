import React from 'react';
import './ContactPage.css';
import contactImage from '../../assets/logo.png';
import Navbar from '../../components/NavBar/Navbar';

const ContactPage = () => {
    return (
      <>
      <Navbar/>
        <div className="contact-container">
          <div className="contact-image">
            <img src={contactImage} alt="Contact" />
          </div>
          <div className="contact-details">
            <div className="contact-section map">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.0283958728623!2d16.15694027684871!3d49.95456982294376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dc172cbafc7a1%3A0xe181fc42e8afb1b6!2sDivadeli%C3%A9r!5e0!3m2!1scs!2scz!4v1718886644593!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="contact-section">
              <h2>Kontakty</h2>
              <p>
                <strong>Adresa:</strong> Pražská 8, Vysoké Mýto 566 01
              </p>
              <p>
                <strong>Telefonní číslo:</strong> +420 777 076 901 (Adéla Pellarová)
              </p>
              <p>
                <strong>Email:</strong> adapop@seznam.cz
              </p>
            </div>
            <div className="contact-section">
              <h2>O nás</h2>
              <p>
              představení divadla Di, pronájmy, rezervace, Divan - představení, Dr. ZDIV - přihlášky, TV VV, Výstavy ve výloze, přednášky, koncerty, kulturní akce a mnohé další...             </p>
            </div>
          </div>
        </div>
      </>
      );
};

export default ContactPage;