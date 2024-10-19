import React from "react";
import classes from "./restrictions.module.css";
import SelectionCheckBoxGroup from "../../inputs/selectionCheckBoxGroup/SelectionCheckBoxGroup";
const Restrictions = ({ data, dispatchDetail }) => {
  const options = ["All clients", "peter", "saaaa"];
  return (
    <div className={classes["container"]}>
      <SelectionCheckBoxGroup
        data={data}
        dataKey={"allowed_clients"}
        options={options}
        label={"ALL Clients"}
        dispatchDetail={dispatchDetail}
      />
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
