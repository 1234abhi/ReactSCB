import React from "react";
import "./paymentPendingApproval.css";

const PaymentPendingApproval = () => {
  return (
    <div className="outer-container">
      <div className="payment-header">PAYMENT - PENDING APPROVAL</div>
      <div className="payment-body">
        <span className="payment-id">Q0022706</span> | Cut-off time 2 hrs from
        now
        <div className="payment-amount">KRW 701</div>
      </div>
    </div>
  );
};

export default PaymentPendingApproval;
