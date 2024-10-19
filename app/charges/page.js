"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import ChexBoxFilter from "../ui/charges/checkboxFilter/ChexBoxFilter";
import Table from "../ui/charges/table/Table";
import Filter from "../ui/charges/filter/Filter";
import { Suspense } from 'react'

const Page = () => {
  const [filterValue, setFilterValue] = useState({ name: "ALL", type: "" });
  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Title title={"Charges"} />
          {/* <Filter filterValue={filterValue} setFilterValue={setFilterValue} /> */}
          <ChexBoxFilter title={" Show with charges"} />
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
