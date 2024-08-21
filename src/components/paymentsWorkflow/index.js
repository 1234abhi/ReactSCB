import React, { useState } from "react";
import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import { BarChart } from "@mui/x-charts/BarChart";

const PaymentsWorkflow = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (event, newTabId) => {
    setActiveTab(newTabId);
  };

  return (
    <Box sx={{ m: 2, p: 2, bgcolor: "#f9f9f9", boxShadow: 3, borderRadius: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#0556a7",
          color: "white",
          p: 1,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6">PAYMENTS IN LAST 7 DAYS (MY VIEW)</Typography>
        <Box>
          <IconButton color="inherit">
            <FilterAltOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <OpenInFullOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <Tabs
        value={activeTab}
        onChange={changeTab}
        indicatorColor="primary"
        textColor="primary"
        sx={{ mb: 2 }}
      >
        <Tab label="CLIENT WORKFLOW" />
        <Tab label="BANK WORKFLOW" />
      </Tabs>
      <Box textAlign="center">
        {activeTab === 0 && (
          <Box display="flex" justifyContent="center" alignItems="center">
            <WorkflowBarChart />
          </Box>
        )}
        {activeTab === 1 && <Typography>No Data</Typography>}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        color="grey.600"
        fontSize={12}
        mt={3}
      >
        <CachedOutlinedIcon />
        <Typography variant="body2" ml={1}>
          Last Updated 17/07/2024 04:09:41 PM
        </Typography>
      </Box>
    </Box>
  );
};

const WorkflowBarChart = () => {
  const data = [
    { label: "Processed by Bank", value: 25, color: "#3de98d" },
    { label: "Rejected by Bank", value: 14, color: "#21adfe" },
  ];

  return (
    <BarChart
      width={340}
      height={400}
      series={[
        {
          data: data.map((item) => item.value),
          color: data.map((item) => item.color),
        },
      ]}
      xAxis={[
        {
          id: "barCategories",
          data: data.map((item) => item.label),
          scaleType: "band",
          disableTicks: true,
          labelFontSize: "8px",
          categoryGapRatio: 0.4,
          barGapRatio: 0,
        },
      ]}
      yAxis={[
        {
          disableLine: true,
          disableTicks: true,
          display: false,
          hideTooltip: true,
          data: null,
        },
      ]}
      tooltip={false}
    />
  );
};

export default PaymentsWorkflow;
