import React from 'react'
import '../Pages/Notification.css'
import Fleche from '../assets/fleche.svg'
import Grid from '../components/Grid'
import BarNotif from '../components/BarNotif'


function Notifications() {
  return (
    <div>
      <div className="Container1Notif">
        { <img src={Fleche} alt="" className='arrow' /> }
        <p>Notification</p>
      </div>
      <div className='Container2Notif'>
        <div className='Container3Notif'>
          <BarNotif></BarNotif>
        </div>
      </div>
    </div>
  )
}



export default Notifications

