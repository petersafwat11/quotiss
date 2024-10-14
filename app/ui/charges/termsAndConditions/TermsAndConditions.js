import React from "react";
import classes from "./termsAndConditions.module.css";
const TermsAndConditions = ({ data, dispatchDetail }) => {
  return (
    <div className={classes}>
      <input
        value={data.language}
        onChange={(e) => {
          dispatchDetail({
            type: "TERMSANDCONDITIONS",
            value: { ...data, language: e.target.value },
          });
        }}
        className={classes["auth-mode"]}
      ></input>
    </div>
  );
};

export default TermsAndConditions;
