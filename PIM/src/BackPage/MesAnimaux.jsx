import React from 'react';
import Fleche from '../assets/fleche.svg';
import AddIcon from '@mui/icons-material/Add'; 
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'; 
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'; 
import { Link } from 'react-router-dom';
import Animaux from '../assets/MesAnimaux.png';

function MesAnimaux() {
  return (
    <div className='containerMA'>
      <div className="Container1Description">
        <img src={Fleche} alt="" className='arrow' />
        <p>Mes animaux</p>
      </div>
      <div className="IconGroup">
        <Link to="/Ajoutanimaux">   
          <AddIcon className='plusIcon' />
        </Link>
        <EditOutlinedIcon className='crayonIcon' />
        <DeleteOutlinedIcon className='poubelleIcon' />
      </div>


      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px' }}>

        <img src={Animaux} alt="" className='animaux' style={{ marginRight: '5px' }} />
      </div>
    </div>
  );
}

export default MesAnimaux;


