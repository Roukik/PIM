import React from 'react'
import Menu from '../components/Menu'
import FondChien from '../assets/fondChien.jpg'
import './Profil'
import '../Pages/Profil.css'
import Fleche from '../assets/fleche.svg'
import PP from '../assets/PP.png'



function Profil() {
  return (
    <div className='ContainerProfil'>
      <Menu></Menu>
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
            <p>Tel : 06 59 33 38 11</p>
            <p>Mail : julienriodejanero@gmail.com</p>
            <p>Résidence : appartement</p>
            <p>Département : île-de-France</p>
            <p>Voir mes préférences</p>
            <button className='mofierLeProfil'>Modifier le Profil</button>
          </div>
        </div>
    </div>
    
  )
}

export default Profil