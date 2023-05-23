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

  const storedChannelsData = localStorage.getItem("channelsData");
  const channelData = storedChannelsData ? JSON.parse(storedChannelsData) : [];
  console.log(channelData);

  useEffect(() => {
    const stringData = stringsData.strings;
    localStorage.setItem("stringData", JSON.stringify(stringData));
  }, []);
  const storedStringData = localStorage.getItem("stringData");
  const dropdownData = JSON.parse(storedStringData);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownValues, setDropdownValues] = useState(
    Array(channelData.length).fill("")
  );
  const [dropdownValuesTwo, setDropdownValuesTwo] = useState(
    Array(channelData.length).fill("")
  );

  const handleDropdownChange = (event, index) => {
    const selectedOption = event.target.value;
    const updatedDropdownValues = [...dropdownValues];
    updatedDropdownValues[index] = selectedOption;
    setDropdownValues(updatedDropdownValues);
  };

  const handleDropdownChangeTwo = (event, index) => {
    const selectedOption = event.target.value;
    const updatedDropdownValuesTwo = [...dropdownValuesTwo];
    updatedDropdownValuesTwo[index] = selectedOption;
    setDropdownValuesTwo(updatedDropdownValuesTwo);
  };

  const handleAddOption = (index) => {
    const selectedOption = dropdownValues[index];
    const selectedOptionTwo = dropdownValuesTwo[index];

    if (
      selectedOption &&
      selectedOptionTwo &&
      !selectedOptions[index]?.some(
        (option) =>
          option.selectOne === selectedOption &&
          option.selectTwo === selectedOptionTwo
      )
    ) {
      const updatedSelectedOptions = { ...selectedOptions };
      updatedSelectedOptions[index] = [
        ...(selectedOptions[index] || []),
        { selectOne: selectedOption, selectTwo: selectedOptionTwo },
      ];
      setSelectedOptions(updatedSelectedOptions);

      const updatedDropdownValues = [...dropdownValues];
      updatedDropdownValues[index] = ""; // Resetting the first select component
      setDropdownValues(updatedDropdownValues);

      const updatedDropdownValuesTwo = [...dropdownValuesTwo];
      updatedDropdownValuesTwo[index] = ""; // Resetting the second select component
      setDropdownValuesTwo(updatedDropdownValuesTwo);
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
                value={dropdownValues[index]}
                onChange={(event) => handleDropdownChange(event, index)}
              >
                <option value="">Select an option</option>
                {dropdownData.map((str) => (
                  <MenuItem key={str} value={str}>
                    {str}
                  </MenuItem>
                ))}
              </Select>
              <Select
                sx={{
                  marginTop: 0,
                  width: 200,
                  height: 42,
                }}
                displayEmpty
                value={dropdownValuesTwo[index]}
                onChange={(event) => handleDropdownChangeTwo(event, index)}
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
                    {dropdownOpen[index] ? (
                      `Hide Backup Channels (${
                        selectedOptions[index]?.length || 0
                      })`
                    ) : (
                      <>
                        {selectedOptions[index]?.length || 0
                          ? `View Backup Channels (${
                              selectedOptions[index]?.length || 0
                            })`
                          : "+ Add Backup Channels"}
                      </>
                    )}
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
                  {selectedOptions[index]?.length === 0 && (
                    <p>No options selected.</p>
                  )}
                  {selectedOptions[index]?.map((option, optionIndex) => (
                    <p key={optionIndex}>
                      {option.selectOne} {option.selectTwo}
                    </p>
                  ))}
                </div>
              </div>
              <Button
                sx={{ fontSize: "14px" }}
                onClick={() => handleAddOption(index)}
              >
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
