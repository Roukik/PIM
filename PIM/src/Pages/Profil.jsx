import React from 'react'
import Menu from '../components/Menu'
import FondChien from '../assets/fondChien.jpg'
import './Profil'
import '../Pages/Profil.css'
import Fleche from '../assets/fleche.svg'



function Profil() {
  return (
    <div className='ContainerProfil'>
      <Menu></Menu>
        { <img src={FondChien} alt="" className='fond' /> }
        <div className='block1'>
          <div className=''>
            <img src={Fleche} alt="" className='arrow' />
            <p>Profil</p>
          </div>
          <div className='block2'>

          </div>
        </div>
    </div>
    
  )
}

export default Profil