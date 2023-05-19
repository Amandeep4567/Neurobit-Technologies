import "../styles/CompStyles/stepper.css";
import icon from "../assets/icon.png";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Upload EDFs", "Map Channels", "Save & Preview"];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <div>
      <div className="upper_box">
        <h2>Test_Study</h2>
        <div className="upper_name">
          <img src={icon} alt="" />
          <h5>Amandeep Kumar</h5>
        </div>
      </div>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#ffffff",
          paddingY: "20px",
          borderRadius: "8px",
        }}
      >
        <Stepper alternativeLabel>
          {steps.map((label) => (
            <Step className="circle" key={label}>
              <StepLabel sx={{ fontSize: "1.2rem" }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
