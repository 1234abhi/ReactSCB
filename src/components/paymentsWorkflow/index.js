import React, { useState } from "react";
import "./paymentsWorkflow.css";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

const PaymentsWorkflow = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (newTabId) => {
    setActiveTab(newTabId);
  };

  return (
    <div className="payments-container">
      <div className="workflow-header">
        <p>PAYMENTS IN LAST 7 DAYS (MY VIEW)</p>
        <div className="icons">
          <span className="filter-icon">
            <FilterAltOutlinedIcon />
          </span>
          <span className="expand-icon">
            <OpenInFullOutlinedIcon />
          </span>
        </div>
      </div>
      <div className="tabs">
        <button
          className={`tablink ${activeTab === 0 ? "active" : ""}`}
          onClick={() => changeTab(0)}
        >
          CLIENT WORKFLOW
        </button>
        <button
          className={`tablink ${activeTab === 1 ? "active" : ""}`}
          onClick={() => changeTab(1)}
        >
          BANK WORKFLOW
        </button>
      </div>
      <div className="content">
        {activeTab === 0 && (
          <div className="workflow">
            <BarChart label="Processed by Bank" value={25} color="green" />
            <BarChart label="Rejected by Bank" value={14} color="blue" />
          </div>
        )}
        {activeTab === 1 && (
          <div className="workflow">
            <p>No Data</p>
          </div>
        )}
      </div>
      <footer className="footer">
        <CachedOutlinedIcon />
        Last Updated 17/07/2024 04:09:41 PM
      </footer>
    </div>
  );
};

const BarChart = ({ label, value, color }) => {
  return (
    <div className="bar-chart">
      <div
        className="bar"
        style={{ height: `${value * 10}px`, backgroundColor: color }}
      >
        <span className="value">{value}</span>
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          position: "absolute",
          width: "100px",
          //   top: "140px",
          bottom: "85px",
          right: "-40%",
        }}
      ></div>
      <p className="chart-label">{label}</p>
    </div>
  );
};

export default PaymentsWorkflow;
