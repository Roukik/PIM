import React from 'react';
import Q1 from '../assets/Q1.svg';
import Button from '@mui/material/Button';
import '../Pages/PopupQuestionnaire.css'; 
import { Link } from 'react-router-dom';
import ChatSansColor from '../assets/ChatSansColor.svg'
import ChienSansColor from '../assets/ChienSansColor.svg'
import HamsterSansColor from '../assets/HamsterSansColor.svg'
import LapinSansColor from '../assets/LapinSansColor.svg'

function PopupQuestionnaire() {
  return (
    <div className='i'>
      <img src={Q1} alt="" className='q1' />
      <div className="pets">
        <div className="pets12">
          <img src={ChatSansColor} alt="" className="ChatSansColor" />
          <img src={ChienSansColor} alt="" className="ChienSansColor" />
        </div>

        <div className="pets34">
          <div>
            <img src={HamsterSansColor} alt="" className="HamsterSansColor" />
            <img src={LapinSansColor} alt="" className="LapinSansColor" />
          </div>
        </div>
        <Link to="/Suivant" style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', width: '80%' }}>
          <Button
            variant="contained"
            disableElevation
            style={{
              width: '100%',
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
    </div>
  );
}

export default PopupQuestionnaire;


