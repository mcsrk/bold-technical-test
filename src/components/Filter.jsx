import * as React from "react";

// Styles
import "./Filter.scss";

import iconFilter from "../assets/iconFilter.svg";

const FilterButton = () => {
  return (
    <button className="filter-button">
      <span className="text">FILTRAR</span>
      <img className="icon-filter" src={iconFilter} alt="filter-icon" />
    </button>
  );
};
export default FilterButton;
