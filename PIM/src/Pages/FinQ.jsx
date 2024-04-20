import React from 'react';
import FondFin from '../assets/FondFin.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'; 
import '../Pages/FinQ.css'; 
import BasicSelect from '../components/BasicSelect';

function FinQ() {
  return (
    <div className='Contenu'>
      {/* Placez BasicSelect ici et ajustez sa position avec des styles */}
      <div style={{ marginTop: '0px' }}>
        <BasicSelect />
      </div>

      <img src={FondFin} alt="" className='fondfin' />

      <Link to="/Accueil" style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', width: '80%', zIndex: 1 }}>
        <Button
          variant="contained"
          disableElevation
          style={{
            width: '100%',
            borderRadius: '16px',
            color: '#897F66',
            backgroundColor: '#EAE3D3',
            border: '2px solid #897F66',
            fontSize: '18px'
          }}
        >
          Trouver ma touffe de poils !
        </Button>
      </Link>
    </div>
  );
}

export default FinQ;


