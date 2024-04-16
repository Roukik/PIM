import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import Favories from './Pages/Favories';
import Notifications from './Pages/Notifications';
import PageOuverture from './Pages/PageOuverture';
import Profil from './Pages/Profil';
import Layout from './Layouts/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="accueil" element={<Accueil />} />
          <Route path="favories" element={<Favories />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="pageouverture" element={<PageOuverture />} />
          <Route path="profil" element={<Profil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
