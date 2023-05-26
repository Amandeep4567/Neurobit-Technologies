import React from "react";
import { Sidebar, Stepper, DropdownBox, BackNext } from "../components";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import "../styles/pageStyles/homepage.css";

const drawerWidth = 240;

const Homepage = () => {
  return (
    <div>
      <div className="homepage">
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
              <Stepper stepvalue="0" />
              <DropdownBox />
              <BackNext
                backlink="/"
                forwardlink="/map-channels"
                stepvalue="0"
              />

              <Toolbar />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
