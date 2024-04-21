import React from 'react'
import FondChien from '../assets/fondChien.jpg'
import './Profil'
import '../Pages/Profil.css'
import Fleche from '../assets/fleche.svg'
import PP from '../assets/PP.png'
import InfosProfil from '../components/InfosProfil'


function Profil() {
  return (
    <div className='ContainerProfil'>
        { <img src={FondChien} alt="" className='fond' /> }
        <div className='block1'>

          <div className='Container1'>
            <img src={Fleche} alt="" className='arrow' />
            <p>Profil</p>
          </div>

          <div className="Container2">
            { <img src={PP} alt="" srcset="" className='PP' /> }
          </div>

          <div className="Container3">
            <p>Julien Rio</p>
            <p>32 ans</p>
          </div>

          <div className='Container4'>
            <InfosProfil></InfosProfil>
            <button className='mofierLeProfil'>Modifier le Profil</button>
          </div>
        </div>
    </div>
    
  )
}

export default Profil