import * as React from "react";

//Styles
import "./CustomRow.scss";

// Assets
import iconCalculator from "../assets/iconCalculator.svg";
import logoUnknown from "../assets/logo_card_unknown.png";
import logoMaster from "../assets/logo_master.png";
import logoVisa from "../assets/logo_visa.png";

// Utils
import {
  formatColombianCurrency,
  parseIsoDate,
  replaceChars,
} from "../utils/utils";

// Consts
const mappePayMethods = {
  visa: logoVisa,
  master: logoMaster,
};

const mappedStatuses = {
  accepted: "Cobro exitóso",
  pending: "Cobro pendiente",
  failed: "Cobro no realizado",
};

const CustomRow = ({ item }) => {
  const { payId, payStatus, payDate, payCard, payAmount, payFee, payMethod } =
    item;

  return (
    <tr className={`custom-row`}>
      <td className={`pay-status ${payStatus || "pending"}`}>
        <img
          className="icon-calculator"
          src={iconCalculator}
          alt="logo-calculator"
        />
        <span className="pay-state">
          {mappedStatuses[payStatus] || "Cobro pendiente"}
        </span>
      </td>
      <td className="pay-date">
        {parseIsoDate(payDate) ?? "xx/xx/xxxx - xx:xx:xx"}
      </td>

      <td className="pay-card">
        <img
          className="logo-pay-method"
          src={mappePayMethods[payMethod] || logoUnknown}
          alt="logo-master-card"
        />
        {replaceChars(payCard, 12,'*') || "**** **** **** XXXX"}
      </td>
      <td className="pay-id-bold">{payId || "XXXXXXXXXX"}</td>
      <td className="amount-container">
        <span className="pay-amount">
          {formatColombianCurrency(payAmount) || "$XX.XXX"}
        </span>
        <span className="pay-deduction">Deducción Bold</span>
        <span className="pay-fee">
          {formatColombianCurrency(payFee) || "-$X.XXX"}
        </span>
      </td>
    </tr>
  );
};
export default CustomRow;
