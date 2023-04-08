import React from "react";

const Revenue = () => {
  return (
    <div style={{ borderRadius:"20px", display:"flex" , textAlign:"left", gap:"20px", color:"white", alignItems:"center", padding:"30px", backgroundColor: "#1B1B1C" }}>
      <div>
      <p style={{padding:"12px 16px", backgroundColor:"black", borderRadius:"50px"}}>$</p>
      </div>
      <div style={{display:"flex", flexDirection:"column" , gap:"10px"}}>
      <div style={{display:"flex", flexDirection:"column" , gap:"10px"}}>
        <p style={{
          margin:"0px"
        }}>Total Revenue</p>
        <p style={{ fontSize:"20px", margin:"0px", fontWeight:"bold", }}>$92,983</p>
      </div>
      <div style={{backgroundColor:"white", width:"100px", height:"6px"}}>
        <div style={{backgroundColor:"#3827B1", width:"60px", height:"6px"}}></div>
      </div>
      </div>
    </div>

  );
};

export default Revenue;
