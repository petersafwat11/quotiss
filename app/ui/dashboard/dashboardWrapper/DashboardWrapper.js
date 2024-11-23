"use client";
import React, { useState } from "react";
import classes from "./dashboardWrapper.module.css";
import Filters from "../filters/Filters";
import Groups from "../groups/Groups";
import Bottom from "../bottom/Bottom";
import QuotesChart from "../charts/quotesChart";
const DashboardWrapper = () => {
  const [typesFilterValue, setTypesFilterValue] = useState({
    name: "ALL",
    type: "",
  });
  const [marginFilterValue, setMarginFilterValue] = useState("45' HC");
  const [contractsFilterValue, setContractsFilterValue] = useState("Contracts");

  return (
    <div className={classes["container"]}>
      <Filters />
      <Groups />
      <QuotesChart />
      <Bottom />
    </div>
  );
};

export default DashboardWrapper;
