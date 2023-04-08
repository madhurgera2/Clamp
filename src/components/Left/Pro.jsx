import React from 'react'
import Center from '../Center/Center';

const Pro = () => {
  return (
    <div style={{ display:"flex",alignItems:"flex-end", justifyContent:"center",  flexDirection:"column", backgroundColor:"#3827B1",color: "white", padding: "30px"}}>
      <div style={{
        textAlign:"left"
      }}>
        <p style={{
        fontSize:"24px"
      }}>Go Pro</p>
        <p style={{
          lineHeight:"28px"
        }} >Upgrade your plans to<br></br> get pro benifits</p>
      </div>
      
        <div style={{backgroundColor:"black",  fontSize:"14px", borderRadius:"50px 0px 50px 50px",padding:"8px 12px"}}>Let's Start
      </div>
    </div>
  )
}

export default Pro;