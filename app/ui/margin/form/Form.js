"use client";
import React, { useEffect, useState } from "react";
import classes from "./form.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import TextAreaGroup from "../../inputs/textareaGroup/TextAreaGroup";

const Form = ({ type }) => {
  const [data, setData] = useState({
    name: "",
    "Weight / Measurement": "",
    description: "",
    type: type,
  });
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return (
    <div className={"form"}>
      <InputGroup
        id={"main-margin"}
        label={"Margin name"}
        data={data}
        dataKey={"name"}
        setData={setData}
        stateType={"useState"}
      />
      <InputGroup
        id={"w-m"}
        label={"Weight / Measurement"}
        data={data}
        dataKey={"Weight / Measurement"}
        setData={setData}
        stateType={"useState"}
      />
      <TextAreaGroup
        id={"description"}
        label={"Description"}
        data={data}
        dataKey={"description"}
        setData={setData}
        stateType={"useState"}
      />
    </div>
  );
};

export default Form;
