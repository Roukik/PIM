import React from 'react';
import PQRefuge from "../assets/PQRefuge.png";
import { IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './P1.css';

function P1() {
  return (
    <div className="container">
      <div className="background">
        <img src={PQRefuge} alt="" className="image"/>
        <div className="arrow-container">
        <Link to="/FormulaireRefuge">
          <IconButton className="arrow-button">
            <ArrowForward style={{ fontSize: 250, color: 'white' }}/>
          </IconButton>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default P1;

