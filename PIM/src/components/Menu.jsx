import React, { useState } from 'react';
import Notif from '../assets/notif.svg';
import Coeur from '../assets/coeur.svg';
import Bonhomme from '../assets/bonhomme.svg';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'

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
          <Link to="/Carte" style={{textDecoration:'none'}}>
            <li>Carte</li>
          </Link>

          <Link to="/Accueil" style={{textDecoration:'none'}}>
          <li>Animaux</li>
          </Link>

          <Link to="/PagesRDV" style={{textDecoration:'none'}}>
          <li>Prendre rendez-vous</li>
          </Link>

          <Link to="/Profil" style={{textDecoration:'none'}}>
          <li>Profil</li>
          </Link>

          <Link to="/ " style={{textDecoration:'none'}}>
          <li>Ressources</li>
          </Link>

          <Link to="/" style={{textDecoration:'none'}}>
          <li>Qui sommes-nous ?</li>
          </Link>

          <Link to="/" style={{textDecoration:'none'}}>
          <li>Mentions légales </li>
          </Link>

          <img src={Logo} alt="" className="Logo" />
        </ul>
      </div>
    </>
  );
};

export default Menu;

