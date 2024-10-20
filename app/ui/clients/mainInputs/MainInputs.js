import React from "react";
import classes from "./mainInputs.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
const MainInputs = ({ data, dispatchDetail }) => {
  const options = [
    "Linked",
    "Flat",
    "Pick up Delivery (by zipcode)",
    "Pick up Delivery (by distance)",
  ];
  const statusOptions = ["Potentials", "Active", "Blocked"];
  const salesRepOptions = ["Venkat Sri"];
  const accountOwnerOptions = ["Venkat Sri"];
  const paymentTermOptions = [
    "None",
    "To be confirmed",
    "Prepayment",
    "As agreed",
    "Before Cargo Release",
    "1 day",
    "2 days",
    "3 days",
    "4 days",
    "5 days",
    "6 days",
    "7 days",
    "8 days",
    "9 days",
    "10 days",
    "11 days",
    "12 days",
    "13 days",
    "14 days",
    "15 days",
    "16 days",
    "17 days",
    "18 days",
    "19 days",
    "20 days",
    "21 days",
    "22 days",
    "23 days",
    "24 days",
    "25 days",
    "26 days",
    "27 days",
    "28 days",
    "29 days",
    "30 days",
    "31 days",
    "32 days",
    "33 days",
    "34 days",
    "35 days",
    "36 days",
    "37 days",
    "38 days",
    "39 days",
    "40 days",
    "41 days",
    "42 days",
    "43 days",
    "44 days",
    "45 days",
    "46 days",
    "47 days",
    "48 days",
    "49 days",
    "50 days",
    "51 days",
    "52 days",
    "53 days",
    "54 days",
    "55 days",
    "56 days",
    "57 days",
    "58 days",
    "59 days",
    "60 days",
    "61 days",
    "62 days",
    "63 days",
    "64 days",
    "65 days",
    "66 days",
    "67 days",
    "68 days",
    "69 days",
    "70 days",
    "71 days",
    "72 days",
    "73 days",
    "74 days",
    "75 days",
    "76 days",
    "77 days",
    "78 days",
    "79 days",
    "80 days",
    "81 days",
    "82 days",
    "83 days",
    "84 days",
    "85 days",
    "86 days",
    "87 days",
    "88 days",
    "89 days",
    "90 days",
  ];
  return (
    <div className={classes["inputs"]}>
      {/* client_contacts: "", client_details: "", */}
      <InputGroup
        id={"taxpayer_identification_number"}
        label={"Taxpayer Identification Number"}
        data={data.taxpayer_identification_number}
        dataKey={"taxpayer_identification_number"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
      />
      <SelectionGroup
        data={data}
        type={"organization_type"}
        dataKey={"organization_type"}
        label={"Organization Type "}
        options={options}
        setData={dispatchDetail}
        dataType={"single"}
      />
      <InputGroup
        id={"organization_name"}
        label={"Organization name"}
        data={data.organization_name}
        dataKey={"organization_name"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
      />
      <InputGroup
        id={"hashtags"}
        label={"Hashtags"}
        data={data.hashtags}
        dataKey={"hashtags"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
      />
      {/* <InputGroup
        id={"hashtags"}
        label={"Hashtags"}
        data={data}
        dataKey={"hashtags"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
      /> */}
      <InputGroup
        id={"offer_language"}
        label={"Offer Language"}
        data={data.offer_language}
        dataKey={"offer_language"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
      />
      <SelectionGroup
        data={data}
        type={"status"}
        dataKey={"status"}
        label={"Status "}
        options={statusOptions}
        setData={dispatchDetail}
        dataType={"single"}
      />
      <SelectionGroup
        data={data}
        type={"sales_rep"}
        dataKey={"sales_rep"}
        label={"Sales Rep."}
        options={salesRepOptions}
        setData={dispatchDetail}
        dataType={"single"}
      />
      <SelectionGroup
        data={data}
        type={"account_owner"}
        dataKey={"account_owner"}
        label={"Account Owner "}
        options={accountOwnerOptions}
        setData={dispatchDetail}
        dataType={"single"}
      />
      <SelectionGroup
        data={data}
        type={"payment_term"}
        dataKey={"payment_term"}
        label={"Payment Term"}
        options={paymentTermOptions}
        setData={dispatchDetail}
        dataType={"single"}
      />
    </div>
  );
};

export default MainInputs;
