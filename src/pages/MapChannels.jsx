import "../styles/pageStyles/mapchannels.css";
import React, { useState } from "react";
import { Sidebar } from "../components";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import { Stepper, BackNext, ChannelBox } from "../components/index";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const MapChannels = () => {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    // Navigate to the preview page
    navigate("/preview-config");
  };
  return (
    <div>
      <Sidebar />
      <div className="models">
        <Box sx={{ display: "flex" }}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Stepper stepvalue="2" />
            <ChannelBox />
            <BackNext
              backlink="/"
              stepvalue="1"
              forwardlink="/preview-config"
              onClick={handleNextButtonClick}
            />

            <Toolbar />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default MapChannels;
