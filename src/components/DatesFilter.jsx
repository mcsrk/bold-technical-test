import React, { useState } from "react";

// Styles
import "./DatesFilter.scss";

const DatesFilter = ({ items }) => {
  const [active, setActive] = useState(items[0].key);

  return (
    <div className="btn-group">
      {items.map(({ key, value, name }) => (
        <button
          key={"button-option" + key}
          value={value}
          onClick={() => setActive(key)}
          className={`${active === key && "active"}`}
        >
          <span className="button-text"> {name}</span>
        </button>
      ))}
    </div>
  );
};
export default DatesFilter;
