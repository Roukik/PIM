import React from 'react';
import { Link } from 'react-router-dom';
import './PageBienvenue.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Popup from './Popup';
import FondPansement from '../assets/FondPansement.png';

function PageBienvenue() {
  return (
    <div className="page-container page-bienvenue"> {/* Ajoutez la classe page-bienvenue ici */}
      <img src={FondPansement} alt="" className='FondPansement' />
      <div className="content-container">
        <h1 className="Bienvenue">Bienvenue !</h1>
        <h2 className="eheh">Merci de vous soucier de ces animaux dans le besoin !</h2>
        <div className="button-adopte">
          <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Link to="/Popup">
              <Button         
                variant="contained" disableElevation
                style={{
                  width: '80%', 
                  borderRadius: '16px',
                  color: '#897F66',
                  backgroundColor: '#EAE3D3',
                  border: '2px solid #897F66',
                }}
              >
                Adopter un animal dans le besoin
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default PageBienvenue;



