import React from "react";
import classes from "./EmailIntegration.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import CheckboxGroup from "../../inputs/checkboxGroup/CheckboxGroup";
const EmailIntegration = ({ data, dispatchDetail }) => {
  console.log("email_integration".toLocaleUpperCase());
  const encryptionOptions = ["none", "ssl", "tls"];
  const authModeOptions = ["none", "cramMd5", "login", "plain"];
  return (
    <div className={"sub-form"}>
      <CheckboxGroup
        data={data}
        type={"EMAIL_INTEGRATION"}
        dataKey={"use_SSL"}
        label={"Use SSL:"}
        setData={dispatchDetail}
      />

      <div className={classes["inputs"]}>
        <div className={classes["first"]}>
          <SelectionGroup
            data={data}
            type={"EMAIL_INTEGRATION"}
            dataKey={"auth_mode"}
            label={"Auth Mode:"}
            options={authModeOptions}
            setData={dispatchDetail}
          />
          <InputGroup
            id={"SMTP_host"}
            label={"SMTP Host:"}
            dataKey={"SMTP_host"}
            objectType={"email_integration"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />
          <InputGroup
            id={"Imap_host"}
            label={"Imap Host:"}
            dataKey={"Imap_host"}
            objectType={"email_integration"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />
        </div>
        <div className={classes["second"]}>
          <SelectionGroup
            data={data}
            type={"EMAIL_INTEGRATION"}
            dataKey={"encryption"}
            label={"Encryption:"}
            options={encryptionOptions}
            setData={dispatchDetail}
          />
          <InputGroup
            id={"SMTP_port"}
            label={"SMTP Port:"}
            dataKey={"SMTP_port"}
            objectType={"email_integration"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />
          <InputGroup
            id={"Imap_port"}
            label={"Imap Port:"}
            dataKey={"Imap_port"}
            objectType={"email_integration"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailIntegration;
