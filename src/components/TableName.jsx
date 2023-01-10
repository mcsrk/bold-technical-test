import * as React from "react";
import "./TableName.scss";
const TableName = ({ data, tableTimePeriod }) => {
  return (
    <div className={`table-name`}>
      <span className="table-name-text">
        {data.tableTitle + tableTimePeriod}{" "}
      </span>
    </div>
  );
};
export default TableName;
