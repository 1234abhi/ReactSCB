import React from "react";
import "./header.css";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Header = () => {
  return (
    <div className="header-container">
      <div className="hamburger-icon">
        <MenuOutlinedIcon />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <MenuOutlinedIcon />
          Menu
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <AddHomeOutlinedIcon />
          Straight2Bank
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid white",
              borderRadius: "50%",
              padding: "5px 10px",
            }}
          >
            A
          </div>
          Welcome Abhi
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            alignItems: "center",
          }}
        >
          Group ID: ABHINEGI
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
      <div>
        <div
          style={{
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              border: "0.5px solid transparent",
              backgroundColor: "red",
              borderRadius: "50%",
              top: "0",
              right: "0",
              fontSize: "9px",
              padding: "0 4px",
            }}
          >
            4
          </span>
          <NotificationsNoneOutlinedIcon />
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            alignItems: "center",
            marginLeft: "1rem",
          }}
        >
          <PowerSettingsNewOutlinedIcon />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;
