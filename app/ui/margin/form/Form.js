"use client";
import React, { useEffect, useState } from "react";
import classes from "./form.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import TextAreaGroup from "../../inputs/textareaGroup/TextAreaGroup";
import ActionBtns from "../../actionBtns/ActionBtns";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createItem, updateItem } from "../../../lib/formFunctions";

const Form = ({ type, formData, id }) => {
  const router = useRouter();
  const usableData = formData?.data?.data;
  const [data, setData] = useState(
    usableData
      ? usableData
      : {
          name: "",
          weightmeasurement: "",
          description: "",
          type: type,
        }
  );

  const applyChanges = async () => {
    if (id === "create") {
      await createItem("margins", data, router);
    } else {
      await updateItem("margins", data, router, id);
    }
  };
  return (
    <div className={classes["container"]}>
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
          id={"weightmeasurement"}
          label={"Weight / Measurement"}
          data={data}
          dataKey={"weightmeasurement"}
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

      <ActionBtns applyChanges={applyChanges} />
    </div>
  );
};

export default Form;
