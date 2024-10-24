// import React, { useState } from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import ChexBoxFilter from "../ui/charges/checkboxFilter/ChexBoxFilter";
import Table from "../ui/charges/table/Table";
import axios from "axios";

const Page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;
  let data;
  try {
    data = await axios.get(`${process.env.BACKEND_SERVER}/charges`, {
      params: {
        page: page,
        limit: rows,
        searchValue: search ? search : null,
        or: search ? ["location", "kind", "code", "region", "country"] : null,
      },
    });
  } catch (err) {
    console.log("err", err);
  }

  // const [filterValue, setFilterValue] = useState({ name: "ALL", type: "" });
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
