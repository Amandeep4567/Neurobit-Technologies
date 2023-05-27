import React from "react";
import { Sidebar } from "../components";
import { Box } from "@mui/system";
import { Toolbar, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { Stepper, PreviewBox } from "../components/index";

const drawerWidth = 240;

const SavedConfig = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "100px",
        }}
      >
        <Box sx={{ display: "flex", bgcolor: "#F1FFF7", padding: "32px" }}>
          <DoneIcon
            sx={{
              color: "#ffffff",
              bgcolor: "#10A44B",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
          <Box sx={{ paddingX: "40px" }}>
            <Typography sx={{ color: "#10A44B", fontSize: "18px" }}>
              Channels Configured
            </Typography>
            <Typography sx={{ color: "#6D6D6D", fontSize: "15px" }}>
              Channels configured successfully.{" "}
            </Typography>
          </Box>
          <ClearIcon sx={{ color: "#6D6D6D" }} />
        </Box>
      </Box>
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
            <Stepper stepvalue="3" />
            <PreviewBox />

            <Toolbar />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SavedConfig;
