import React from "react";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import RichText from "../../inputs/richTextGroup/RichTextGroup";
import TextAreaGroup from "../../inputs/textareaGroup/TextAreaGroup";
import classes from "./email.module.css";
const Email = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["email"]}>
      <div className={classes["first"]}>
        <InputGroup
          id={"recipient_to"}
          label={"To:"}
          dataKey={"recipient_to"}
          objectType={"email"}
          data={data}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
        />
        <InputGroup
          id={"cc"}
          label={"CC:"}
          dataKey={"cc"}
          objectType={"email"}
          data={data}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
        />
        <InputGroup
          id={"bcc"}
          label={"BCC:"}
          dataKey={"bcc"}
          objectType={"email"}
          data={data}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
        />
        <InputGroup
          id={"subject"}
          label={"Subject:"}
          dataKey={"subject"}
          objectType={"email"}
          data={data}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
        />
        <div className={classes["rich-text-wrapper"]}>
          <p className={classes["label"]}>Message:</p>
          <RichText />
        </div>
      </div>
      <div className={classes["second"]}></div>
    </div>
  );
};

export default Email;
