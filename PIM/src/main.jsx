import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Menu from './components/Menu';
import Favories from './Pages/Favories';
import Notifications from './Pages/Notifications';
import Profil from './Pages/Profil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/favorites" element={<Favories />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
