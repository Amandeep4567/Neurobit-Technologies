import "../styles/CompStyles/channelbox.css";
import React, { useEffect } from "react";
// import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
// import { Box } from "@mui/system";
import {
  Box,
  Button,
  Collapse,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import jsonData from "../data/schema.json";

const ChannelBox = () => {
  useEffect(() => {
    const channelsData = jsonData.channels;
    localStorage.setItem("channelsData", JSON.stringify(channelsData));
  }, []);

  const stoString1Data = localStorage.getItem("channelsData");
  const channelData = JSON.parse(stoString1Data);
  console.log(channelData);

  const [primaryChannel, setPrimaryChannel] = useState([]);
  const [refChannel, setrefChannel] = useState([]);

  const handlePrimaryColorChange = (index, event) => {
    const updatedValues = [...primaryChannel];
    updatedValues[index] = event.target.value;
    setPrimaryChannel(updatedValues);
  };

  const handlerefChannelChange = (index, event) => {
    const updatedValues = [...refChannel];
    updatedValues[index] = event.target.value;
    setrefChannel(updatedValues);
  };

  const [dropdownOpen, setDropdownOpen] = useState([]);
  // const [primaryChannel, setPrimaryChannel] = useState([]);
  // const [refChannel, setRefChannel] = useState([]);

  const handleToggleDropdown = (index) => {
    const updatedDropdownOpen = [...dropdownOpen];
    updatedDropdownOpen[index] = !updatedDropdownOpen[index];
    setDropdownOpen(updatedDropdownOpen);
  };

  // const handlePrimaryChannelChange = (index, event) => {
  //   const updatedValues = [...primaryChannel];
  //   updatedValues[index] = event.target.value;
  //   setPrimaryChannel(updatedValues);
  // };

  // const handleRefChannelChange = (index, event) => {
  //   const updatedValues = [...refChannel];
  //   updatedValues[index] = event.target.value;
  //   setRefChannel(updatedValues);
  // };

  return (
    <div className="map_channels">
      <Box sx={{ marginTop: "30px" }}>
        {channelData.map((channel, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "white",
              marginBottom: "10px",
              paddingTop: "20px",
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>{channel}</h4>

              <Select
                value={primaryChannel[index] || ""}
                onChange={(event) => handlePrimaryColorChange(index, event)}
                placeholder="Select an option"
                sx={{
                  marginTop: 0,
                  width: 250,
                  height: 42,
                }}
              >
                <MenuItem value={1}>String1</MenuItem>
                <MenuItem value={2}>String2</MenuItem>
                <MenuItem value={3}>String3</MenuItem>
                <MenuItem value={4}>String4</MenuItem>
                <MenuItem value={5}>String5</MenuItem>
                <MenuItem value={6}>String6</MenuItem>
                <MenuItem value={7}>String7</MenuItem>
                <MenuItem value={8}>String8</MenuItem>
                <MenuItem value={9}>String9</MenuItem>
                <MenuItem value={10}>String10</MenuItem>
              </Select>

              <Select
                value={refChannel[index] || ""}
                onChange={(event) => handlerefChannelChange(index, event)}
                sx={{
                  marginTop: 0,
                  width: 250,
                  height: 43,
                }}
              >
                <MenuItem value={1}>String1</MenuItem>
                <MenuItem value={2}>String2</MenuItem>
                <MenuItem value={3}>String3</MenuItem>
                <MenuItem value={4}>String4</MenuItem>
                <MenuItem value={5}>String5</MenuItem>
                <MenuItem value={6}>String6</MenuItem>
                <MenuItem value={7}>String7</MenuItem>
                <MenuItem value={8}>String8</MenuItem>
                <MenuItem value={9}>String9</MenuItem>
                <MenuItem value={10}>String10</MenuItem>
              </Select>

              <Box>
                <Button
                  sx={{ fontSize: "14px" }}
                  onClick={() => handleToggleDropdown(index)}
                >
                  <h4>
                    {dropdownOpen[index]
                      ? "Hide Backup Channels"
                      : "+ Add Backup channels"}
                  </h4>
                </Button>
              </Box>
            </Box>
            <Collapse
              sx={{
                marginTop: "20px",
                background: "#F7F7F7",
                borderRadius: "0px 0px 5px 5px",
              }}
              in={dropdownOpen[index]}
            >
              <Box sx={{ marginTop: "10px" }}>
                <FormControl sx={{ marginBottom: "10px" }}>
                  {/* <InputLabel id="primary-channel-label">
                        Primary Channel
                      </InputLabel>
                  <Select
                    labelId="primary-channel-label"
                    value={primaryChannel[index] || ""}
                    onChange={(event) =>
                      handlePrimaryChannelChange(index, event)
                    }
                  >
                    <MenuItem value="channel-1">Channel 1</MenuItem>
                    <MenuItem value="channel-2">Channel 2</MenuItem>
                    <MenuItem value="channel-3">Channel 3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="ref-channel-label">
                        Ref Channel
                      </InputLabel>
                  <Select
                    labelId="ref-channel-label"
                    value={refChannel[index] || ""}
                    onChange={(event) => handleRefChannelChange(index, event)}
                  >
                    <MenuItem value="channel-1">Channel 1</MenuItem>
                    <MenuItem value="channel-2">Channel 2</MenuItem>
                    <MenuItem value="channel-3">Channel 3</MenuItem>
                  </Select> */}
                </FormControl>
              </Box>
            </Collapse>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default ChannelBox;
