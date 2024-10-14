import React from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Filter from "../ui/filter/Filter";
import ChexBoxFilter from "../ui/checkboxFilter/ChexBoxFilter";
import Table from "../ui/rates/table/Table";
const page = () => {
  return (
    <div className={classes["page"]}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Title title={"Rates"} />
          <Filter />
          <Filter />
          <Filter />
          <ChexBoxFilter />
        </div>
        <div className={classes["second"]}>
          <Search />
        </div>
      </div>
      <Table />
    </div>
  );
};

export default page;
