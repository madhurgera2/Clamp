import React from "react";
import { RiFolderShield2Line } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { SlCalender } from 'react-icons/sl';
import { VscGraph  } from "react-icons/vsc";
import { FaWpforms  } from "react-icons/fa";
const navbar = () => {
  return (
    <div
      style={{ backgroundColor: "#1B1B1C", color: "white", padding: "30px" }}
    >
      <ul style={{display:"flex" , flexDirection:"column" ,  listStyle: "none", padding: "0px" , gap:"16px"}}>
        <li style={{ display: "flex", alignItems: "flex-start",   alignItems: "center" , gap:"12px", fontWeight:"600"}}>
          <RiFolderShield2Line style={{ borderRadius:"9px", padding:"10px",  backgroundColor: "black" ,   alignItems: "center" }} />
          <span>Dashboard</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap:"12px" }}>
          <GoMail style={{ padding:"10px"}} />
          <span>Email</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap:"12px" }}>
          <SlCalender style={{ padding:"10px"}} />
          <span>Calender</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap:"12px" }}>
          <VscGraph style={{ padding:"10px"}} />
          <span>Graphs</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap:"12px" }}>
          <FaWpforms style={{ padding:"10px"}}/>
          <span>Forms</span>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
