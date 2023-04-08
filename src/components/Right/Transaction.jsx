import React from "react";
import { VscAccount } from "react-icons/vsc";
import { BiBorderRadius, BiRightArrowCircle } from "react-icons/bi";
const Transaction = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", color: 'white', textAlign: 'start', padding: 25, borderRadius:"18px"}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <p style={{fontWeight:"bold", fontSize:"20px", padding: 0, margin: 0, marginTop: 12}}>Transaction Detail</p>
          <p style={{padding: 0, margin:0}}>Hi Hira</p>
        </div>
        <div style={{padding: 25}}>
          <VscAccount size={40} />
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <p style={{fontWeight:"bold", fontSize:"20px", padding: 0, margin: 0}}>$4,763.40</p>
          <p style={{padding: 0, margin:0}}>Available Balance</p>
        </div>
        <div style={{marginRight: 18}}>
          <p>....3863</p>
        </div>
      </div>
      <div style={{marginTop: 25, justifyContent: 'space-between', display: 'flex', width: 220}}>
        <BiRightArrowCircle size={25}/>
        <VscAccount size={25}/>
        <VscAccount size={25}/>
        <VscAccount size={25}/>
        <VscAccount size={25}/>
      </div>
      <div style={{alignItems: 'end', marginLeft: 320, background: '#E95C64', textAlign: 'center', borderRadius: 18, padding: 8, marginTop: 25, width: 80}}>Send</div>
    </div>
  );
};

export default Transaction;
