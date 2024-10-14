import React from "react";
import classes from "./country.module.css";
const Country = ({ data, setData, applyChanges, cancelChanges }) => {
  return (
    <div className={classes["container"]}>
      <input
        value={data.code}
        onChange={(e) => {
          setData({ ...data, code: e.target.value });
        }}
        className={classes["code"]}
      ></input>
      <input
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
        className={classes["name"]}
      ></input>
      <label>
        <input
          className={classes["checkbox"]}
          type="checkbox"
          checked={data.active}
          onChange={() => {
            setData({ ...data, active: !data.active });
          }}
        />
        Status
      </label>

      <div className={classes["actions"]}>
        <button onClick={applyChanges} className={classes["apply-button"]}>
          Apply
        </button>
        <button onClick={cancelChanges} className={classes["apply-button"]}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Country;
