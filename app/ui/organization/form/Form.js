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
import Cookies from "js-cookie";
import axios from "axios";

const Form = () => {
  let user = Cookies.get("user");
  user = user && JSON.parse(user);
  const { company, entity_code } = user;

  const router = useRouter();
  const applyChanges = async () => {
    const id = data?.id;
    if (!id) {
      await createItem("organization", data, router);
    } else {
      await updateItem("organization", data, router, id);
    }
  };
  const cancelChanges = () => {};
  const [data, dispatchDetail] = useReducer(organizationReducer, intialValue);
  const [dataType, setDataType] = useState("Details");
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_SERVER}/organization`,
          {
            params: {
              company: company,
              entity_code: entity_code,
            },
          }
        );
        console.log("response", response?.data?.data?.data[0]);
        const data = response?.data?.data?.data[0];
        data
          ? dispatchDetail({
              type: "UPDATE-ALL",
              value: data,
            })
          : "";
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
  }, [company, entity_code]);
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
