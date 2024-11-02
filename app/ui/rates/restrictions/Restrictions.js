import React from "react";
import classes from "./restrictions.module.css";
import SelectionCheckBoxGroup from "../../inputs/selectionCheckBoxGroup/SelectionCheckBoxGroup";
const Restrictions = ({ data, dispatchDetail }) => {
  const options = ["All clients", "peter", "saaaa"];
  return (
    <div className={classes["sub-form"]}>
      <div className={classes["input-group"]}>
        <SelectionCheckBoxGroup
          options={options}
          label={"Select clients"}
          selectedOptions={data.allowed_clients}
          setSelectedOptions={dispatchDetail}
          stateType="useReducer"
          dataType="object"
          dataKey="allowed_clients"
          objectKey="restrictions"
          data={data}
        />
      </div>
      <div className={classes["input-group"]}>
        <SelectionCheckBoxGroup
          options={options}
          label={"Select Users"}
          selectedOptions={data.allowed_clients}
          setSelectedOptions={dispatchDetail}
          stateType="useReducer"
          dataType="object"
          dataKey="allowed_clients"
          objectKey="restrictions"
          data={data}
        />
      </div>

      {/* <SelectionCheckBoxGroup
        data={data}
        dataKey={"allowed_clients"}
        options={options}
        label={"ALL Clients"}
        dispatchDetail={dispatchDetail}
        dataType={"object"}
      /> */}
      {/* <SelectionCheckBoxGroup
        data={data}
        dataKey={"allowed_users"}
        options={options}
        label={"ALL Clients"}
        dispatchDetail={dispatchDetail}
        dataType={"object"}
      /> */}
      {/* <SelectionCheckBoxGroup
        data={data}
        dataKey={"allowed_users"}
        options={options}
        label={"ALL Users"}
        dispatchDetail={dispatchDetail}
      /> */}
    </div>
  );
};

export default Restrictions;
