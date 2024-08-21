import React from "react";
import "./paymentPendingApproval.css";
import { Box, Paper, Typography } from "@mui/material";

const PaymentPendingApproval = () => {
  return (
    <Paper sx={{ padding: "1rem", backgroundColor: "#f9f9f9" }}>
      <Box sx={{ backgroundColor: "#0556a7", padding: "1rem" }}>
        <Typography variant="body1" sx={{ color: "white", fontWeight: "bold" }}>
          PAYMENT - PENDING APPROVAL
        </Typography>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography
          variant="body3"
          sx={{ fontWeight: "bold", color: "#007bff", fontSize: "15px" }}
        >
          QO022706 |{" "}
          <span className="small-text"> Cut - off time 2 hrs from now </span>
        </Typography>
        <Typography variant="body2">KRW 701</Typography>
      </Box>
    </Paper>
  );
};

export default PaymentPendingApproval;
