import React from "react";
import "./quickNavigation.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const QuickNavigation = () => {
  const navigationItems = [
    {
      title: "Create Payments",
      description: "Make a new domestic or international payment",
    },
    {
      title: "Create Payee",
      description: "Create a new beneficiary with details to receive payment",
    },
    {
      title: "View Account Balance",
      description: "View balance and details of your account",
    },
    {
      title: "Manage Reports",
      description: "View, schedule and run reports",
    },
  ];

  return (
    <div className="quick-navigation">
      <div className="quick-navigation-header">Quick Navigation</div>
      <ul>
        {navigationItems.map((item, index) => (
          <>
            <li key={index}>
              <div>
                <span className="item-title">{item.title}</span>
                <span className="item-description">{item.description}</span>
              </div>
              <span className="info-icon">
                <InfoOutlinedIcon />
              </span>
            </li>
            <hr className="horizontal-line" />
          </>
        ))}
      </ul>
    </div>
  );
};

export default QuickNavigation;
