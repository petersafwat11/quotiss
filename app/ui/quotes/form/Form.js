"use client";
import React, { useReducer, useState } from "react";
import classes from "./form.module.css";
import { intialValue, ratesReducer } from "./dataAndReducer";
import MainInputs from "../mainInputs/MainInputs";
import Tabs from "../../tabs/Tabs";
import Quote from "../quote/Quote";
import Layout from "../layout/Layout";
import Email from "../email/Email";

const Form = () => {
  const [data, dispatchDetail] = useReducer(ratesReducer, intialValue);
  const [dataType, setDataType] = useState("Quote");

  return (
    <div className={"form"}>
      <MainInputs dispatchDetail={dispatchDetail} data={data} />
      <Tabs
        types={["Quote", "Layout", "Email"]}
        setDataType={setDataType}
        dataType={dataType}
      />
      {dataType === "Quote" ? (
        <Quote data={data.quote} dispatchDetail={dispatchDetail} />
      ) : dataType === "Layout" ? (
        <Layout data={data.layout} dispatchDetail={dispatchDetail} />
      ) : (
        <Email data={data.email} dispatchDetail={dispatchDetail} />
      )}
    </div>
  );
};

export default Form;
