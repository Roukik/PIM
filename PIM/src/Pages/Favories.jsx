import React from 'react';
import Menu from '../components/Menu';
import './Favories.css';
import Barfav from '../components/barfav';
import Fleche from '../assets/fleche.svg';

function Favories() {
  return (
    <div>
      <Menu></Menu>

    <div className="Lesfavories">
      <div className='retourfav'>
        {<img src= {Fleche} alt="" className='fleche'/>}     Favoris
        <Barfav></Barfav>
      </div>
    </div>
    </div>
  );
}

export default Favories;
