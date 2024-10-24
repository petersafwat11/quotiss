import React from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/countries/table/Table";
const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;
  let data;
  try {
    data = await axios.get(`${process.env.BACKEND_SERVER}/countries`, {
      params: {
        page: page,
        limit: rows,
        searchValue: search ? search : null,    
        or: search ? ["name", "status", "code"] : null,
      },
    });
  } catch (err) {
    console.log("err", err);
  }
  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <Title title={"Countries"} />
        <div className={classes["search"]}>
          <Search />
        </div>
      </div>
      <Table />
    </div>
  );
};

export default page;
