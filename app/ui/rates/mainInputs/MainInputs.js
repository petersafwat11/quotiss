import React from "react";
import classes from "./mainInputs.module.css";
const MainInputs = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["inputs"]}>
      <input
        value={data.name}
        onChange={(e) => {
          dispatchDetail({
            type: "NAME",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.service}
        onChange={(e) => {
          dispatchDetail({
            type: "SERVICE",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.rate_type}
        onChange={(e) => {
          dispatchDetail({
            type: "RATE_TYPE",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.validity_start}
        onChange={(e) => {
          dispatchDetail({
            type: "VALIDITY_START",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.validity_end}
        onChange={(e) => {
          dispatchDetail({
            type: "VALIDITY_END",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.container_type}
        onChange={(e) => {
          dispatchDetail({
            type: "CONTAINER_TYPE",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      {/* conditional */}
      <input
        value={data.contract_number}
        onChange={(e) => {
          dispatchDetail({
            type: "CONTRACT_NUMBER",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.pickup_delivery_rate}
        onChange={(e) => {
          dispatchDetail({
            type: "PICKUP_DELIVERY_RATE",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.origin}
        onChange={(e) => {
          dispatchDetail({
            type: "ORIGIN",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.destination}
        onChange={(e) => {
          dispatchDetail({
            type: "DESTINATION",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.direction}
        onChange={(e) => {
          dispatchDetail({
            type: "DIRECTION",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.currency}
        onChange={(e) => {
          dispatchDetail({
            type: "CURRENCY",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.mark_up}
        onChange={(e) => {
          dispatchDetail({
            type: "MARK_UP",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.online}
        onChange={(e) => {
          dispatchDetail({
            type: "ONLINE",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
    </div>
  );
};

export default MainInputs;
