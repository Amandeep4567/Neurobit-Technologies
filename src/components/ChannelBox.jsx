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
import stringsData from "../data/string.json";

const ChannelBox = () => {
  useEffect(() => {
    const channelsData = jsonData.channels;
    localStorage.setItem("channelsData", JSON.stringify(channelsData));
  }, []);
  const stoString1Data = localStorage.getItem("channelsData");
  const channelData = JSON.parse(stoString1Data);
  console.log(channelData);

  useEffect(() => {
    const stringData = stringsData.strings;
    localStorage.setItem("stringData", JSON.stringify(stringData));
  }, []);
  const storeStringData = localStorage.getItem("stringData");
  const dropdownData = JSON.parse(storeStringData);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    setDropdownValue(selectedOption); // setting selected option
  };

  const handleAddOption = () => {
    if (dropdownValue && !selectedOptions.includes(dropdownValue)) {
      setSelectedOptions([...selectedOptions, dropdownValue]); // adding the selected option to array
      setDropdownValue(""); // resetting selected option
    }
  };

  const [dropdownOpen, setDropdownOpen] = useState([]);

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
              backgroundColor: "#ffffff",
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
                sx={{
                  marginTop: 0,
                  width: 200,
                  height: 42,
                }}
                displayEmpty
                value={dropdownValue}
                onChange={handleDropdownChange}
              >
                <option value="">Select an option</option>
                {dropdownData.map((str) => (
                  <MenuItem key={str} value={str}>
                    {str}
                  </MenuItem>
                ))}
              </Select>

              <Box>
                <Button
                  sx={{ fontSize: "14px" }}
                  onClick={(e) => {
                    handleToggleDropdown(index);
                  }}
                >
                  <h4>
                    {dropdownOpen[index]
                      ? `Hide Backup Channels(${selectedOptions.length})`
                      : selectedOptions.length === 0
                      ? "+ Add Backup Channels"
                      : selectedOptions.length > 0
                      ? `View backup channels(${selectedOptions.length})`
                      : ""}
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
              <div>
                <div>
                  <h3>Selected Options:</h3>
                  {selectedOptions.length === 0 && <p>No options selected.</p>}
                  {selectedOptions.map((str) => (
                    <p key={str}>{str}</p>
                  ))}
                </div>
              </div>
              <Button sx={{ fontSize: "14px" }} onClick={handleAddOption}>
                <h4>+ Add Backup Channels</h4>
              </Button>
            </Collapse>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default ChannelBox;

// - Create on JSON to generate all channels
// - create a dropdown menu componenet, with selected value as prop
// - create a box component
// - put dropdown inside box component
// - create collapse component
// - put it inside box componenet
// - take a prop from box to render ;
// -
