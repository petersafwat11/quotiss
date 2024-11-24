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
import ActionBtns from "../../actionBtns/ActionBtns";
import { useRouter } from "next/navigation";
import { createItem, updateItem } from "@/app/lib/formFunctions";

const Form = ({ formData, id }) => {
  const router = useRouter();
  const usableData = formData?.data?.data;
  // const [data, setData] = useState(
  //   usableData
  //     ? usableData
  //     : {
  //         name: "",
  //         weightmeasurement: "",
  //         description: "",
  //         type: type,
  //       }
  // );

  const applyChanges = async () => {
    if (id === "create") {
      await createItem("margins", data, router);
    } else {
      await updateItem("margins", data, router, id);
    }
  };

  const [data, dispatchDetail] = useReducer(clientsReducer, intialValue);
  const [dataType, setDataType] = useState("Dashboard");
  const [created, setCreated] = useState(false);
  return (
    <div className={classes["container"]}>
      <div className={"form"}>
        <MainInputs dispatchDetail={dispatchDetail} data={data} />
        {created && (
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
        )}
        {created ? (
          dataType === "Margin" ? (
            <Margin data={data.margins} dispatchDetail={dispatchDetail} />
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
            <PotentialsTable
              data={data.potentials}
              dispatchDetail={dispatchDetail}
            />
          ) : dataType === "Dashboard" ? (
            <Dashboard data={data.dashboard} dispatchDetail={dispatchDetail} />
          ) : (
            <Dashboard data={data.layout} dispatchDetail={dispatchDetail} />

            // <Form data={data.email} dispatchDetail={dispatchDetail} />
          )
        ) : (
          ""
        )}
      </div>
      <ActionBtns applyChanges={applyChanges} />
    </div>
  );
};

export default Form;
