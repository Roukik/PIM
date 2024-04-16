import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import Favories from './Pages/Favories';
import Notifications from './Pages/Notifications';
import PageOuverture from './Pages/PageOuverture';
import Profil from './Pages/Profil';
import Layout from './Layouts/Layout';


function App() {
  return (
    <div>
      <Menu></Menu>
    </div>
  )
}

export default App