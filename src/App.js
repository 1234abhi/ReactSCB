import React from "react";
import Header from "./components/Header";
import PendingTasks from "./components/pendingTasks/index.js";
import PriorityMessage from "./components/priorityMessge/index";
import "./App.css";
import Home from "./components/Home";
import PaymentPendingApproval from "./components/paymentPendingApproval/PaymentPendingApproval.js";
import QuickNavigation from "./components/quickNavigation.js";
import PaymentsWorkflow from "./components/paymentsWorkflow/index.js";

const App = () => {
  return (
    <div className="app">
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
      <button className="feedback-button">Give feedback</button>
    </div>
  );
};

export default App;
