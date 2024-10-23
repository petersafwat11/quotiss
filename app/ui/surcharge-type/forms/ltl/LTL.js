import React from "react";
import classes from "./ltl.module.css";
import CheckBoxFilter from "@/app/ui/checkboxFilter/CheckBoxFilter";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
import CheckboxGroup from "@/app/ui/inputs/checkboxGroup/CheckboxGroup";
const LTL = ({ data, dispatchDetail }) => {
  const options = ["additional", "basic", "vip", "quotiss only"];
  return (
    <div className="sub-form">
      <SelectionGroup
        data={data}
        type={"ltl"}
        dataKey={"surchargeType"}
        label={"Please Select type"}
        options={options}
        setData={dispatchDetail}
      />{" "}
      <div className={classes["checkbox-group"]}>
        <CheckboxGroup
          data={data}
          type={"ltl"}
          dataKey={"mandatory"}
          label={"[mandatory] Surcharge is mandatory"}
          setData={dispatchDetail}
        />
        <CheckboxGroup
          data={data}
          type={"ltl"}
          dataKey={"uber"}
          label={"[uber] Surcharge needs to be present in all connected rates"}
          setData={dispatchDetail}
        />
        <CheckboxGroup
          data={data}
          type={"ltl"}
          dataKey={"noMargin"}
          label={"[no margin] Surcharge counted without margin"}
          setData={dispatchDetail}
        />
        {/* <CheckBoxFilter title={"[mandatory] Surcharge is mandatory"} />
        <CheckBoxFilter
          title={"[uber] Surcharge needs to be present in all connected rates"}
        />
        <CheckBoxFilter
          title={"[no margin] Surcharge counted without margin"}
        /> */}
      </div>
    </div>
  );
};

export default LTL;
