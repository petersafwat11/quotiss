"use client";
import React, { useReducer, useState } from "react";
import classes from "./forms.module.css";
import General from "./general/General";
import Translation from "./translation/Translation";
import LTL from "./ltl/LTL";
import { intialValue, surchargeReducer } from "./dataAndReducer";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import Tabs from "../../tabs/Tabs";
import ActionBtns from "../../actionBtns/ActionBtns";
import { useRouter } from "next/navigation";
import { createItem, updateItem } from "../../../lib/formFunctions";

const Form = ({ formData, id }) => {
  const router = useRouter();
  const usableData = formData?.data?.data;
  console.log("usableData", usableData);
  const [data, dispatchDetail] = useReducer(
    surchargeReducer,
    usableData ? usableData : intialValue
  );
  const [dataType, setDataType] = useState("General");
  const applyChanges = async () => {
    if (id === "create") {
      await createItem("surchargeTypes", data, router);
    } else {
      await updateItem("surchargeTypes", data, router, id);
    }
  };

  return (
    <div className={classes["container"]}>
      <div className={"form"}>
        <InputGroup
          id={"name"}
          label={"Name"}
          data={data.name}
          dataKey={"name"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="single"
        />
        <Tabs
          types={["General", "Translation", "LTL"]}
          setDataType={setDataType}
          dataType={dataType}
        />
        <div className={"otherData"}>
          {dataType === "General" ? (
            <General data={data.general} dispatchDetail={dispatchDetail} />
          ) : dataType === "Translation" ? (
            <Translation
              data={data.translation}
              dispatchDetail={dispatchDetail}
            />
          ) : (
            <LTL data={data.ltl} dispatchDetail={dispatchDetail} />
          )}
        </div>
      </div>
      <ActionBtns applyChanges={applyChanges} />
    </div>
  );
};

export default Form;
