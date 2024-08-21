import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  IconButton,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { pendingtasksData } from "./demofile";
import "./pendingTask.css";

const PendingTasks = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const tasksPerPage = 3; // Number of tasks to show per page
  const totalPage = Math.ceil(pendingtasksData?.length / tasksPerPage);

  const handleNextClick = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(pendingtasksData.length / tasksPerPage) - 1)
    );
  };

  const handlePreviousClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleChangeTab = (_, newTabId) => {
    setActiveTab(newTabId);
  };

  const getVisibleTasks = () => {
    const startIndex = currentPage * tasksPerPage;
    const endIndex = Math.min(
      startIndex + tasksPerPage,
      pendingtasksData.length
    );
    return pendingtasksData.slice(startIndex, endIndex);
  };

  return (
    <Box
      p={2}
      boxShadow={3}
      borderRadius={2}
      bgcolor="#f5f5f5"
      className="pending_tasks_container"
    >
      <Box
        mb={2}
        sx={{ backgroundColor: "#0556a7", padding: 1, color: "#fff" }}
      >
        <Typography variant="h6">
          1555 <span style={{ fontWeight: 400 }}>PENDING TASKS</span>
        </Typography>
      </Box>
      {/* Tabs Component */}
      <Tabs
        value={activeTab}
        onChange={handleChangeTab}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="CASH" />
        {/* <Tab label="CASHLESS" /> */}
      </Tabs>
      {activeTab === 0 && (
        <>
          <Box mt={2} padding={1}>
            <Grid container spacing={1} direction="row">
              {getVisibleTasks().map((task) => (
                <Grid item xs={4} key={task.id}>
                  <TaskCard
                    title={task.description}
                    count={task.total}
                    details={task.details}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            mt={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <CachedOutlinedIcon />
              <Typography variant="body2" ml={1}>
                Last Updated 17/07/2024 04:09:44 PM
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              {[...Array(totalPage)].map((_, i) => (
                <Box
                  key={i}
                  width={8}
                  height={8}
                  mx={0.5}
                  borderRadius="50%"
                  bgcolor={currentPage === i ? "primary.main" : "grey.400"}
                />
              ))}
            </Box>
          </Box>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <IconButton
              className="pagination-button-prev"
              disabled={currentPage === 0}
              onClick={handlePreviousClick}
            >
              <ArrowBackIosNewOutlinedIcon />
            </IconButton>
            <IconButton
              className="pagination-button-next"
              disabled={currentPage === totalPage - 1}
              onClick={handleNextClick}
            >
              <ArrowForwardIosOutlinedIcon />
            </IconButton>
          </Box>
        </>
      )}
      {activeTab === 1 && (
        <Box mt={2}>
          <Typography>No Data</Typography>
        </Box>
      )}
    </Box>
  );
};

const TaskCard = ({ title, count, details }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {count}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Box component="ul" pl={2}>
          {details.map((detail, index) => (
            <li key={index}>
              <Typography variant="body2">
                {detail.title}: {detail.count}
              </Typography>
            </li>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PendingTasks;
