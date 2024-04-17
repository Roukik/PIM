import React from 'react';
import Menu from '../components/Menu';
import './Favories.css';
import Favorie1 from '../assets/favorie1.svg';
import Favorie2 from '../assets/favorie2.svg';
import Favorie3 from '../assets/favorie3.svg';
import Favorie4 from '../assets/favorie4.svg';
import Fleche from '../assets/fleche.svg';

function Favories() {
  return (
    <div>
      <Menu></Menu>
    <div className='retourfav'>
    {<img src= {Fleche} alt="" className='fleche'/>}     Favoris
    </div>

    <div class="test">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
     </div>

    <div className="Lesfavories">
      <div className="favorie12">
        {<img src= {Favorie1} alt="" className='Favorie1'/>}
        {<img src= {Favorie2} alt="" className='Favorie2'/>}
      </div>

      <div className='favorie34'>
        {<img src= {Favorie3} alt="" className='Favorie3'/>}
        {<img src= {Favorie4} alt="" className='Favorie4'/>}
      </div>

    </div>
    </div>
  );
}

export default Favories;
