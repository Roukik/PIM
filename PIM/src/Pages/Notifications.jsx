import React from 'react'
import Menu from '../components/Menu'
import '../Pages/Notification.css'
import Fleche from '../assets/fleche.svg'
import Grid from '../components/Grid'


function Notifications() {
  return (
    <div>
    
      <div className="Container1Notif">
        { <img src={Fleche} alt="" className='arrow' /> }
        <p>Notification</p>
      </div>
      <div className='Container2Notif'>
        <div className='Container3Notif'>
          <p>Toutes</p>
          <p>Non lu</p>
        </div>
        <div className='Container4Notif'>
        <Grid></Grid>
        </div>
      </div>
    </div>
  )
}



export default Notifications

