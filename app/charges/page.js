import React from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import ChexBoxFilter from "../ui/charges/checkboxFilter/ChexBoxFilter";
import Filter from "../ui/charges/filter/Filter";
const page = () => {
  return (
    <div className={classes["page"]}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Title title={"Charges"} />
          <Filter />
          <ChexBoxFilter />
        </div>
        <div className={classes["second"]}>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default page;
