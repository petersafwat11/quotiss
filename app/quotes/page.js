"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import ChexBoxFilter from "../ui/checkboxFilter/CheckBoxFilter";
import TypesFilter from "../ui/typesFilter/TypesFilter";
import QuotessFilter from "../ui/quotes/quotesFilter/QuotessFilter";
import StatusFilter from "../ui/quotes/statusFilter/StatusFilter";
import DirectionFilter from "../ui/quotes/directionFilter/DirectionFilter";
import Table from "../ui/quotes/table/Table";
const Page = () => {
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
          <Title title={"Quotes"} />
          <TypesFilter
            filterValue={typesFilterValue}
            setFilterValue={setTypesFilterValue}
          />
          <QuotessFilter
            filterValue={quotesFilterValue}
            setFilterValue={setQuotesFilterValue}
          />
          <DirectionFilter
            filterValue={directionFilterValue}
            setFilterValue={setDirectionFilterValue}
          />
          <StatusFilter
            filterValue={statusFilterValue}
            setFilterValue={setStatusFilterValue}
          />
          <ChexBoxFilter title={"Last Quote"} />
        </div>
        <div className={classes["second"]}>
          <div className={classes["search"]}>
            <Search />
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Page;
