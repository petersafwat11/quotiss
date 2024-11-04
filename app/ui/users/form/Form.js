"use client";
import React, { useEffect, useReducer, useState } from "react";
import classes from "./form.module.css";
import { intialValue, organizationReducer } from "./dataAndReducer";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import ActionBtns from "../../actionBtns/ActionBtns";
import CheckboxGroup from "../../inputs/checkboxGroup/CheckboxGroup";
import DateInput from "../../inputs/dateInput/DateInput";
import { createItem, updateItem } from "@/app/lib/formFunctions";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";

const Form = ({ formData, id }) => {
  const usableData = formData?.data?.data;
  const pathname = usePathname();
  const router = useRouter();
  const cancelChanges = () => {};
  const [data, dispatchDetail] = useReducer(
    organizationReducer,
    usableData ? usableData : intialValue
  );
  // const [dataType, setDataType] = useState("Details");
  const page = pathname.slice(pathname.lastIndexOf("/") + 1);

  const applyChanges = async () => {
    const id = data?.id;
    if (page === "create") {
      await createItem("users", data, router);
    } else {
      await updateItem("users", data, router, id);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `${process.env.BACKEND_SERVER}/users/${page}`
        );

        dispatchDetail({ type: "UPDATE-ALL", value: data?.data?.data?.data });
        console.log("dara", data?.data?.data?.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
  }, [page]);
  return (
    <div className={classes["container"]}>
      <div className={"form"}>
        <div className={classes["inputs"]}>
          <InputGroup
            id={"user_email"}
            label={"Email"}
            type={"email"}
            data={data.user_email}
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
            type={"password"}
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
