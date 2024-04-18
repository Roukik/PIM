import React from 'react'
import Menu from '../components/Menu'
import '../Pages/Notification.css'
import Fleche from '../assets/fleche.svg'

function Notifications() {
  return (
    <div>
      <Menu></Menu>
      <div className="Container1Notif">
        { <img src={Fleche} alt="" className='arrow' /> }
        <p>Notification</p>
      </div>
      <div className='Container2Notif'>
        <div className='Container3Notif'>
          <p>All</p>
          <p>Mark all as read</p>
        </div>
        <div className='Container4Notif'>
          <div className="Notif1">
            <p>,vfnnf</p>
          </div>
          <div className="Notif2">
            <p>,vfnnf</p>
          </div>
          <div className="Notif3">
            <p>,vfnnf</p>
          </div>
          <div className="Notif4">
            <p>,vfnnf</p>
          </div>
          <div className="Notif5">
            <p>,vfnnf</p>
          </div>
          <div className="Notif6">
            <p>,vfnnf</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications