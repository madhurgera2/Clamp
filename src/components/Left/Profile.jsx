import React from "react";

const Profile = () => {
  return (
    <div
      style={{
        backgroundColor: "#1B1B1C",
        padding: "25px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h3 style={{ margin: "0px", color: "#E95C64" }}>Hira R.</h3>
      <p style={{ fontWeight: "100" }}>UI/UX Designer</p>
      <div style={{ display: "flex", flexDirection: "row", gap:"50px", marginTop: 30 }}>
        <div>
          <p style={{fontWeight:"bold"}}>125</p>
          <p>Projects</p>
        </div>
        <div>
          <p style={{fontWeight:"bold"}}>$125</p>
          <p>Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
