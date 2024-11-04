"use client";
import React, { useReducer, useState } from "react";
import classes from "./form.module.css";
import MainInputs from "../mainInputs/MainInputs";
import Tabs from "../../tabs/Tabs";
import Margin from "../margin/Margin";
import Details from "../details/Details";
import Contacts from "../contacts/Contacts";
import Dashboard from "../dashboard/Dashboard";
import { clientsReducer, intialValue } from "./dataAndReducer";
import TermsAndConditions from "../termsAndConditions/TermsAndConditions";
import PotentialsTable from "../potentialsTable/PotentialsTable";

const Form = () => {
  const [data, dispatchDetail] = useReducer(clientsReducer, intialValue);
  const [dataType, setDataType] = useState("Dashboard");

  return (
    <div className={"form"}>
      <MainInputs dispatchDetail={dispatchDetail} data={data} />
      <Tabs
        types={[
          "Dashboard",
          "Potentials",
          "Contacts",
          "Details",
          "Quotes",
          "Terms & Conditions",
          "Margin",
        ]}
        setDataType={setDataType}
        dataType={dataType}
      />
      {dataType === "Margin" ? (
        <Margin data={data.margin} dispatchDetail={dispatchDetail} />
      ) : dataType === "Terms & Conditions" ? (
        <TermsAndConditions
          data={data.terms_and_conditions}
          dispatchDetail={dispatchDetail}
        />
      ) : dataType === "Details" ? (
        <Details data={data.details} dispatchDetail={dispatchDetail} />
      ) : dataType === "Contacts" ? (
        <Contacts data={data.contacts} dispatchDetail={dispatchDetail} />
      ) : dataType === "Potentials" ? (
        <PotentialsTable data={data.potentials} dispatchDetail={dispatchDetail} />
      ) : dataType === "Dashboard" ? (
        <Dashboard data={data.dashboard} dispatchDetail={dispatchDetail} />
      ) : (
        <Dashboard data={data.layout} dispatchDetail={dispatchDetail} />

        // <Form data={data.email} dispatchDetail={dispatchDetail} />
      )}
    </div>
  );
};

export default Form;
