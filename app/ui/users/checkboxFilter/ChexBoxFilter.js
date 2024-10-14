import React from "react";
import classes from "./checkboxFilter.module.css";
const ChexBoxFilter = () => {
  return (
    <div>
      <label>
        <input
          className={classes["checkbox"]}
          type="checkbox"
        //   checked={data.active}
        //   onChange={() => {
        //     setData({ ...data, active: !data.active });
        //   }}
        />
        Show active only
      </label>
    </div>
  );
};

export default ChexBoxFilter;
