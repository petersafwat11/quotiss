import React from "react";
import classes from './quotesOptions.module.css'
const QuotesOptions = ({ data, dispatchDetail }) => {
  return (

    <div className={classes["container"]}>
      <div className={classes["input-wrapper"]}>
        <input
          value={data.show_service_name_for_freight}
          onChange={(e) => {
            dispatchDetail({
              type: "QUOTEOPTIONS",
              value: { ...data, show_service_name_for_freight: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
        <input
          value={data.main_currency}
          onChange={(e) => {
            dispatchDetail({
              type: "QUOTEOPTIONS",
              value: { ...data, main_currency: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
      </div>
      <div className={classes["input-wrapper"]}>
        <input
          value={data.insurance_value_multiplier}
          onChange={(e) => {
            dispatchDetail({
              type: "QUOTEOPTIONS",
              value: { ...data, insurance_value_multiplier: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
        <input
          value={data.insurance_rate}
          onChange={(e) => {
            dispatchDetail({
              type: "QUOTEOPTIONS",
              value: { ...data, insurance_rate: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
      </div>
      <div className={classes["input-wrapper"]}>
        <input
          value={data.insurance_min_value}
          onChange={(e) => {
            dispatchDetail({
              type: "QUOTEOPTIONS",
              value: { ...data, insurance_min_value: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
        <input
          value={data.insurance_min_value_currency}
          onChange={(e) => {
            dispatchDetail({
              type: "QUOTEOPTIONS",
              value: { ...data, insurance_min_value_currency: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
      </div>
    </div>
  );
};

export default QuotesOptions;
