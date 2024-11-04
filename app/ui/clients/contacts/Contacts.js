import React from "react";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import Table from "./table/Table";
import classes from "./contacts.module.css";
const Contacts = ({ data, dispatchDetail }) => {
  return (
    <div className="sub-form">
      <div className={classes["inputs"]}>
        <InputGroup
          id={"country"}
          label={"Country"}
          dataKey={"country"}
          objectType={"contacts"}
          data={data}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
        />
        <InputGroup
          id={"postal_code"}
          label={"Postal Code"}
          dataKey={"postal_code"}
          objectType={"contacts"}
          data={data}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
        />
        <InputGroup
          id={"city"}
          label={"City"}
          dataKey={"city"}
          objectType={"contacts"}
          data={data}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
        />
        <InputGroup
          id={"street"}
          label={"Street"}
          dataKey={"street"}
          objectType={"contacts"}
          data={data}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
        />
        <InputGroup
          id={"bank_details"}
          label={"E-mail greetings"}
          dataKey={"bank_details"}
          objectType={"contacts"}
          data={data}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
        />
      </div>
      <Table data={data} dispatchDetail={dispatchDetail} />
    </div>
  );
};

export default Contacts;
