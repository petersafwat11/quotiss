import React, { useEffect } from "react";
import classes from "./termsAndConditions.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import RichText from "../../inputs/richTextGroup/RichTextGroup";
const TermsAndConditions = ({ data, dispatchDetail, type }) => {
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
  useEffect(() => {
    dispatchDetail({
      type: "terms_and_conditions".toUpperCase(),
      value: { ...data, type: type },
    });
  }, [type, data, dispatchDetail]);
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
      {data.language.length > 0 && (
        <>
          <div className={classes["rich-text"]}>
            <p className={classes["label"]}>
              FCL Destination Terms & Conditions
            </p>
            <RichText
              data={data}
              dataKey={"destination_terms_and_conditions"}
              type={"terms_and_conditions"}
              setData={dispatchDetail}
              dataType={"object"}
            />
          </div>
          <div className={classes["rich-text"]}>
            <p className={classes["label"]}>FCL Origin Terms & Conditions</p>
            <RichText
              data={data}
              dataKey={"origin_terms_and_conditions"}
              type={"terms_and_conditions"}
              setData={dispatchDetail}
              dataType={"object"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TermsAndConditions;
