import React from "react";
import { Sidebar } from "../components";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import { Stepper, BackNext, PreviewBox } from "../components/index";

const drawerWidth = 240;

const PreviewConfig = () => {
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
            <PreviewBox />
            <BackNext
              backlink="/map-channels"
              forwardlink="/saved-config"
              stepvalue="2"
            />

            <Toolbar />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PreviewConfig;
