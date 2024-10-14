import React from "react";
import classes from "./details.module.css";
const Details = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["left"]}>
        <input
          value={data.country}
          onChange={(e) => {
            dispatchDetail({
              type: "DETAILS",
              value: { ...data, country: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
        <input
          value={data.postal_code}
          onChange={(e) => {
            dispatchDetail({
              type: "DETAILS",
              value: { ...data, postal_code: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
        <input
          value={data.taxpayer_id_number}
          onChange={(e) => {
            dispatchDetail({
              type: "DETAILS",
              value: { ...data, taxpayer_id_number: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
        <input
          value={data.quote_collecting_email}
          onChange={(e) => {
            dispatchDetail({
              type: "DETAILS",
              value: { ...data, quote_collecting_email: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
      </div>
      <div className={classes["right"]}>
        <input
          value={data.city}
          onChange={(e) => {
            dispatchDetail({
              type: "DETAILS",
              value: { ...data, city: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
        <input
          value={data.street}
          onChange={(e) => {
            dispatchDetail({
              type: "DETAILS",
              value: { ...data, street: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
        <input
          value={data.spread}
          onChange={(e) => {
            dispatchDetail({
              type: "DETAILS",
              value: { ...data, spread: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
        <input
          value={data.ecu_account_id}
          onChange={(e) => {
            dispatchDetail({
              type: "DETAILS",
              value: { ...data, ecu_account_id: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
      </div>
      <div className={classes["logo"]}>
        <input
          value={data.logo}
          onChange={(e) => {
            dispatchDetail({
              type: "DETAILS",
              value: { ...data, logo: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
      </div>
    </div>
  );
};

export default Details;
