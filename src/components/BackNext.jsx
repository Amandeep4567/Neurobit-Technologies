import "../styles/CompStyles/backnext.css";
import React from "react";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BackNext = (props) => {
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
        }}
      >
        <Link to={props.backlink}>
          <Button
            variant="outlined"
            sx={{ width: "100px", height: "50px", fontSize: "15px" }}
          >
            Back
          </Button>
        </Link>
        <Link to={props.forwardlink}>
          <Button
            variant="contained"
            sx={{
              width: "100px",
              height: "50px",
              fontSize: "15px",
              backgroundColor: props.stepvalue === "2" ? "#10A44B" : "#2F7EC7",
            }}
            className={props.stepvalue === "2" ? "save-button" : ""}
          >
            {props.stepvalue === "2" ? "Save" : "Next"}
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default BackNext;
