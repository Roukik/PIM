import React from 'react';
import './Favories.css';
import Barfav from '../components/barfav';
import Fleche from '../assets/fleche.svg';

function Favories() {
  return (
    
    <div className="Lesfavories">
      <div className='retourfav'>
        {<img src= {Fleche} alt="" className='fleche'/>}     Favoris
        <Barfav></Barfav>
      </div>
    </div>
  
  );
}

export default Favories;
