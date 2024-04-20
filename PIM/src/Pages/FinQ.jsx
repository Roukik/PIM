import React from 'react'
import FondFin from '../assets/FondFin.png'
import '.'

function FinQ() {
  return (
    <div className='Contenu'>
      { <img src={FondFin} alt="" className='fondfin' /> }
    </div>
  )
}

export default FinQ