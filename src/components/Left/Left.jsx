import React from 'react'
import Profile from './Profile'
import Navbar from './Navbar'
import Pro from './Pro'
const Left = () => {
  return (
    <div style={{display:"flex", flexDirection:"column",gap:"10px"}}>
        <Profile/>
        <Navbar/>
        <Pro/>
    </div>
  )
}

export default Left 