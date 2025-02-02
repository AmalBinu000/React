import React from 'react'
import ProfilePic from '../assets/profile.jpg'
import '../index.css'

function Profile() {
  return (
    <div className='card'>
        <img src={ProfilePic} alt="Profile pic" className='card-img'/>
        <h1 className='card-title'>Amal Binu</h1>
        <p>I am a Frontend developer</p>
    </div>
  )
}

export default Profile