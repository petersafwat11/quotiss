"use client";
import React, { useReducer, useState } from "react";
import classes from "./forms.module.css";
import General from "./general/General";
import Translation from "./translation/Translation";
import LTL from "./ltl/LTL";
import { intialValue, surchargeReducer } from "./dataAndReducer";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import Tabs from "../../tabs/Tabs";

const Form = () => {
  const [data, dispatchDetail] = useReducer(surchargeReducer, intialValue);
  const [dataType, setDataType] = useState("General");
  return (
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
  );
};

export default Form;
