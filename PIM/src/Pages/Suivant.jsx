import React, { useState } from 'react';
import '../Pages/Suivant.css';
import { Link } from 'react-router-dom';
import FondS from '../assets/Suivant.svg';
import ChienColor from '../assets/chienColor.svg';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import FinQ from '../Pages/FinQ'

function Suivant() {
  const [fondDimensions, setFondDimensions] = useState({ width: 0, height: 0 });

  const handleFondLoad = (event) => {
    setFondDimensions({
      width: event.target.width,
      height: event.target.height
    });
  };

  return (
    <div className="centered-container">
      <img src={FondS} alt="" className='FondS' onLoad={handleFondLoad} />
      <img src={ChienColor} alt="" className='chien'/>
      
      <div className="slider-container" style={{ width: fondDimensions.width, height: fondDimensions.height }}>
        <Slider
          defaultValue={60}
          aria-label="Default"
          valueLabelDisplay="auto"
          style={{ color: '#897F66' }}
        />
      </div>
      
      <Link to="finq" style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', width: '80%' }}>
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
  );
}

export default Suivant;

