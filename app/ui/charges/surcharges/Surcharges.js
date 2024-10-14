import React from "react";
import classes from "./surcharges.module.css";
import Table from "../surchargesTable/Table";
const Surcharges = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <Table />
    </div>
  );
};

export default Surcharges;
