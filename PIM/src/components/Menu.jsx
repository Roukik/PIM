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
    <div className="container" style={{ height: '100vh', overflowY: 'auto' }}>
      <style>{`
        .container {
          width: 360px; /* Dimensions du Samsung Galaxy 8 */
          overflow: hidden;
          position: relative;
        }

        html, body {
          overflow-x: hidden;
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: 'Varela Round', sans-serif;
        }

        .header {
          display: block;
          margin: 0 auto;
          width: 100%;
          max-width: 100%;
          box-shadow: none;
          background-color: #ADC798;
          position: fixed;
          height: 60px!important;
          overflow: hidden;
          z-index: 10;
          border-bottom: solid 1px;
        }

        .main {
          margin: 0 auto;
          display: block;
          height: 100%;
          margin-top: 60px;
        }

        .mainInner {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          text-align: center;
        }

        .mainInner div {
          font-size: 3em;
          font-weight: bold;
          letter-spacing: 1.25px;
        }

        #sidebarMenu {
          height: 100%;
          position: fixed;
          left: 0;
          width: 250px;
          margin-top: 60px;
          transform: translateX(-250px);
          transition: transform 250ms ease-in-out;
          background:#ADC798;
        }

        .sidebarMenuInner {
          margin: 0;
          padding: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.10);
        }

        .sidebarMenuInner li {
          list-style: none;
          color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          padding: 20px;
          cursor: pointer;
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
        }

        .sidebarMenuInner li span {
          display: block;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.50);
        }

        .sidebarMenuInner li a {
          color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
        }

        input[type="checkbox"]:checked ~ #sidebarMenu {
          transform: translateX(0);
        }

        input[type=checkbox] {
          transition: all 0.3s;
          box-sizing: border-box;
          display: none;
        }

        .sidebarIconToggle {
          transition: all 0.3s;
          box-sizing: border-box;
          cursor: pointer;
          position: absolute;
          z-index: 99;
          height: 100%;
          top: 22px;
          left: 15px;
        }

        .spinner {
          transition: all 0.3s;
          box-sizing: border-box;
          position: absolute;
          height: 3px;
          width: 100%;
          background-color: #fff;
        }

        .horizontal {
          transition: all 0.3s;
          box-sizing: border-box;
          position: relative;
          margin-top: 13px; /* Ajustez la valeur pour l'alignement vertical */
          width: 50px;
        }
        
        .diagonal.part-1 {
          position: relative;
          transition: all 0.3s;
          box-sizing: border-box;
          float: left;
          width: 50px;
        }
        
        .diagonal.part-2 {
          transition: all 0.3s;
          box-sizing: border-box;
          position: relative;
          float: left;
          margin-top: 13px; /* Ajustez la valeur pour l'alignement vertical */
          width: 50px;
          background-color: #1F330A,
        }

        input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
          transition: all 0.3s;
          box-sizing: border-box;
          opacity: 0;
        }

        input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
          transition: all 0.3s;
          box-sizing: border-box;
          transform: rotate(135deg);
          margin-top: 8px;
        }

        input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
          transition: all 0.3s;
          box-sizing: border-box;
          transform: rotate(-135deg);
          margin-top:8px;

        }

        .icons-container {
          position: absolute;
          top: 50%; /* Ajustez si nécessaire */
          transform: translateY(-50%); /* Pour centrer verticalement */
          right: 10px; /* Ajustez pour l'espace entre les icônes et le bord droit */

        }
        
      `}</style>
      <div className="header">
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
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" checked={sidebarOpen} onChange={handleSidebarToggle} />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
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
    </div>
  );
};

export default Menu;

