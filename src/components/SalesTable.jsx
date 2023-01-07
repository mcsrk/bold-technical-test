import * as React from "react";

// Styles
import "./SalesTable.scss";

// Components
import CustomRow from "./CustomRow";
import TableName from "./TableName";

const SalesTable = (props) => {
  const { data } = props;

  return (
    <div className={`sales-table`}>
      <TableName {...props} />

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
          {data.payments.map((item) => (
            <CustomRow key={item.payId} item={item} />
          ))}
          {/* <CustomRow {...props.customRow} />
          <CustomRow {...props.customRow2} />
          <CustomRow {...props.customRow1} /> */}
        </tbody>
      </table>
    </div>
  );
};
export default SalesTable;
