import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import jsonData from "../data/schema.json";

const PreviewBox = () => {
  const location = useLocation();

  const storedSelectedOptions = localStorage.getItem("selectedOptions");
  const initialSelectedOptions = storedSelectedOptions
    ? JSON.parse(storedSelectedOptions)
    : {};
  const [selectedOptions, setSelectedOptions] = useState(
    initialSelectedOptions
  );

  useEffect(() => {
    const storedSelectedOptions = localStorage.getItem("selectedOptions");
    const initialSelectedOptions = storedSelectedOptions
      ? JSON.parse(storedSelectedOptions)
      : {};
    setSelectedOptions(initialSelectedOptions);
  }, [location]);

  useEffect(() => {
    const channelsData = jsonData.channels;
    localStorage.setItem("channelsData", JSON.stringify(channelsData));
  }, []);

  const storedChannelsData = localStorage.getItem("channelsData");
  const channelData = storedChannelsData ? JSON.parse(storedChannelsData) : [];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#E5F3FF",
          margin: "30px 0px 0px 0px",
          paddingY: " 10px",
          paddingX: "20px",
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ display: "flex", width: "26%" }}>
          <h4>Channel</h4>
        </Typography>
        <Typography sx={{ display: "flex", width: "33%" }}>
          <h4>Primary Channel</h4>
        </Typography>
        <Typography sx={{ display: "flex", width: "30%" }}>
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              paddingX: "20px",
              paddingY: "10px",
            }}
          >
            <h4>
              {channel}
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: "100",
                  color: "#8A8A8A",
                  marginTop: "30px",
                }}
              >
                {selectedOptions[index]?.length > 1 ? "Backup Channels" : ""}
              </Typography>
            </h4>
            <Typography>
              {selectedOptions[index]?.length > 0 && (
                <Box>
                  {selectedOptions[index]?.map((option, optionIndex) => (
                    <Typography
                      sx={{
                        marginTop: 0,
                        width: 200,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        bgcolor: optionIndex > 0 ? "#FAFAFA" : "#EEEEEE",
                        color: optionIndex > 0 ? "#8A8A8A" : "#000000",
                        paddingY: "10px",
                        marginY: "10px",
                      }}
                      key={optionIndex}
                    >
                      <h4>{option.selectOne}</h4>
                    </Typography>
                  ))}
                </Box>
              )}
            </Typography>
            <Typography>
              {selectedOptions[index]?.length > 0 && (
                <Box>
                  {selectedOptions[index]?.map((option, optionIndex) => (
                    <Typography
                      sx={{
                        marginTop: 0,
                        width: 200,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        bgcolor: optionIndex > 0 ? "#FAFAFA" : "#EEEEEE",
                        color: optionIndex > 0 ? "#8A8A8A" : "#000000",
                        paddingY: "10px",
                        marginY: "10px",
                      }}
                      key={optionIndex}
                    >
                      <h4>{option.selectTwo}</h4>
                    </Typography>
                  ))}
                </Box>
              )}
            </Typography>
            <Box sx={{ display: "flex", alignSelf: "center" }}>
              {location.pathname === "/saved-config" ? (
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "13px",
                    padding: "10px",
                  }}
                  disabled
                >
                  Edit Channel
                </Button>
              ) : (
                <Link to="/map-channels">
                  <Button
                    variant="outlined"
                    sx={{
                      fontSize: "13px",
                      padding: "10px",
                    }}
                  >
                    Edit Channel
                  </Button>
                </Link>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PreviewBox;
