import React from 'react';
import PQRefuge from "../assets/PQRefuge.png";
import { IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import './P1.css'; // Fichier de style CSS pour vos personnalisations

function P1() {
  return (
    <div className="container">
      <div className="background">
        <img src={PQRefuge} alt="" className="image"/>
        <div className="arrow-container">
          <IconButton className="arrow-button">
            <ArrowForward style={{ fontSize: 250, color: 'white' }}/>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default P1;

