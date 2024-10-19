import React from "react";
import classes from "./termsAndConditions.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
const TermsAndConditions = ({ data, dispatchDetail }) => {
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
    <div className={"sub-form"}>
      <SelectionGroup
        data={data}
        type={"terms_and_conditions"}
        dataKey={"language"}
        label={"Please Select Language"}
        options={languages}
        setData={dispatchDetail}
        dataType="object"
      />

      {/* <input
        value={data.language}
        onChange={(e) => {
          dispatchDetail({
            type: "TERMSANDCONDITIONS",
            value: { ...data, language: e.target.value },
          });
        }}
        className={classes["auth-mode"]}
      ></input> */}
    </div>
  );
};

export default TermsAndConditions;
