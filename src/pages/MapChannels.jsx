import "../styles/pageStyles/mapchannels.css";
import React, { useState } from "react";
import { Sidebar } from "../components";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import { Stepper, BackNext, ChannelBox } from "../components/index";

const drawerWidth = 240;

const MapChannels = () => {
  // const [disable, setDisable] = useState[""];
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
            <Stepper stepvalue="1" />
            <ChannelBox />
            <BackNext backlink="/" forwardlink="/map-channels" />

            <Toolbar />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default MapChannels;
