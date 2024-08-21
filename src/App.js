import React from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import Header from "./components/Header";
import PendingTasks from "./components/pendingTasks/index.js";
import PriorityMessage from "./components/priorityMessage/PriorityMessage.js";
import Home from "./components/Home";
import PaymentPendingApproval from "./components/paymentPendingApproval/PaymentPendingApproval.js";
import QuickNavigation from "./components/quickNavigation/index.js";
import PaymentsWorkflow from "./components/paymentsWorkflow/index.js";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import "./App.css";

const App = () => {
  return (
    <Box>
      <Header />
      <Home />
      <div className="container">
        <div className="item item1">
          <PaymentPendingApproval />
        </div>
        <div className="item item2">
          <PriorityMessage />
        </div>
        <div className="item item3">
          <QuickNavigation />
        </div>
        <div className="item item4">
          <PendingTasks />
        </div>
        <div className="item item5">
          <PaymentsWorkflow />
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: "fixed",
          top: "30%",
          right: 0,
          transform: "rotate(180deg)",
          writingMode: "vertical-rl",
          borderRadius: "5px 5px 0 0",
          fontSize: "14px",
          zIndex: 1000,
          padding: "15px",
          display: "flex",
          gap: "0.4rem",
          alignItems: "center",
        }}
        startIcon={
          <CampaignOutlinedIcon
            sx={{
              transform: "rotate(50deg)",
            }}
          />
        }
      >
        Give feedback
      </Button>
    </Box>
  );
};

export default App;
