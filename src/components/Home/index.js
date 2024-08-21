import { Button } from "@mui/material";
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <Button
      className="home_container"
      sx={{
        backgroundColor: "#0070e8",
        padding: "10px 20px",
        color: "#fff",
        textTransform: "uppercase",
        width: "5%",
        margin: "1rem 2rem",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Home
    </Button>
  );
};

export default Home;
