import React from 'react'
import Fleche from '../assets/fleche.svg'
import '../Pages/PageRegufe.css'
import Refugeimg from '../assets/ScootieMagelan.png'
import RefugeCard from '../components/RefugeCard'
import DesRefuge from '../assets/DesRefuge.png'




function PageRefuge() {
  return (
    <div className='Container'>
        <div className="Container1Refuge">
            <img src={Fleche} alt="" className='arrow' />
           <p>Description</p>
        </div>
        <div className="Containe2Refuge">
          <img src={Refugeimg} alt="" className='Refugeimg'/>
          <div className="Container3Refuge">
            <RefugeCard></RefugeCard>
            <img src={DesRefuge} alt="" className='DesRefuge' />
              <button className='btnRVD'>Rencontre-nous !</button>
          </div>
        </div>
    </div>
  )
}

export default PageRefuge