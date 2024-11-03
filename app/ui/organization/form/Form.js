"use client";
import React, { useEffect, useReducer, useState } from "react";
import classes from "./form.module.css";
import Details from "../details/Details";
import QuotesOptions from "../quoteOptions/QuotesOptions";
import EmailIntegration from "../email-Integration/EmailIntegration";
import { intialValue, organizationReducer } from "./dataAndReducer";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import Tabs from "../../tabs/Tabs";
import ActionBtns from "../../actionBtns/ActionBtns";
import { createItem, updateItem } from "@/app/lib/formFunctions";
import { useRouter } from "next/navigation";

const Form = ({ formData }) => {
  const usableData = formData?.data?.data[0];

  const router = useRouter();
  const applyChanges = async () => {
    const id = data?.id;
    if (!id) {
      await createItem("organization", data, router);
    } else {
      await updateItem("organization", data, router, id);
    }
  };
  const [data, dispatchDetail] = useReducer(
    organizationReducer,
    usableData ? usableData : intialValue
  );
  const [dataType, setDataType] = useState("Details");
  useEffect(() => {
    const usableData = formData?.data?.data[0];
    usableData
      ? dispatchDetail({
          type: "UPDATE-ALL",
          value: usableData,
        })
      : "";
  }, [formData]);

  return (
    <div className={classes["container"]}>
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
      <ActionBtns applyChanges={applyChanges} />
    </div>
  );
};

export default Form;
