import React from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/margin/table/Table";
import axios from "axios";

const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;
  let data;
  try {
    data = await axios.get(`${process.env.BACKEND_SERVER}/margins`, {
      params: {
        page: page,
        limit: rows,
        searchValue: search ? search : null,
        or: search ? ["name", "Weight / Measurement", "description"] : null,
      },
    });
  } catch (err) {
    console.log("err", err);
  }
  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <Title title={"Margin"} />
        <div className={classes["search"]}>
          <Search />
        </div>
      </div>
      <Table data={data?.data} rows={rows} search={search} />
    </div>
  );
};

export default page;
