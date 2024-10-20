"use client";
import React, { useState } from "react";
import classes from "./form.module.css";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import RichText from "../../inputs/richTextGroup/RichTextGroup";
const Form = () => {
  const [data, setData] = useState({ language: "", termsAndConditions: "" });
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
    <div className={'form'}>
      <SelectionGroup
        data={data}
        dataKey={"language"}
        label={"Please Select Language"}
        options={languages}
        setData={setData}
        stateType={"useState"}
      />

      {/* there will be text formmater */}
      {data.language.length > 0 && (
        <div className={classes['rich-text']}>
          <RichText />
        </div>
      )}
    </div>
  );
};

export default Form;
