import * as React from "react";
import "./SaleCard.scss";
const SaleCard = ({ title, amount, date }) => {
  return (
    <div className="sale-card">
      <div className="card-header">
        <div className="header-title">{title}</div>
      </div>
      <span className="amount">{amount}</span>
      <span className="date">{date}</span>
    </div>
  );
};
export default SaleCard;
