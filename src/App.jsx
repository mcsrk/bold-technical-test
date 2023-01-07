import * as React from "react";
// Styles
import "./App.scss";
// Assets
import iconHelp from "./assets/iconHelp.svg";
import iconFilter from "./assets/iconFilter.svg";

// Components
import Filter from "./components/Filter";
import SaleCard from "./components/SaleCard";
import SalesTable from "./components/SalesTable";
import Nav from "./components/Nav";
import RadioSelect from "./components/RadioSelect";

// Consts
const navItems = [
  { title: "Mi negocio", link: "https://bold.co/comparar.html" },
  {
    title: "Ayuda",
    link: "https://bold.co/contacto.html",
    icon: <img className="icon-tab" src={iconHelp} alt="help-icon" />,
  },
];
const cardData = {
  amount: 2460000,
  title: "Total de ventas de hoy",
  date: "Septiembre, 2020",
};
const paymentsData = {
  tableTitle: "Tus ventas de septiembre",
  cols: [
    "Transacción",
    "Fecha y hora",
    "Método de pago",
    "ID Transacción Bold",
    "Monto",
  ],
  payments: [
    {
      payId: "GZEN2378257V2",
      payAmount: 25000,
      payCard: "2376 2375 2373 2373",
      payStatus: "accepted",
      payFee: -5500,
      payDate: "2023-01-06T03:44:51+0000",
      payMethod: "visa",
    },
    {
      payId: "ASAP23784UBV2",
      payDate: "2023-01-04T03:44:51+0000",
      payFee: -1500,
      payStatus: "pending",
      payAmount: 115000,
      payCard: "7711 2021 7711 2021",
      payMethod: "master",
    },
    {
      payId: "ZZZZ23784UBV2",
      payDate: "2023-01-02T03:44:51+0000",
      payAmount: 25000,
      payCard: "2021 7711 2021 7711",
      payFee: -1500,
      payStatus: "failed",
      payMethod: "none",
    },
  ],
};
const App = () => {
  const propsData = {
    radioSelect: {
      button3: "Septiembre",
      buttonText: "Esta semana",
      buttonText: "Hoy",
    },
    filterButton: {
      text: "FILTRAR",
      iconFilter: iconFilter,
    },
  };

  return (
    <div className="App">
      <Nav items={navItems} />

      <div className="container">
        <div className="flex-container">
          <SaleCard data={cardData} />
          <div className="flex-container-1">
            <RadioSelect
              className="radio-select-instance-1"
              {...propsData.radioSelect}
            />
            <Filter {...propsData.filterButton} />
          </div>
        </div>
        <SalesTable data={paymentsData} />
      </div>
    </div>
  );
};
export default App;
