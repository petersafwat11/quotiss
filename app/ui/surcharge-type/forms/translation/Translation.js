import React from "react";
import classes from "./translation.module.css";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
const Translation = ({ data, dispatchDetail }) => {
  const languages = [
    "English",
    "Polish",
    "Turkish",
    "Russian",
    "German",
    "Czech",
    "Slovak",
    "Lituanian",
    "Romanian",
    "French",
    "Dutch",
    "Hungarian",
    "Italian",
    "Spanish",
    "Slovenian",
  ];
  return (
    <div className="sub-form">
      {/* remember to make selection */}
      <SelectionGroup
        data={data}
        type={"TRANSLATION"}
        dataKey={"language"}

        label={"Please Select Language"}
        options={languages}
        setData={dispatchDetail}
      />
      <InputGroup
        id={"name"}
        label={"Name"}
        dataKey={"name"}
        objectType={'translation'}

        data={data}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="object"
      />
      <InputGroup
        id={"description"}
        label={"Description (information for online clients)"}
        dataKey={"description"}
        objectType={'translation'}
        data={data}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="object"
      />
    </div>
  );
};

export default Translation;
