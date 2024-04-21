import React from 'react';
import './Favories.css';
import Barfav from '../components/barfav';
import Fleche from '../assets/fleche.svg';

function Favories() {
  return (
    
    <div className="Lesfavories">
      <div className='retourfav'>
      <div className="Container1Description">
        <img src={Fleche} alt="" className='arrow' />
        <p>Favoris</p>
      </div>
        <Barfav></Barfav>
      </div>
    </div>
  
  );
}

export default Favories;
