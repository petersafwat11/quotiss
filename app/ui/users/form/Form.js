"use client";
import React, { useReducer, useState } from "react";
import classes from "./form.module.css";
import Details from "../details/Details";
import QuotesOptions from "../quoteOptions/QuotesOptions";
import EmailIntegration from "../email-Integration/EmailIntegration";
import { intialValue, organizationReducer } from "./dataAndReducer";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import Tabs from "../../tabs/Tabs";
import ActionBtns from "../../actionBtns/ActionBtns";
import CheckboxGroup from "../../inputs/checkboxGroup/CheckboxGroup";
import DateInput from "../../inputs/dateInput/DateInput";

const Form = () => {
  const applyChanges = async () => {
    // if (id === "create") {
    // await createItem("organization", data, router);
    // } else {
    //   await updateItem("margins", data, router, id);
    // }
  };
  const cancelChanges = () => {};
  const [data, dispatchDetail] = useReducer(organizationReducer, intialValue);
  const [dataType, setDataType] = useState("Details");
  return (
    <div className={classes["container"]}>
      <div className={"form"}>
        <div className={classes["inputs"]}>
          <InputGroup
            id={"user_email"}
            label={"Email"}
            data={data.name}
            dataKey={"user_email"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            id={"user_name"}
            label={"Name"}
            data={data.user_name}
            dataKey={"user_name"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />

          <InputGroup
            id={"user_pwd"}
            label={"Password"}
            data={data.user_pwd}
            dataKey={"user_pwd"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            id={"user_company"}
            label={"Company"}
            data={data.user_company}
            dataKey={"user_company"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            id={"user_location"}
            label={"Location"}
            data={data.user_location}
            dataKey={"user_location"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          {/* <InputGroup
          id={"user_avatar"}
          label={"Select an Avatar"}
          data={data.user_avatar}
          dataKey={"user_avatar"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="single"
        /> */}
          <CheckboxGroup
            data={data}
            type={"user_active"}
            dataKey={"user_active"}
            label={"Active"}
            setData={dispatchDetail}
            dataType={"single"}
          />
          <DateInput
            label={"Vaild date"}
            data={data.user_valid_date}
            dataKey={"user_valid_date"}
            setData={dispatchDetail}
          />
        </div>
      </div>
      <ActionBtns applyChanges={applyChanges} />
    </div>
  );
};

export default Form;
