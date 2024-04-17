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

          <dic className="Container3">
            <p>Julien Rio</p>
            <p>32 ans</p>
          </dic>
          
          <div className='block2'>

          </div>
        </div>
    </div>
    
  )
}

export default Profil