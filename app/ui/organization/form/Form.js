"use client";

import React, { useReducer, useState } from "react";
import classes from "./form.module.css";
import Details from "../details/Details";
import QuotesOptions from "../quoteOptions/QuotesOptions";
import EmailIntegration from "../email-Integration/EmailIntegration";
import { intialValue, organizationReducer } from "./dataAndReducer";

const Form = () => {
  const applyChanges = () => {};
  const cancelChanges = () => {};
  const [data, dispatchDetail] = useReducer(organizationReducer, intialValue);
  const [dataType, setDataType] = useState("Details");
  return (
    <div className={classes["conatiner"]}>
      <input
        value={data.organization_name}
        onChange={(e) => {
          dispatchDetail({
            type: "NAME",
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <div className={classes["data-types"]}>
        <p
          onClick={() => {
            setDataType("Details");
          }}
          className={classes["data-type"]}
        >
          Details
        </p>
        <p
          onClick={() => {
            setDataType("Quote Options");
          }}
          className={classes["data-type"]}
        >
          Quote Options
        </p>
        <p
          onClick={() => {
            setDataType("Email Integration");
          }}
          className={classes["data-type"]}
        >
          Email Integration
        </p>
      </div>
      {dataType === "Details" ? (
        <Details data={data.details} dispatchDetail={dispatchDetail} />
      ) : dataType === "Quote Options" ? (
        <QuotesOptions
          data={data.quote_options}
          dispatchDetail={dispatchDetail}
        />
      ) : (
        <EmailIntegration
          data={data.email_integration}
          dispatchDetail={dispatchDetail}
        />
      )}
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

export default Form;
