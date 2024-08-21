import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Avatar,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./header.css";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#0556a7", color: "#fff" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Menu
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: "0.2rem" }}
              >
                <HomeOutlinedIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontSize: "18px" }}
              >
                Straight2Bank
              </Typography>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: "flex" }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  marginLeft: "1rem",
                  borderRadius: "50%",
                  border: "1px solid white",
                  padding: "5px 10px",
                }}
              >
                S
              </Typography>
              <Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ fontSize: "15px", marginLeft: "1rem" }}
                >
                  Welcome
                </Typography>
                <Typography
                  variant="p"
                  noWrap
                  component="div"
                  sx={{ fontSize: "15px", marginLeft: "1.2rem" }}
                >
                  SIT101
                </Typography>
              </Box>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontSize: "15px", marginLeft: "1rem" }}
            >
              Group ID: KRSITEE1
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <KeyboardArrowDownOutlinedIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <PowerSettingsNewIcon />
              <Typography sx={{ fontSize: "15px", marginLeft: "5px" }}>
                Logout
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
