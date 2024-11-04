import React from "react";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import RichText from "../../inputs/richTextGroup/RichTextGroup";
import classes from "./details.module.css";
const Details = ({ data, dispatchDetail }) => {
  return (
    <div className="sub-form">
      <div className={classes["inputs"]}>
        <InputGroup
          id={"customer_id_internal"}
          label={"Customer ID (internal)"}
          dataKey={"customer_id_internal"}
          objectType={"details"}
          data={data}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
        />
        <InputGroup
          id={"bank_details"}
          label={"Bank Details"}
          dataKey={"bank_details"}
          objectType={"details"}
          data={data}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
        />
      </div>
      <div className={classes["rich-text"]}>
        <RichText
          data={data}
          dataKey={"internal_notes"}
          type={"details"}
          setData={dispatchDetail}
          dataType={"object"}
        />
      </div>
    </div>
  );
};

export default Details;
