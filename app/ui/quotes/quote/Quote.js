import React from "react";
import classes from "./quote.module.css";
import RichTextGroup from "../../inputs/richTextGroup/RichTextGroup";
import InputGroup from "../../inputs/inputGroup/InputGroup";

const Quote = ({ data, dispatchDetail }) => {
  console.log("data", data);
  return (
    <div className={"sub-form"}>
      <div className={classes["note"]}>
        <RichTextGroup />
      </div>
      <div className={classes["inputs"]}>
        <InputGroup
          id={"net_price"}
          label={"Net price"}
          dataKey={"net_price"}
          objectType={"quotes"}
          data={data}
          setData={dispatchDetail}
          stateType="useReducer"
          dataType="object"
        />
        <InputGroup
          id={"margin"}
          label={"Margin"}
          data={data}
          dataKey={"margin"}
          objectType={"quotes"}
          setData={dispatchDetail}
          stateType="useReducer"
          dataType="object"
        />
        <InputGroup
          id={"total"}
          label={"Total"}
          data={data}
          dataKey={"total"}
          objectType={"quotes"}
          setData={dispatchDetail}
          stateType="useReducer"
          dataType="object"
        />
        <InputGroup
          id={"internal_notes"}
          label={"Internal Notes"}
          data={data}
          dataKey={"internal_notes"}
          objectType={"quotes"}
          setData={dispatchDetail}
          stateType="useReducer"
          dataType="object"
        />
      </div>
    </div>
  );
};

export default Quote;
