import React, { useEffect } from "react";
import classes from "./termsAndConditions.module.css";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import RichText from "../../inputs/richTextGroup/RichTextGroup";
import axios from "axios";

const TermsAndConditions = ({ data, dispatchDetail, type, charges_id }) => {
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
    const getData = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_SERVER}/charges/termsAndConditions`,
          {
            params: {
              language: data.language,
              type: type,
              charges_id: charges_id,
            },
          }
        );
        console.log("response", response?.data?.data?.data);
        const responseData = response?.data?.data?.data;
        console.log("responseData.length", responseData.length);
        responseData.length === 0
          ? dispatchDetail({
              type: "terms_and_conditions".toUpperCase(),
              value: {
                type: type,
                language: data.language,
                destination_terms_and_conditions: "",
                origin_terms_and_conditions: "",
              },
            })
          : dispatchDetail({
              type: "terms_and_conditions".toUpperCase(),
              value: responseData[0],
            });
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
    console.log("lang", data?.language);
  }, [data.language, type, charges_id, dispatchDetail]);
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
