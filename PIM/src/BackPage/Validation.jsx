import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../assets/Logo.png';
import FondValidation from '../assets/FondValidation.png';
import './Validation.css';

function Validation() {
  return (
    <div className="v">
      <img src={FondValidation} alt="" className='FondValidation' />

      <Link to="/Refugeprofil">
        <img src={Logo} alt="" className='LogoVa' />
      </Link>
    </div>
  );
}

export default Validation;