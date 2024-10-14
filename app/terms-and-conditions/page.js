import React from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Table from "../ui/terms_and_conditions/table/Table";
const page = () => {
  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <Title title={"Terms And Condions"} />
      </div>
      <Table />
    </div>
  );
};

export default page;
