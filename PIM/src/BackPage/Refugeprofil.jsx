import React from 'react';
import FondChien from '../assets/fondChien.jpg';
import './Refugeprofil.css'; // Assurez-vous d'importer le fichier CSS correctement
import Fleche from '../assets/fleche.svg';
import ScootieMagelan from '../assets/ScootieMagelan.png';
import InfosRefugeprofil from '../components/InfosRefugeprofil';
import { Link } from 'react-router-dom'; // Assurez-vous d'importer Link depuis react-router-dom
import Button from '@mui/material/Button'; // Assurez-vous d'importer Button depuis Material-UI

function Refugeprofil() {
  return (
    <div className='ContainerRefugeprofil'>
      <img src={FondChien} alt="" className='fond' />

      <div className='block123'>

        <div className='ContainerRefugeProfil1'>
          <img src={Fleche} alt="" className='arrowr' />
          <p>Profil</p>
        </div>

        <div className="ContainerRefugeProfil2">
          <img src={ScootieMagelan} alt="" className='ScootieMagelan' />
        </div>

        <div className="ContainerRefugeProfil3">
          <p>Refuge ATPA - SPA Toulouse</p>
          <p>Refuge pour animaux à Toulouse</p>
        </div>

        <Link to="/MesAnimaux" style={{ position: 'absolute', bottom: '-90px', left: '50%', transform: 'translateX(-50%)', width: '80%' }}>
          <Button
            variant="contained"
            disableElevation
            style={{
              width: '100%',
              borderRadius: '16px',
              color: '#897F66',
              backgroundColor: '#EAE3D3',
              border: '2px solid #897F66',
            }}>
            Voir mes animaux
          </Button>
        </Link>

        <div className='ContainerRefugeprofil4'>
          <InfosRefugeprofil></InfosRefugeprofil>
          <button className='modifierLeRefugeprofil' >Modifier le profil</button> {/* Typo: modifierLeRefugeprofil */}
        </div>
      </div>
    </div>
  );
}

export default Refugeprofil;

