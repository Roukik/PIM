import React from 'react'
import Fleche from '../assets/fleche.svg'
import '../Descriptions/SDes.css'
import Scoopie from '../assets/scoopie.svg'
import ScoopieCard from '../components/ScoopieCard'
import ScoopieDescription from '../assets/DescriptionScoopie.png'
import { Link } from 'react-router-dom'

function SDes() {
  return (
    <div className="container">
      <div className="Container1Description">
        <img src={Fleche} alt="" className='arrow' />
        <p>Description</p>
      </div>
      <div className="Container2Description">
        <img src={Scoopie} alt="" className='scoopie' />
        <div className="Container3Description">
          <ScoopieCard></ScoopieCard>
          <img src={ScoopieDescription} alt="" className='scoopieDescription' />
          <Link to="/PageRefuge">
          <button className='btnRVD'>Rencontre-moi !</button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default SDes
