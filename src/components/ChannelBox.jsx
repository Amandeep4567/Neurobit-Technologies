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

  const storedData = localStorage.getItem("channelsData");
  const channelData = JSON.parse(storedData);
  console.log(channelData);

  const [primaryColor, setPrimaryColor] = useState([]);
  const [refColor, setRefColor] = useState([]);

  const handlePrimaryColorChange = (index, event) => {
    const updatedValues = [...primaryColor];
    updatedValues[index] = event.target.value;
    setPrimaryColor(updatedValues);
  };

  const handleRefColorChange = (index, event) => {
    const updatedValues = [...refColor];
    updatedValues[index] = event.target.value;
    setRefColor(updatedValues);
  };

  const [dropdownOpen, setDropdownOpen] = useState([]);
  const [primaryChannel, setPrimaryChannel] = useState([]);
  const [refChannel, setRefChannel] = useState([]);

  const handleToggleDropdown = (index) => {
    const updatedDropdownOpen = [...dropdownOpen];
    updatedDropdownOpen[index] = !updatedDropdownOpen[index];
    setDropdownOpen(updatedDropdownOpen);
  };

  const handlePrimaryChannelChange = (index, event) => {
    const updatedValues = [...primaryChannel];
    updatedValues[index] = event.target.value;
    setPrimaryChannel(updatedValues);
  };

  const handleRefChannelChange = (index, event) => {
    const updatedValues = [...refChannel];
    updatedValues[index] = event.target.value;
    setRefChannel(updatedValues);
  };

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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {channel}

              <Select
                value={primaryColor[index] || ""}
                onChange={(event) => handlePrimaryColorChange(index, event)}
                sx={{
                  marginTop: 0,
                  width: 200,
                  height: 43,
                }}
              >
                <MenuItem value={1}>Red</MenuItem>
                <MenuItem value={2}>Black</MenuItem>
                <MenuItem value={3}>Blue</MenuItem>
                <MenuItem value={4}>Green</MenuItem>
                <MenuItem value={5}>Yellow</MenuItem>
              </Select>

              <Select
                value={refColor[index] || ""}
                onChange={(event) => handleRefColorChange(index, event)}
                sx={{
                  marginTop: 0,
                  width: 200,
                  height: 43,
                }}
              >
                <MenuItem value={1}>Red</MenuItem>
                <MenuItem value={2}>Black</MenuItem>
                <MenuItem value={3}>Blue</MenuItem>
                <MenuItem value={4}>Green</MenuItem>
                <MenuItem value={5}>Yellow</MenuItem>
              </Select>
              <Box>
                <Button
                  sx={{ fontSize: "14px" }}
                  onClick={() => handleToggleDropdown(index)}
                >
                  {dropdownOpen[index]
                    ? "Hide Backup Channels"
                    : "Add Backup channels"}
                </Button>
                <Collapse in={dropdownOpen[index]}>
                  <Box sx={{ marginTop: "10px" }}>
                    <FormControl sx={{ marginBottom: "10px" }}>
                      <InputLabel id="primary-channel-label">
                        Primary Channel
                      </InputLabel>
                      <Select
                        labelId="primary-channel-label"
                        value={primaryColor[index] || ""}
                        onChange={(event) =>
                          handlePrimaryColorChange(index, event)
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
                        value={refColor[index] || ""}
                        onChange={(event) => handleRefColorChange(index, event)}
                      >
                        <MenuItem value="channel-1">Channel 1</MenuItem>
                        <MenuItem value="channel-2">Channel 2</MenuItem>
                        <MenuItem value="channel-3">Channel 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Collapse>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default ChannelBox;
