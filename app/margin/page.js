import React from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/margin/table/Table";

const page = () => {
  return (
    <div className={classes["page"]}>
      <div className={classes["top"]}>
        <Title title={"Margin"} />
        <Search />
      </div>
      <Table />
    </div>
  );
};

export default page;
