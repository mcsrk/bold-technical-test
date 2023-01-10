import moment from "moment";

// Assets
import iconHelp from "../assets/iconHelp.svg";

export const paymentsData = {
  tableTitle: "Tus ventas de ",
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
      payAmount: 48000,
      payCard: "2376 2375 2373 2373",
      payStatus: "accepted",
      payFee: -5500,
      payDate: moment().toISOString(),
      payMethod: "visa",
      payTech: "datafono",
    },
    {
      payId: "ASAP23784UBV2",
      payDate: "2023-01-04T03:44:51+0000",
      payFee: -1500,
      payStatus: "pending",
      payAmount: 115000,
      payCard: "7711 2021 7711 2021",
      payMethod: "master",
      payTech: "datafono",
    },
    {
      payId: "HGGG2374H4HFV2",
      payDate: "2023-01-02T03:44:51+0000",
      payAmount: 25000,
      payCard: "2021 7711 2021 7711",
      payFee: -1500,
      payStatus: "failed",
      payMethod: "none",
      payTech: "link",
    },
    {
      payId: "GAGH2378AFHAHFBV2",
      payDate: "2022-09-02T03:44:51+0000",
      payAmount: 50000,
      payCard: "2021 7711 2021 7711",
      payFee: -1500,
      payStatus: "accepted",
      payMethod: "visa",
      payTech: "datafono",
    },
    {
      payId: "4FH4FHJ84UBV2",
      payDate: "2022-09-24T03:44:51+0000",
      payAmount: 25000,
      payCard: "2021 7711 2021 7711",
      payFee: -1500,
      payStatus: "pending",
      payMethod: "master",
      payTech: "datafono",
    },
  ],
};

export const dateFilters = [
  { key: 1, value: "today", name: "Hoy" },
  { key: 2, value: "current-week", name: "Esta semana" },
  { key: 3, value: "septiembre", name: "Septiembre" },
];

export const cardData = {
  amount: 2460000,
  title: "Total de ventas de septiembre",
  date: "Septiembre, 2020",
};

export const navItems = [
  { id: 10, title: "Mi negocio", link: "https://bold.co/comparar.html" },
  {
    id: 11,
    title: "Ayuda",
    link: "https://bold.co/contacto.html",
    icon: <img className="icon-tab" src={iconHelp} alt="help-icon" />,
  },
];
