import React, { useState } from 'react';
import Q1 from '../assets/Q1.svg';
import Button from '@mui/material/Button';
import '../Pages/PopupQuestionnaire.css'; 
import { Link } from 'react-router-dom';
import ChatSansColor from '../assets/ChatSansColor.svg'
import ChienSansColor from '../assets/ChienSansColor.svg'
import HamsterSansColor from '../assets/HamsterSansColor.svg'
import LapinSansColor from '../assets/LapinSansColor.svg'
import ChatColor from '../assets/ChatColor.svg'
import ChienColor from '../assets/chienColor.svg'
import HamsterColor from '../assets/hamsterColor.svg'
import LapinColor from '../assets/lapinColor.svg'

function PopupQuestionnaire() {
 
  const [likedImages, setLikedImages] = useState({
    Chat: false,
    Chien: false,
    Hamster: false,
    Lapin: false
  });


  const toggleLike = (imageName) => {
    setLikedImages(prevState => ({
      ...prevState,
      [imageName]: !prevState[imageName]
    }));
  };

  return (
    <div className='i'>
      <img src={Q1} alt="" className='q1' />
      <div className="pets">
        <div className="pets12">
          <img src={likedImages.Chat ? ChatColor : ChatSansColor} alt="" className="Chat" onClick={() => toggleLike("Chat")} />
          <img src={likedImages.Chien ? ChienColor : ChienSansColor} alt="" className="Chien" onClick={() => toggleLike("Chien")} />
        </div>

        <div className="pets34">
          <div>
            <img src={likedImages.Hamster ? HamsterColor : HamsterSansColor} alt="" className="Hamster" onClick={() => toggleLike("Hamster")} />
            <img src={likedImages.Lapin ? LapinColor : LapinSansColor} alt="" className="Lapin" onClick={() => toggleLike("Lapin")} />
          </div>
        </div>
        <Link to="/Suivant" style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', width: '80%' }}>
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
    </div>
  );
}

export default PopupQuestionnaire;


