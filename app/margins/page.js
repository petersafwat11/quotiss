import React from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/margin/table/Table";

const page = () => {
  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <Title title={"Margin"} />
        <div className={classes["search"]}>
          <Search />
        </div>
      </div>
      <Table />
    </div>
  );
};

export default page;
