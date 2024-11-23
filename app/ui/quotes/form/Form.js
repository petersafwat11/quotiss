"use client";
import React, { useReducer, useState } from "react";
import classes from "./form.module.css";
import { intialValue, ratesReducer } from "./dataAndReducer";
import MainInputs from "../mainInputs/MainInputs";
import Tabs from "../../tabs/Tabs";
import Quote from "../quote/Quote";
import Layout from "../layout/Layout";
import Email from "../email/Email";
import LCLfreight from "../frieghts/LCLfreight/LCLfreight";
import AIRfreight from "../frieghts/AIRfreight/AIRfreight";
import AIRTARIFF from "../frieghts/AIRTARIFFfreight/AIRTARIFF";
import LTLfreight from "../frieghts/LTLfreight/LTLfreight";
import FCLFreight from "../frieghts/FCLfreight/FCLFreight";
import FTLfreight from "../frieghts/FTLfreight/FTLfreight";

const Form = () => {
  const [data, dispatchDetail] = useReducer(ratesReducer, intialValue);
  const [dataType, setDataType] = useState("Quote");

  return (
    <div className={"form"}>
      <MainInputs dispatchDetail={dispatchDetail} data={data} />
      <Tabs
        types={["Quote", "Layout", "Email", "Freight", "Charges"]}
        setDataType={setDataType}
        dataType={dataType}
      />
      {dataType === "Quote" ? (
        <Quote data={data.quote} dispatchDetail={dispatchDetail} />
      ) : dataType === "Layout" ? (
        <Layout data={data.layout} dispatchDetail={dispatchDetail} />
      ) : dataType === "Freight" ? (
        data?.quote_type === "FCL" ? (
          <FCLFreight
            data={data.fcl_freight}
            dispatchDetail={dispatchDetail}
            selectedOptions={data?.container_type}
          />
        ) : data?.quote_type === "LCL" ? (
          <LCLfreight data={data.lcl_freight} dispatchDetail={dispatchDetail} />
        ) : data?.quote_type === "AIR" ? (
          <AIRfreight data={data.air_freight} dispatchDetail={dispatchDetail} />
        ) : data?.quote_type === "AIRTARIFF" ? (
          <AIRTARIFF data={data.airtariff_freight} dispatchDetail={dispatchDetail} />
        ) : data?.quote_type === "LTL" ? (
          <LTLfreight data={data.ltl_freight} dispatchDetail={dispatchDetail} />
        ) : data?.quote_type === "FTL" ? (
          <FTLfreight data={data.ftl_freight} dispatchDetail={dispatchDetail} />
        ) : (
          ""
        )
      ) : (
        <Email data={data.email} dispatchDetail={dispatchDetail} />
      )}
    </div>
  );
};

export default Form;
