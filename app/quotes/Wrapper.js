"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/quotes/table/Table";
import CheckBoxFilter from "../ui/checkboxFilter/CheckBoxFilter";
import StandardFilter from "../ui/filters/standardFilter/StandardFilter";
import TypesFilter from "../ui/filters/typesFilter/TypesFilter";
const Wrapper = ({ data, rows, search }) => {
  const quotesOptions = [
    "ALL Quotes",
    "MY Quotes",
    "My Client",
    "My Agent",
    "MY Team",
  ];
  const typesOptions = ["Manual", "Email", "Multi", "FCLTARIFF"];
  const directionsOptions = ["Directions", "IMP", "EXP", "XTR"];
  const statusOptions = [
    "Status",
    "draft",
    "sent",
    "accepted",
    "declined",
    "grouped",
    "negotiated",
  ];
  const [typesFilterValue, setTypesFilterValue] = useState({
    name: "ALL",
    type: "",
  });
  const [quotesFilterValue, setQuotesFilterValue] = useState("All Quotes");

  const [directionFilterValue, setDirectionFilterValue] =
    useState("Directions");
  const [statusFilterValue, setStatusFilterValue] = useState("Status");

  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Title title={"Rates"} />
          <div className={classes["filters-desktop"]}>
            <StandardFilter
              filterValue={quotesFilterValue}
              setFilterValue={setQuotesFilterValue}
              options={quotesOptions}
            />
            <TypesFilter
              filterValue={typesFilterValue}
              setFilterValue={setTypesFilterValue}
              fullOptions={true}
            />
            <StandardFilter
              filterValue={directionFilterValue}
              setFilterValue={setDirectionFilterValue}
              options={directionsOptions}
            />
            <StandardFilter
              filterValue={statusFilterValue}
              setFilterValue={setStatusFilterValue}
              options={statusOptions}
            />

            <CheckBoxFilter title={"Last Quote"} />
          </div>
        </div>
        <div className={classes["second"]}>
          <div className={classes["search"]}>
            <Search />
          </div>
        </div>
      </div>
      <div className={classes["filters-mobile"]}>
        <StandardFilter
          filterValue={quotesFilterValue}
          setFilterValue={setQuotesFilterValue}
          options={quotesOptions}
        />
        <TypesFilter
          filterValue={typesFilterValue}
          setFilterValue={setTypesFilterValue}
          fullOptions={true}
        />
        <StandardFilter
          filterValue={directionFilterValue}
          setFilterValue={setDirectionFilterValue}
          options={directionsOptions}
        />
        <StandardFilter
          filterValue={statusFilterValue}
          setFilterValue={setStatusFilterValue}
          options={statusOptions}
        />
        <CheckBoxFilter title={"Last Quote"} />
      </div>
      <Table />
    </div>
  );
};

export default Wrapper;
