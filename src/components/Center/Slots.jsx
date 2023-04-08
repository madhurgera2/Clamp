import React from "react";
import { BiBorderRadius } from "react-icons/bi";
import DateCard from "./DateCard";
const Slots = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", color:"white" , padding:"25px", display:"flex",flexDirection:"column" ,gap:"22px" }}>

      <div style={{display:"flex",  gap:"20px" , alignItems:"Center", justifyContent:"space-around"}}>
        <div>     
        <p style={{fontSize:"18px", fontWeight:"bold"}}>Free Slots Available</p>
      </div>

          <div style={{backgroundColor:"black", width:"20px", height:"6px"}}>
        <div style={{backgroundColor:"#3827B1", width:"10px", height:"12px"  ,borderRadius:"100px"}}></div>
      </div>

</div>

      <div style={{display:"flex" , flexDirection:"column", gap:"12px"}}   >
        <div style={{display:"flex", gap:"12px", flexWrap:"warp", justifyContent:"center"}} >
              <div style={{  backgroundColor:"black", borderRadius:"18px", backgroundColor:"#E95C64"}}>
        <p style={{fontSize:"24px",fontWeight:"bold", padding:"10px 24px" , margin:"0px"}}>20</p>
        <p>June</p>
  
    </div>
          <DateCard date="12" month="June"/>
          <DateCard date="12" month="June"/>
        </div>
        <div style={{display:"flex",gap:"12px", flexWrap:"warp", justifyContent:"center"}} >
          <DateCard date="12" month="July" color="1"/>
          <DateCard date="12" month="July" color="1"/>
          <DateCard date="12" month="July" color="1"/>
        </div>
      </div>

    </div>
  );
};

export default Slots;
