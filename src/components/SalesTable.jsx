import React, { useState, useEffect } from "react";

// Styles
import "./SalesTable.scss";

// Components
import CustomRow from "./CustomRow";
import TableName from "./TableName";

// Utils
import { sortObjsByDate } from "../utils/utils";

const SalesTable = ({ data, tooltipFilters, tableTimePeriod }) => {
  const [sortedData, setSortedData] = useState(data?.payments);

  useEffect(() => {
    setSortedData(sortObjsByDate(data?.payments, "payDate"));
  }, [data]);

  useEffect(() => {
    setSortedData(
      data?.payments.filter((ele) => tooltipFilters.includes(ele.payTech))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tooltipFilters]);

  return (
    <div className={`sales-table`}>
      <TableName data={data} tableTimePeriod={tableTimePeriod} />

      <table className="payments-table">
        <thead>
          <tr>
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Método de pago</th>
            <th>ID Transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <CustomRow key={item.payId} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SalesTable;
