import React from "react";
import Wing from './My project-1.png'
// import RiArrowDropDownLine from 'react-icons/ri'
const Client = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", color: 'white', display: 'flex', gap: 10, borderRadius:"18px"}}>
      <div>
        <img src={Wing} alt="wing img" height='130px' width='130px'/>
      </div>
      <div style={{textAlign: 'start', marginTop: 15 }}>
        <p style={{fontWeight:"bold", fontSize:"20px"}}>Dear Client</p>
        <p>Join our online community.It helps<br/>in managing your projects</p>
      </div>
      <div>
        <i class="fa fa-angle-down" style={{ fontSize : 28, margin: 10 }}></i>
      </div>
    </div>
  );
};

export default Client;
