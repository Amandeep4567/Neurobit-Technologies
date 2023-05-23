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
  Typography,
  Checkbox,
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
    const optionsData = jsonData.optionals;
    localStorage.setItem("optionsData", JSON.stringify(optionsData));
  }, []);

  const storedOptionData = localStorage.getItem("optionsData");
  const optionData = storedOptionData ? JSON.parse(storedOptionData) : [];
  console.log(optionData);

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

  const handleDeleteData = (channelIndex, optionIndex) => {
    const updatedSelectedOptions = { ...selectedOptions };
    const channelOptions = updatedSelectedOptions[channelIndex];
    if (channelOptions && channelOptions.length > optionIndex) {
      channelOptions.splice(optionIndex, 1); // Remove the specific option from the array
      setSelectedOptions(updatedSelectedOptions);
    }
  };

  return (
    <div className="map_channels">
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
                <option value="">Select Channel</option>
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
                  {/* {selectedOptions[index]?.length === 0 && (
                    <p>Select Channel</p>
                  )} */}
                  {selectedOptions[index]?.map((option, optionIndex) => (
                    <p key={optionIndex}>
                      {option.selectOne} {option.selectTwo}
                      <Button
                        onClick={() => handleDeleteData(index, optionIndex)}
                      >
                        Delete
                      </Button>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#ffffff",
          marginTop: "30px",
          paddingY: "20px",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h4>Additional Settings</h4>
        </Typography>
        {optionData.map((option, index) => (
          <Box sx={{ display: "flex", alignItems: "center" }} key={index}>
            {option.optional1 && (
              <h4>
                <Checkbox defaultChecked />
                Optional 1{/* {option.optional1.toString()} */}
              </h4>
            )}
            {option.optional2 && (
              <h4>
                <Checkbox defaultChecked />
                Optional 2{/* {option.optional2.toString()} */}
              </h4>
            )}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default ChannelBox;
