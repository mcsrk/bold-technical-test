import React, { useEffect } from "react";

// Styles
import "./SalesTable.scss";

// Components
import CustomRow from "./CustomRow";
import TableName from "./TableName";

// Utils
import { sortObjsByDate } from "../utils/utils";

const SalesTable = ({ data }) => {
  const [sortedData, setSortedData] = React.useState(data?.payments);

  useEffect(() => {
    setSortedData(sortObjsByDate(data?.payments, "payDate"));
  }, [data]);

  return (
    <div className={`sales-table`}>
      <TableName data={data} />

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
