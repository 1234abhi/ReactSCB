import React from "react";

const PaymentsOverview = () => {
  return (
    <div className="payments-overview">
      <h3>Payments in Last 7 Days (My View)</h3>
      <div className="payment-status">
        <div>
          <span>25</span>
          <p>Processed by Bank</p>
        </div>
        <div>
          <span>14</span>
          <p>Rejected by Bank</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentsOverview;
