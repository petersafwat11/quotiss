import React from "react";
import classes from "./general.module.css";
const General = ({ data, dispatchDetail }) => {
  return (
    <div>
      <input
        value={data.comment}
        onChange={(e) => {
          dispatchDetail({
            type: "GENERAL",
            value: { ...data, comment: e.target.value },
          });
        }}
        className={classes["comment"]}
      ></input>
      <input
        value={data.internalDescription}
        onChange={(e) => {
          dispatchDetail({
            type: "GENERAL",
            value: { ...data, internalDescription: e.target.value },
          });
        }}
        className={classes["internal-description"]}
      ></input>
      <input
        value={data.onlineDescription}
        onChange={(e) => {
          dispatchDetail({
            type: "GENERAL",
            value: { ...data, onlineDescription: e.target.value },
          });
        }}
        className={classes["online-description"]}
      ></input>
    </div>
  );
};

export default General;
