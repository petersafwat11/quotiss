import React from "react";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import RichText from "../../inputs/richTextGroup/RichTextGroup";
import TextAreaGroup from "../../inputs/textareaGroup/TextAreaGroup";
import classes from "./email.module.css";
const Email = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["email"]}>
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
      <p className={classes["text"]}>petersafwat640@gmail.com</p>

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
      <p className={classes["text"]}>petersafwat640@gmail.com</p>

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
      <p className={classes["text"]}>petersafwat640@gmail.com</p>

      {/* <div className={classes["rich-text-wrapper"]}>
          <p className={classes["label"]}>Subject:</p>
          <RichText
            data={data}
            dataKey={"subject"}
            type={"email"}
            setData={dispatchDetail}
            dataType={"object"}
          />
        </div> */}

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
      <p className={classes["text"]}>petersafwat640@gmail.com</p>

      <div className={classes["rich-text-wrapper"]}>
        <p className={classes["label"]}>Message:</p>
        <RichText
          data={data}
          dataKey={"message"}
          type={"email"}
          setData={dispatchDetail}
          dataType={"object"}
        />
      </div>
    </div>
  );
};

export default Email;
