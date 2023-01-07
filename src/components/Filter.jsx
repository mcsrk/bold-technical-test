import * as React from "react";
import "./Filter.scss";
import iconFilter from "../assets/iconFilter.svg";
const FilterButton = (props) => {
  return (
    <button className="filter-button">
      {/* <div className="content-6"> */}
      <span className="text">{props.text || "FILTRAR"}</span>
      <img className="icon-filter" src={iconFilter} alt="filter-icon" />
      {/* </div> */}
    </button>
  );
};
export default FilterButton;
