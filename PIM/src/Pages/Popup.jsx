import React from 'react';
import Tracepates from '../assets/tracepates.svg';
import '../Pages/Popup.css';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Accueil from './Accueil';
import { Link } from 'react-router-dom'; 


function Popup() {
  return (
    <div className='Tracepates'>
      <Link to="/Accueil">
        <IconButton aria-label="close" className='CloseButton'>
          <CloseIcon />
        </IconButton>
      </Link>
      <img src={Tracepates} alt="" className="TracepatesImage" />
    </div>
  );
}

export default Popup;
