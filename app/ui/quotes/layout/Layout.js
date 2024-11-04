import React, { useEffect, useRef } from "react";
import CheckboxGroup from "../../inputs/checkboxGroup/CheckboxGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import classes from "./layout.module.css";
import EmailLayout from "./emailLayout/EmailLayout";
import RichText from "../../inputs/richTextGroup/RichTextGroup";
import Cookies from "js-cookie";
import axios from "axios";

const Layout = ({ data, dispatchDetail }) => {
  const options = [
    "Manual",
    "FCL-port",
    "FCL-rail",
    "LCL-port",
    "LCL-rail",
    "LTL",
    "FTL",
    "AIR",
  ];
  let user = Cookies.get("user");
  user = user && JSON.parse(user);
  const { company, entity_code } = user;
  const prevTermsType = useRef(data?.terms_and_conditions_type);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_SERVER}/termsAndConditions/one`,
          {
            params: {
              company: company,
              entity_code: entity_code,
              language: "English",
              type: data?.terms_and_conditions_type,
            },
          }
        );
        const terms = response?.data?.data?.data[0]?.termsAndConditions;
        dispatchDetail({
          type: "layout".toUpperCase(),
          value: { ...data, terms_and_conditions: terms },
        });
        // setTableData(data?.data?.data?.data);
      } catch (err) {
        console.log("err", err);
      }
    };

    if (data?.terms_and_conditions_type !== prevTermsType.current) {
      getData();
      // Update the ref to the current terms_and_conditions_type
      prevTermsType.current = data?.terms_and_conditions_type;
    }
  }, [
    data?.terms_and_conditions_type,
    company,
    entity_code,
    data,
    dispatchDetail,
  ]);
  return (
    <div className={classes["layout"]}>
      <div className={classes["first"]}>
        <div className={classes["input-wrapper"]}>
          <p className={classes["title"]}> Quote layout options</p>
          <div className={classes["selection-wrapper"]}>
            <SelectionGroup
              type={"layout"}
              dataKey={"terms_and_conditions_type"}
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
        {data?.modify && (
          <RichText
            data={data}
            dataKey={"terms_and_conditions"}
            type={"layout"}
            setData={dispatchDetail}
            dataType={"object"}
          />
        )}
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
          terms_and_conditions={data?.terms_and_conditions}
        />
      </div>
    </div>
  );
};

export default Layout;
