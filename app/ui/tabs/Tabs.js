import React from "react";
import classes from "./tabs.module.css";
const Tabs = ({ dataType, types, setDataType }) => {
  return (
    <div className={classes["data-types"]}>
      {types.map((type, index) => (
        <p
          key={index}
          onClick={() => {
            setDataType(type);
            console.log("type", type);
          }}
          className={dataType === type ? classes["active-type"] : classes["type"]}
        >
          {type}
        </p>
      ))}
    </div>
  );
};

export default Tabs;
