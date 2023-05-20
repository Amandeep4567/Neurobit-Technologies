import "../styles/CompStyles/channelbox.css";
import React, { useEffect } from "react";
import { useState } from "react";
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
  const [refChannel, setRefChannel] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState([]);

  const handlePrimaryColorChange = (index, event) => {
    const updatedValues = [...primaryChannel];
    updatedValues[index] = event.target.value;
    setPrimaryChannel(updatedValues);
  };

  const handleRefChannelChange = (index, event) => {
    const updatedValues = [...refChannel];
    updatedValues[index] = event.target.value;
    setRefChannel(updatedValues);
  };

  const handleToggleDropdown = (index) => {
    const updatedDropdownOpen = [...dropdownOpen];
    updatedDropdownOpen[index] = !updatedDropdownOpen[index];
    setDropdownOpen(updatedDropdownOpen);
  };

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
                sx={{
                  marginTop: 0,
                  width: 200,
                  height: 42,
                }}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                <MenuItem value="String1">String1</MenuItem>
                <MenuItem value="String2">String2</MenuItem>
                <MenuItem value="String3">String3</MenuItem>
                <MenuItem value="String4">String4</MenuItem>
                <MenuItem value="String5">String5</MenuItem>
                <MenuItem value="String6">String6</MenuItem>
                <MenuItem value="String7">String7</MenuItem>
                <MenuItem value="String8">String8</MenuItem>
                <MenuItem value="String9">String9</MenuItem>
                <MenuItem value="String10">String10</MenuItem>
              </Select>

              <Select
                value={refChannel[index] || ""}
                onChange={(event) => handleRefChannelChange(index, event)}
                sx={{
                  marginTop: 0,
                  width: 200,
                  height: 43,
                }}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                <MenuItem value="String1">String1</MenuItem>
                <MenuItem value="String2">String2</MenuItem>
                <MenuItem value="String3">String3</MenuItem>
                <MenuItem value="String4">String4</MenuItem>
                <MenuItem value="String5">String5</MenuItem>
                <MenuItem value="String6">String6</MenuItem>
                <MenuItem value="String7">String7</MenuItem>
                <MenuItem value="String8">String8</MenuItem>
                <MenuItem value="String9">String9</MenuItem>
                <MenuItem value="String10">String10</MenuItem>
              </Select>

              <Box>
                <Button
                  sx={{ fontSize: "14px" }}
                  onClick={() => handleToggleDropdown(index)}
                >
                  <h4>
                    {dropdownOpen[index]
                      ? "Hide Backup Channels"
                      : "+ Add Backup Channels"}
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
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FormControl sx={{ marginBottom: "10px" }}>
                  <Select
                    sx={{
                      marginTop: 0,
                      width: 200,
                      height: 43,
                    }}
                    labelId={`primary-channel-label-${index}`}
                    value={primaryChannel[index] || ""}
                    onChange={(event) => handlePrimaryColorChange(index, event)}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value="String1">String1</MenuItem>
                    <MenuItem value="String2">String2</MenuItem>
                    <MenuItem value="String3">String3</MenuItem>
                    <MenuItem value="String4">String4</MenuItem>
                    <MenuItem value="String5">String5</MenuItem>
                    <MenuItem value="String6">String6</MenuItem>
                    <MenuItem value="String7">String7</MenuItem>
                    <MenuItem value="String8">String8</MenuItem>
                    <MenuItem value="String9">String9</MenuItem>
                    <MenuItem value="String10">String10</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ marginBottom: "10px" }}>
                  <Select
                    sx={{
                      marginTop: 0,
                      width: 200,
                      height: 43,
                    }}
                    labelId={`ref-channel-label-${index}`}
                    value={refChannel[index] || ""}
                    onChange={(event) => handleRefChannelChange(index, event)}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value="String1">String1</MenuItem>
                    <MenuItem value="String2">String2</MenuItem>
                    <MenuItem value="String3">String3</MenuItem>
                    <MenuItem value="String4">String4</MenuItem>
                    <MenuItem value="String5">String5</MenuItem>
                    <MenuItem value="String6">String6</MenuItem>
                    <MenuItem value="String7">String7</MenuItem>
                    <MenuItem value="String8">String8</MenuItem>
                    <MenuItem value="String9">String9</MenuItem>
                    <MenuItem value="String10">String10</MenuItem>
                  </Select>
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
