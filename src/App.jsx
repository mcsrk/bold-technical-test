import React, { useState } from "react";

// Styles
import "./App.scss";

// Components
import Filter from "./components/Filter";
import SaleCard from "./components/SaleCard";
import SalesTable from "./components/SalesTable";
import Nav from "./components/Nav";
import DatesFilter from "./components/DatesFilter";

// Consts
import { dateFilters, paymentsData } from "./utils/constants";

const App = () => {
  const [tooltipFilters, setTooltipFilters] = useState(["link", "datafono"]);
  const [tableTimePeriod, setTableTimePeriod] = useState(dateFilters[0]?.name);

  return (
    <div className="App">
      <Nav />

      <div className="container">
        <div className="flex-container">
          <SaleCard />
          <div className="flex-container-1">
            <DatesFilter setTableTimePeriod={setTableTimePeriod} />
            <Filter setTooltipFilters={setTooltipFilters} />
          </div>
        </div>
        <SalesTable
          tableTimePeriod={tableTimePeriod}
          tooltipFilters={tooltipFilters}
          data={paymentsData}
        />
      </div>
    </div>
  );
};
export default App;
