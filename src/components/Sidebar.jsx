import "../styles/CompStyles/sidebar.css";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { bgcolor, fontSize, height, textAlign } from "@mui/system";
import { DropdownBox, Stepper, BackNext } from ".";
import { FormatAlignJustify, Opacity, WrapText } from "@mui/icons-material";

const drawerWidth = 240;

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className="react_test">
        <Typography
          variant="h6"
          sx={{ color: "#ffffff", textAlign: "center", fontSize: "25px" }}
        >
          React Test
        </Typography>
      </div>
      <div className="line"></div>
      <List>
        {["Dashboard", "Montages", "Credits"].map((text, index) => (
          <ListItem sx={{ color: "white" }} key={text} disablePadding>
            <ListItemButton
              sx={
                index === 1
                  ? {
                      background: "rgba(44, 169, 227, 0.25)",
                      borderLeft: "4px solid #2CA9E3",
                    }
                  : undefined
              }
            >
              <ListItemIcon sx={{ color: "white" }}>
                {index === 0 ? (
                  <DashboardIcon />
                ) : index === 1 ? (
                  <NoteAddOutlinedIcon />
                ) : (
                  <AttachMoneyIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            bgcolor: "#02354F",
            paddingY: "40px",
            marginTop: "80%",
            marginX: "10px",
            color: "white",
            lineHeight: "40px",
            borderRadius: "4px",
          }}
        >
          <div>
            <Typography variant="h5">1,650</Typography>
            <Typography variant="h7">Total Credits Available</Typography>
          </div>
        </Box>
      </List>
    </div>
  );

  return (
    <div className="sidebar">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <div className="toolbar">
            <Toolbar>
              <IconButton
                color="black"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon style={{ display: "block" }} />
              </IconButton>
              {/* <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography> */}
            </Toolbar>
          </div>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "#04273A",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "#04273A",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}

export default Sidebar;
