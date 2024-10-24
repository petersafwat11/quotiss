import React from "react";
import classes from "./details.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import FileInput from "../../inputs/fileInput/FileInput";
const Details = ({ data, dispatchDetail }) => {
  return (
    <div className={"sub-form"}>
      <div className={classes["inputs"]}>
        <div className={classes["first"]}>
          <InputGroup
            id={"country"}
            label={"Country:"}
            dataKey={"country"}
            objectType={"details"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />
          <InputGroup
            id={"postal_code"}
            label={"Postal Code:"}
            dataKey={"postal_code"}
            objectType={"details"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />
          <InputGroup
            id={"taxpayer_id_number"}
            label={"Taxpayer ID Number:"}
            dataKey={"taxpayer_id_number"}
            objectType={"details"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />{" "}
          <InputGroup
            id={"quote_collecting_email"}
            label={"Quote Collecting Email (BCC):"}
            dataKey={"quote_collecting_email"}
            objectType={"details"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />
        </div>
        <div className={classes["second"]}>
          <InputGroup
            id={"city"}
            label={"City:"}
            dataKey={"city"}
            objectType={"details"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />
          <InputGroup
            id={"street"}
            label={"Street:"}
            dataKey={"street"}
            objectType={"details"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />
          <InputGroup
            id={"spread"}
            label={"Spread:"}
            dataKey={"spread"}
            objectType={"details"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />
          <InputGroup
            id={"ecu_account_id"}
            label={"Ecu Account ID:"}
            dataKey={"ecu_account_id"}
            objectType={"details"}
            data={data}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
          />
        </div>
      </div>
      {/* <FileInput /> */}
      {/* <div className={classes["logo"]}>
        <input
          value={data.logo}
          onChange={(e) => {
            dispatchDetail({
              type: "DETAILS",
              value: { ...data, logo: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
      </div> */}
    </div>
  );
};

export default Details;
