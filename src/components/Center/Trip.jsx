import React from 'react'
import TripCard from './TripCard'
const Trip = () => {
  return (
    <div style={{display:"flex",gap:"10px"}}>
      <TripCard
      cardName="Travel"
      cardDetail="Mobile Application"
      numberOfIcons="3"
       />
      <TripCard
      cardName="Hotel"
      cardDetail="Dashboard"
      numberOfIcons="3"
      />
    </div>
  )
}

export default Trip