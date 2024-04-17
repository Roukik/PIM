import React from 'react'
import Menu from '../components/Menu'
import FondChien from '../assets/fondChien.jpg'



function Profil() {
  return (
    <div>
      <Menu></Menu>
      <body>
        { <img src={FondChien} alt="" className='Fond' /> }
        <div className='block1'>

        </div>
      </body>
    </div>
  )
}

export default Profil