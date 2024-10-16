"use client";
import React, { useReducer, useState } from "react";
import classes from "./form.module.css";
import Details from "../details/Details";
import QuotesOptions from "../quoteOptions/QuotesOptions";
import EmailIntegration from "../email-Integration/EmailIntegration";
import { intialValue, organizationReducer } from "./dataAndReducer";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import Tabs from "../../tabs/Tabs";

const Form = () => {
  const applyChanges = () => {};
  const cancelChanges = () => {};
  const [data, dispatchDetail] = useReducer(organizationReducer, intialValue);
  const [dataType, setDataType] = useState("Details");
  return (
    <div className={"form"}>
      <InputGroup
        id={"name"}
        label={"Organization name"}
        data={data.name}
        dataKey={"name"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
      />
      <Tabs
        types={["Details", "Quote Options", "Email Integration"]}
        setDataType={setDataType}
        dataType={dataType}
      />
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
    </div>
  );
};

export default Form;
