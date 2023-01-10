import React, { useState } from "react";

// Styles
import "./DatesFilter.scss";

// Consts
import { dateFilters } from "../utils/constants";

const DatesFilter = ({ setTableTimePeriod }) => {
  const [active, setActive] = useState(dateFilters[0].key);

  const handleClick = (key, name) => {
    setTableTimePeriod(name);
    setActive(key);
  };
  return (
    <div className="btn-group">
      {dateFilters.map(({ key, value, name }) => (
        <button
          key={"button-option" + key}
          value={value}
          onClick={() => handleClick(key, name)}
          className={`${active === key && "active"}`}
        >
          <span className="button-text"> {name}</span>
        </button>
      ))}
    </div>
  );
};
export default DatesFilter;
