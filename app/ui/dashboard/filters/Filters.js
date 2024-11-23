"use client";
import React, { useState } from "react";
import classes from "./filters.module.css";
import TypesFilter from "../../filters/typesFilter/TypesFilter";
import StandardFilter from "../../filters/standardFilter/StandardFilter";
const Filters = () => {
  const [type, setType] = useState("Types");
  const [marginType, setMarginType] = useState({ name: "types", type: "" });
  const [directionFilterValue, setDirectionFilterValue] =
    useState("Directions");
  const directionsOptions = ["Directions", "IMP", "EXP", "XTR"];
  return (
    <div className={classes['filters']}>
      <StandardFilter
        filterValue={type}
        setFilterValue={setType}
        options={["Types", "Clients", "Agent"]}
      />
      <TypesFilter filterValue={marginType} setFilterValue={setMarginType} />
      <StandardFilter
        filterValue={directionFilterValue}
        setFilterValue={setDirectionFilterValue}
        options={directionsOptions}
      />
    </div>
  );
};

export default Filters;
