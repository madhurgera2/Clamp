import React from "react";
// import CiMenuKebab from "react-icons/ci";
// import './progress.css'
import { Box, CircularProgress, Typography } from "@mui/material";
import PropTypes from 'prop-types';

function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} size={100} />
        <Box
          sx={{
            top: 20,
            left: 20,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E95C64',
            borderRadius: "50%",
            height: 60,
            width: 60,
          }}
        >
          <Typography variant="caption" component="div" color="white">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
  };

const ProjectProgress = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", textAlign: 'start', color: 'white',  width: '50%', padding: 25, borderRadius:"18px"}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Projects Progress</div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
            </div>
        </div>
        <div className="body" style={{margin: 25}}>
            <CircularProgressWithLabel value={75} />
        </div>
        <div>
            <p>3 remaining projects</p>
        </div>
    </div>
  );
};

export default ProjectProgress;
