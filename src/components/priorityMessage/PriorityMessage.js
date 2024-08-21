import React from "react";
import "./priorityMessage.css";
import { Box, Link, Paper, Typography } from "@mui/material";

const PriorityMessage = () => {
  return (
    <Paper
      style={{
        padding: "1rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        style={{
          color: "#fff",
          backgroundColor: "#0556a7",
          padding: "1rem",
        }}
      >
        PRIORITY MESSAGE
      </Typography>
      <Box
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: "15px",
          }}
        >
          Bill Payments Report - korea_Bill
        </Typography>
        <Link
          href="#"
          variant="body2"
          style={{ color: "#007bff", fontSize: "15px" }}
        >
          All Messages
        </Link>
      </Box>
    </Paper>
  );
};

export default PriorityMessage;
