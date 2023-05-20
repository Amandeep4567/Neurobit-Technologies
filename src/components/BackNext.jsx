import "../styles/CompStyles/backnext.css";
import React from "react";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const BackNext = () => {
  return (
    <div className="bottom_section">
      <Box
        sx={{
          width: "100%",
          bgcolor: "#ffffff",
          paddingY: "25px",
          paddingX: "20px",
          display: "flex",
          justifyContent: "space-between",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          sx={{ width: "100px", height: "50px", fontSize: "15px" }}
          disabled
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ width: "100px", height: "50px", fontSize: "15px" }}
          href="#contained-buttons"
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default BackNext;
