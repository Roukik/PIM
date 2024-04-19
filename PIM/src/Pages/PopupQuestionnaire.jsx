import React from 'react';
import Q1 from '../assets/Q1.svg';
import Button from '@mui/material/Button';
import './PopupQuestionnaire.css';
import { Link } from 'react-router-dom';

function PopupQuestionnaire() {
  return (
    <div className='i' style={{ position: 'relative' }}>
      <img src={Q1} alt="" className='q1' />
      <Link to="/Suivant">
      <Button
        variant="contained"
        disableElevation
        style={{
          position: 'absolute',
          bottom: '30px', 
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%', 
          borderRadius: '16px',
          color: '#897F66',
          backgroundColor: '#EAE3D3',
          border: '2px solid #897F66',
        }}
      >
        Suivant
      </Button>
      </Link>
    </div>
  );
}

export default PopupQuestionnaire;

