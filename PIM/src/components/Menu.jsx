import React, { useState } from 'react';
import Notif from '../assets/notif.svg';
import Coeur from '../assets/coeur.svg';
import Bonhomme from '../assets/bonhomme.svg';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="header">
        <button className={sidebarOpen ? 'is-active hamburger hamburger--collapse' : 'hamburger hamburger--collapse'} type="button" onClick={handleSidebarToggle}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div className="icons-container">
          {/* Utilisez Link pour relier chaque icône à une page */}
          <Link to="/Notifications">
            <img src={Notif} alt="Notifications" className="icon" />
          </Link>
          <Link to="/Favories">
            <img src={Coeur} alt="Favories" className="icon" />
          </Link>
          <Link to="/Profil">
            <img src={Bonhomme} alt="Profil" className="icon" />
          </Link>
        </div>
      </div>

      <div id="sidebarMenu" className={sidebarOpen ? 'open' : ''}>
        <ul className="sidebarMenuInner">
          <li><span>MENU</span></li>
          <li><a href="https://vanila.io" target="_blank" rel="noopener noreferrer">Refuge</a></li>
          <li><a href="https://instagram.com/plavookac" target="_blank" rel="noopener noreferrer">Cartes</a></li>
          <li><a href="https://twitter.com/plavookac" target="_blank" rel="noopener noreferrer">Animaux</a></li>
          <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank" rel="noopener noreferrer">Prendre rendez-vous</a></li>
          <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank" rel="noopener noreferrer">Profil</a></li>
        </ul>
      </div>
    </>
  );
};

export default Menu;

