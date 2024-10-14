import React from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import ChexBoxFilter from "../ui/users/checkboxFilter/ChexBoxFilter";
import Search from "../ui/search/Search";
import Table from "../ui/users/table/Table";
const page = () => {
  return (
    <div className={classes["page"]}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Title title={"Users"} />
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
