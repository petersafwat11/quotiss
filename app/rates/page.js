"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/rates/table/Table";
import TypesFilter from "../ui/rates/typesFilter/TypesFilter";
import MarginFilter from "../ui/rates/marginFilter/MarginFilter";
import ContractsFilter from "../ui/rates/contractsFilter/ContractsFilter";
import ChexBoxFilter from "../ui/charges/checkboxFilter/ChexBoxFilter";
const Page = () => {
  const [typesFilterValue, setTypesFilterValue] = useState({
    name: "ALL",
    type: "",
  });
  const [marginFilterValue, setMarginFilterValue] = useState("45' HC");
  const [contractsFilterValue, setContractsFilterValue] = useState("Contracts");

  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Title title={"Rates"} />
          <div className={classes["filters-desktop"]}>
            <TypesFilter
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
            <ChexBoxFilter title={" Show Valid Only"} />
          </div>
        </div>
        <div className={classes["second"]}>
          <div className={classes["search"]}>
            <Search />
          </div>
        </div>
      </div>
      <div className={classes["filters-mobile"]}>
            <TypesFilter
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
            <ChexBoxFilter title={" Show Valid Only"} />
          </div>

      <Table />
    </div>
  );
};

export default Page;
