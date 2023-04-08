import React from "react";
// import CiMenuKebab from "react-icons/ci";

const ProjectDetails = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", textAlign: 'start', color: 'white', padding: 25, width: '50%', borderRadius:"18px"}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Project Details</div>
            <div ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg></div>
          </div>
          <h4 style={{ margin: "3px", color: "#E95C64" }}>Hira R.</h4>
          <p>UX/UI Designer</p>
          <p>Projects Progress</p>
          <p style={{textAlign: 'end'}}>75%</p>
          <div class="w3-light-grey w3-xxlarge" style={{borderRadius: 20}}>
            <div class="w3-container w3-xxlarge w3-blue w3-round-large" style={{width:'75%', height: 10, borderRadius: 50}}></div>
          </div>
    </div>
  );
};

export default ProjectDetails;
