import React from 'react';
import Tracepates from '../assets/tracepates.svg';
import '../Pages/Popup.css';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import { Link } from 'react-router-dom';
import PopupQuestionnaire from '../Pages/PopupQuestionnaire';

function Popup() {
  return (
    <div className='Tracepates'>
      <img src={Tracepates} alt="" className="TracepatesImage" />
      <Link to="/Accueil">
        <IconButton aria-label="close" className='CloseButton'>
          <CloseIcon style={{ fontSize: 48 }} />
        </IconButton>
      </Link>
      
      {/* Placer le lien vers PopupQuestionnaire ici */}
      <Link to="/PopupQuestionnaire">
      <IconButton className="Arrow">
        <ArrowForwardIcon style={{ fontSize: 48, color: 'black' }} />
      </IconButton>
      </Link>
    </div>
  );
}

export default Popup;


