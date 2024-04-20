import React, { useState } from 'react';
import '../Pages/Suivant.css';
import { Link } from 'react-router-dom';
import FondS from '../assets/Suivant.svg';
import ChienColor from '../assets/chienColor.svg';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import FinQ from '../Pages/FinQ';
import MultipleSelectCheckmarks from '../components/MultipleSelectCheckmarks';
import FemelleColor from '../assets/FemelleColor.svg'
import Femelle from '../assets/Femelle.svg'
import MaleColor from '../assets/MaleColor.svg'
import Male from '../assets/Male.svg'

function Suivant() {

  const [likedImages, setLikedImages] = useState({
    Femelle: false,
    Male: false,
  });

  const toggleLike = (imageType) => {
    setLikedImages(prevState => ({
      ...prevState,
      [imageType]: !prevState[imageType]
    }));
  };
  

  const [fondDimensions, setFondDimensions] = useState({ width: 0, height: 0 });

  const handleFondLoad = (event) => {
    setFondDimensions({
      width: event.target.width,
      height: event.target.height
    });
  };

  return (
    <div className="centered-container" style={{ position: 'relative' }}>
      <img src={FondS} alt="" className='FondS' onLoad={handleFondLoad} style={{ position: 'absolute', top: 5, left: 20, zIndex: -1 }} />
      
      <div className="centered-container" style={{ position: 'absolute', top: '105%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
        <MultipleSelectCheckmarks />
      </div>

      <img src={ChienColor} alt="" className='chien'/>

      <div className="slider-container" style={{ width: fondDimensions.width, height: fondDimensions.height }}>
        <Slider
          defaultValue={60}
          aria-label="Default"
          valueLabelDisplay="auto"
          style={{ color: '#897F66' }}
        />
      </div>
      
      <div className="Sexe" style={{ marginTop: '530px', display: 'flex', justifyContent: 'space-between' }}>
        <img src={likedImages.Femelle ? FemelleColor : Femelle} alt="" className="Femelle" onClick={() => toggleLike("Femelle")} style={{ marginRight: '45px' }} />
        <img src={likedImages.Male ? MaleColor : Male} alt="" className="Male" onClick={() => toggleLike("Male")} />
      </div>


      <Link to="/FinQ" style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', width: '80%', zIndex: 1 }}>
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



