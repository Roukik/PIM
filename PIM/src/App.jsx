import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import Favories from './Pages/Favories';
import Notifications from './Pages/Notifications';
import PageOuverture from './Pages/PageOuverture';
import PageBienvenue from './Pages/PageBienvenue';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <PageBienvenue />
    </div>
  );
}

export default App;

