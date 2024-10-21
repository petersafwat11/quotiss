"use client";
import React, { useState } from "react";
import classes from "./dashboardWrapper.module.css";
const DashboardWrapper = () => {
  const [typesFilterValue, setTypesFilterValue] = useState({
    name: "ALL",
    type: "",
  });
  const [marginFilterValue, setMarginFilterValue] = useState("45' HC");
  const [contractsFilterValue, setContractsFilterValue] = useState("Contracts");

  return (
    <div className={classes["container"]}>
      <div className={classes["filters"]}>
        {/* <TypesFilter
          filterValue={typesFilterValue}
          setFilterValue={setTypesFilterValue}
        />
        <MarginFilter
          filterValue={marginFilterValue}
          setFilterValue={setMarginFilterValue}
        />
        <ContractsFilter
          filterValue={contractsFilterValue}
          setFilterValue={setContractsFilterValue}
        />
        <ChexBoxFilter title={" Show Valid Only"} /> */}
      </div>
    </div>
  );
};

export default DashboardWrapper;
