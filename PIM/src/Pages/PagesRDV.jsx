import React from 'react';
import Fleche from '../assets/fleche.svg';
import '../Pages/RDV.css';
import Refugeimg from '../assets/ScootieMagelan.png';
import RDVCard from '../components/RDVCard';
import DateCalendarValue from "../components/DateCalendarValue";


function PagesRDV() {
  return (
    <div className="Container">
      <div className="Container1RDV">
        <img src={Fleche} alt="" className='arrow' />
        <p>Description</p>
      </div>
      <div className="Containe2RDV">
        <img src={Refugeimg} alt="" className='Refugeimg'/>
        <div className="Container3RDV">
          <RDVCard />

          <DateCalendarValue />
        </div>
      </div>
    </div>
  );
}

export default PagesRDV;







