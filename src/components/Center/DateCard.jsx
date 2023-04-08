import React from 'react'

const DateCard = ({date,month,color}) => {
  return (
    
    <div style={{  backgroundColor:"black", borderRadius:"18px"}}>
        <p style={{fontSize:"24px",fontWeight:"bold", padding:"10px 24px" , margin:"0px"}}>{date}</p>
        <p>{month}</p>
  
    </div>
  )
}

export default DateCard