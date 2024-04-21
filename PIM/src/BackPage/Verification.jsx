import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../assets/Logo.png';
import FondVerification from '../assets/FondVerification.png';
import './Verification.css';

function Verification() {
  return (
    <div className="v">
      <img src={FondVerification} alt="" className='FondVerification' />

      <Link to="/">
        <img src={Logo} alt="" className='Logo' />
      </Link>
    </div>
  );
}

export default Verification;

