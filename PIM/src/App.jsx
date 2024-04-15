import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css'; // Assurez-vous que le chemin est correct

// Créez un composant pour la page d'accueil
const Accueil = () => {
  return <h2>C'est la page d'accueil!</h2>;
}

// Créer un composant pour la page que vous souhaitez lier
const AutrePage = () => {
  return <h2>C'est une autre page!</h2>;
}

function App() {
  return (
    <Router>
      <div>
        {/* Créez un lien vers la page d'accueil */}
        <Link to="/accueil">
          <button>PAGE D'OUVERTURE</button>
        </Link>

        {/* Définir la route de la page d'accueil */}
        <Route path="/accueil" component={Accueil} />
      </div>
    </Router>
  );
}

export default App;


