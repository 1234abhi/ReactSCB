import React from "react";
import "./priorityMessage.css";

const PriorityMessage = () => {
  return (
    <div className="outer-container">
      <div className="message-header">PRIORITY MESSAGE</div>
      <div className="message-body">
        <div className="message-content">Bill Payments Report - Korea_Bill</div>
        <a href="#" className="message-link">
          All Messages
        </a>
      </div>
    </div>
  );
};

export default PriorityMessage;
