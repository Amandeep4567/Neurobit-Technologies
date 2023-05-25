import React from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { useEffect } from "react";
import EditButton from "./EditButton";
import jsonData from "../data/schema.json";

const PreviewBox = () => {
  useEffect(() => {
    const channelsData = jsonData.channels;
    localStorage.setItem("channelsData", JSON.stringify(channelsData));
  }, []);

  const storedChannelsData = localStorage.getItem("channelsData");
  const channelData = storedChannelsData ? JSON.parse(storedChannelsData) : [];
  console.log(channelData);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#E5F3FF",
          margin: "30px 0px 0px 0px",
          paddingY: "10px",
          paddingX: "5px",
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ display: "flex", paddingLeft: "0px" }}>
          <h4>Channel</h4>
        </Typography>
        <Typography sx={{ display: "flex", paddingLeft: "6%" }}>
          <h4>Primary Channel</h4>
        </Typography>
        <Typography sx={{ display: "flex", paddingLeft: "6%" }}>
          <h4>Reference Channel</h4>
        </Typography>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        {channelData.map((channel, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#ffffff",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            {channel}
            <>
              <EditButton backlink="/map-channels" />
            </>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PreviewBox;
