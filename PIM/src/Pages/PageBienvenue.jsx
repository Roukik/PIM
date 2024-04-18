import React from 'react';
import './PageBienvenue.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function PageBienvenue() {
  return (
    <div className="page-container">
      <h1 className="Bienvenue">Bienvenue</h1>
      <h2 className="eheh">Vous souhaitez :</h2>
      <div className="button-adopte">
        <Stack  spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Button variant="outlined" size="large">Cliquez ici</Button>
        </Stack>
      </div>
    </div>
  );
}

export default PageBienvenue;

