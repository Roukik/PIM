import React from 'react';
import { Link } from 'react-router-dom';
import './PageBienvenue.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Popup from './Popup'

function PageBienvenue() {
  return (
    <div className="page-container">
      <h1 className="Bienvenue">Bienvenue</h1>
      <h2 className="eheh">Vous souhaitez :</h2>
      <div className="button-adopte">
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Link to="/Popup">
            <Button variant="outlined" size="large">Adopter un animal dans le besoin</Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
}

export default PageBienvenue;



