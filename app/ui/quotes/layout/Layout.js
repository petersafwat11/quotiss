import React from "react";
import CheckboxGroup from "../../inputs/checkboxGroup/CheckboxGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import classes from "./layout.module.css";
import EmailLayout from "./emailLayout/EmailLayout";
const Layout = ({ data, dispatchDetail }) => {
  const options = [
    "Manual",
    "FCL -sea",
    "FCL - rail",
    "LCL - sea",
    "LCL - rail",
    "LTL",
    "FTL",
    "AIR",
  ];
  return (
    <div className={classes["layout"]}>
      <div className={classes["first"]}>
        <div className={classes["input-wrapper"]}>
          <p className={classes["title"]}> Quote layout options</p>
          <div className={classes["selection-wrapper"]}>
            <SelectionGroup
              type={"layout"}
              dataKey={"terms_and_conditions"}
              label={"Select Terms & Conditions: "}
              options={options}
              data={data}
              setData={dispatchDetail}
              dataType="object"
            />
          </div>
        </div>
        <CheckboxGroup
          data={data}
          type={"layout"}
          dataKey={"modify"}
          label={"Modify Terms & Conditions"}
          setData={dispatchDetail}
        />
      </div>
      <div className={classes["second"]}>
        <EmailLayout
          data={{
            date: "20-10-2024",
            client: {
              name: "Coco Toys (sample)",
              address: "33 Tor Str. 80-001 Berlin",
              tax_id: " 111111111111",
            },
            author: {
              name: "Venkat Sri",
              email: "venkat.sri@jglww.com",
              contact_number: "11223344566",
            },
            validity: { from: "20-10-2024", to: "31-10-2024" },
          }}
        />
      </div>
    </div>
  );
};

export default Layout;
