import React from "react";
import { VscAccount } from "react-icons/vsc";
const TripCard = ({ cardName, cardDetail, numberOfIcons }) => {
  return (
    <div style={{ backgroundColor: "#1B1B1C" , color:"white", textAlign:"left" , padding:"20px" , borderRadius:"20px" }}>
      <p style={{
        fontWeight:"bold", fontSize:"18px"
      }} >{cardName}</p>
      <p style={{
       fontSize:"14px"
      }} >{cardDetail}</p>
      <p style={{
       fontSize:"10px"
      }}  >Seen By</p>
      <div style={{margin:"10px 0px"}}>
        <VscAccount style={{marginRight:"-6px" ,fill:"orange"  }} />
        <VscAccount style={{marginRight:"-6px" ,fill:"yellow"  }}/>
        <VscAccount style={{marginRight:"-6px", fill:"orange"}} />
        <VscAccount style={{marginRight:"-6px", fill:"pink"}} />
      </div>
      <div style={{display:"flex", flexDirection:"column" , gap:"12px"}}>
      <div style={{display:"flex", gap:"12px"}}>
        <div style={{fontSize:"12px", backgroundColor:"#3827B1", padding:"6px 16px" ,borderRadius:"80px" }}>Tour</div>
        <div style={{ fontSize:"12px",backgroundColor:"black", padding:"6px 16px" ,borderRadius:"80px" }} >Trip</div>
      </div>
      <div style={{fontSize:"12px", backgroundColor:"black", padding:"6px 16px" ,borderRadius:"80px", width:"45%" }} >Transport</div></div>
    </div>
  );
};

export default TripCard;
