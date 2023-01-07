import * as React from "react";
import "./TableName.scss";
const TableName = ({ data }) => {
  return (
    <div className={`table-name`}>
      <span className="table-name-text">{data.tableTitle}</span>
    </div>
  );
};
export default TableName;
