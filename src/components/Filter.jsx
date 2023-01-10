import React, { useState } from "react";

// Styles
import "./Filter.scss";

// Assets
import iconFilter from "../assets/iconFilter.svg";

const filterItems = [
  {
    name: "Cobro con datáfono",
    val: ["datafono"],
  },
  {
    name: "Cobros con link de pago",
    val: ["link"],
  },
  {
    name: "Ver todos",
    val: ["datafono", "link"],
  },
];

const FilterButton = ({ setTooltipFilters }) => {
  const [visibleTooltip, setVisibleTooltip] = useState(false);

  const [localCheckedState, setLocalCheckedState] = useState([
    "datafono",
    "link",
  ]);

  return (
    <>
      <button
        className="filter-button"
        onClick={() => setVisibleTooltip((prev) => !prev)}
      >
        <span className="text">FILTRAR</span>
        <img className="icon-filter" src={iconFilter} alt="filter-icon" />
      </button>
      {visibleTooltip && (
        <ul
          className={`filter-list ${visibleTooltip ? "fade-in" : "fade-out"}`}
        >
          {filterItems.map(({ name, val }, index) => {
            return (
              <li key={index}>
                <div className="filter-list-item">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    // checks if checkbox values are subset of selected values
                    checked={val.every(
                      (val) => localCheckedState.indexOf(val) >= 0
                    )}
                    onChange={() => setLocalCheckedState(val)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </li>
            );
          })}

          <button
            className="filter-list-btn"
            onClick={() => setTooltipFilters(localCheckedState)}
          >
            Aplicar
          </button>
        </ul>
      )}
    </>
  );
};
export default FilterButton;
