import * as React from "react";

// Styles
import "./SaleCard.scss";

// Assets
import iconInfo from "../assets/iconInfo.svg";

// Utils
import { formatColombianCurrency } from "../utils/utils";

// Consts
import { cardData } from "../utils/constants";

const SaleCard = () => {
  const { title, amount, date } = cardData;
  return (
    <div className="sale-card">
      <div className="card-header">
        <div className="header-title">{title}</div>
        <img className="icon-info" src={iconInfo} alt="info-icon" />
      </div>
      <span className="amount">{formatColombianCurrency(amount)}</span>
      <span className="date">{date}</span>
    </div>
  );
};
export default SaleCard;
