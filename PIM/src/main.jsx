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
import MainLayout from './layouts/MainLayout';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<PageBienvenue />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/popupquestionnaire" element={<PopupQuestionnaire />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/fiche/:id" element={<SDes />} />
          <Route path="/carte" element={<CarteR />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/favories" element={<Favories />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
