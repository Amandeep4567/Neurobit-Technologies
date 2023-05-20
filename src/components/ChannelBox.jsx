import React, { useEffect } from "react";
import { Box } from "@mui/system";
import jsonData from "../data/schema.json";

const ChannelBox = () => {
  useEffect(() => {
    const channelsData = jsonData.channels;
    localStorage.setItem("channelsData", JSON.stringify(channelsData));
  }, []);
  //   console.log(jsonData);

  const storedData = localStorage.getItem("channelsData");
  const channelData = JSON.parse(storedData);
  console.log(channelData);
  return (
    <div>
      <Box sx={{ marginTop: "30px" }}>
        {channelData.map((channel, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "white",
              marginBottom: "10px",
              paddingY: "10px",
            }}
          >
            {channel}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default ChannelBox;
