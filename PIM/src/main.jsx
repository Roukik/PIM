import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Menu from './components/Menu';
import Favories from './Pages/Favories';
import Notifications from './Pages/Notifications';
import Profil from './Pages/Profil';
import PageBienvenue from './Pages/PageBienvenue';
import Popup from './Pages/Popup';
import Accueil from './Pages/Accueil';
import PopupQuestionnaire from './Pages/PopupQuestionnaire';
import SDes from './Descriptions/SDes';
import CarteR from './Pages/CarteR';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<PageBienvenue />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/popupquestionnaire" element={<PopupQuestionnaire/>} />
        <Route path="/sdes" element={<SDes/>} />
        <Route path="/carter" element={<CarteR/>} />
        <Route path="/app" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/favories" element={<Favories />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
