import { useReducer } from "react";
import {
  FCLIntial,
  holidaysReducer,
  intialValue,
  LCLIntial,
} from "./dataAndReducer";
import classes from "./makeSurcharge.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import CheckboxGroup from "@/app/ui/inputs/checkboxGroup/CheckboxGroup";
import { currencies } from "@/app/utils/options";

const MakeSurcharge = ({
  toggleAddSurcharge,
  applyChanges,
  itemData,
  type,
}) => {
  const typesOptions = ["distination", "origin", "both"];
  const servicesOptions = [
    "All",
    "MSC",
    "Maersk Line",
    "Hapag-Lloyd",
    "CMA CGM",
    "COSCO",
    "Evergreen",
    "OOCL",
    "Yang Ming",
    "Hamburg Süd",
    "HMM Hyundai",
    "PIL",
    "Zim",
    "Wan Hai",
    "X-Press Feeders",
    "Arkas Line",
    "TS Lines",
    "Zhonggu Shipping",
    "APL",
    "Other",
    "2M",
    "THE Alliance",
    "Ocean Alliance",
    "Seago Line",
  ];
  const FCLOptions = [
    "20' DC",
    "40' DC",
    "40' HC",
    "45' HC",
    "20' NOR",
    "40' NOR",
    "20' REEF",
    "40' HREEF",
    "45' PLWD",
    "20' OT",
    "40' OT",
    "20' FR",
    "40' FR",
    "20' TANK",
    "40' TANK",
  ];
  const LCLOptions = [
    "Weight (kg)",
    "Measurement",
    "Shipment",
    "Piece",
    "Document",
    "Min",
    "Max",
  ];

  const [data, dispatchDetail] = useReducer(
    holidaysReducer,
    itemData
      ? itemData
      : type === "FCL"
      ? { ...intialValue, ...FCLOptions }
      : { ...intialValue, ...LCLOptions }
  );
  return (
    <div className={classes["form"]}>
      <div className={classes["name"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            // numbersOnly={true}
            noLabel={true}
            id={"name"}
            data={data.name}
            dataKey={"name"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["surcharge_type"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"surcharge_type"}
            dataKey={"surcharge_type"}
            label={"Select"}
            options={servicesOptions}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>

      <div className={classes["service"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            data={data}
            type={"type"}
            dataKey={"type"}
            label={""}
            options={typesOptions}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["online"]}>
        <div className={classes["input-wrapper"]}>
          <CheckboxGroup
            data={data}
            type={"online"}
            dataKey={"online"}
            // label={"Online"}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>

      <div className={classes["service"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            data={data}
            type={"service"}
            dataKey={"service"}
            label={""}
            options={servicesOptions}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["sort_order"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            numbersOnly={true}
            noLabel={true}
            id={"name"}
            data={data.sort_order}
            dataKey={"sort_order"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["shipment"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            numbersOnly={true}
            noLabel={true}
            id={"shipment"}
            data={data.shipment}
            dataKey={"shipment"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["currency"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            data={data}
            type={"currency"}
            dataKey={"currency"}
            label={""}
            options={currencies}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>
      {/* dynamic options */}
      {/* <div className={classes["origin-country"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            // numbersOnly={true}
            noLabel={true}
            id={"name"}
            data={data.name}
            dataKey={"name"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div> */}

      {/* {Object.keys(intialValue)
        .slice(3)
        .map((month, index) => (
          <div key={index} className={classes["month"]}>
            <div className={classes["input-wrapper"]}>
              <InputGroup
                numbersOnly={true}
                noLabel={true}
                id={month}
                label={month}
                data={data[month]}
                dataKey={month}
                setData={dispatchDetail}
                stateType={"useReducer"}
                dataType="single"
              />
            </div>
          </div>
        ))} */}
      <div className={classes["actions"]}>
        <div
          onClick={() => {
            applyChanges(data);
          }}
          className={classes["apply-div"]}
        >
          <IoCheckmarkSharp className={classes["apply-icon"]} />
        </div>
        <div onClick={toggleAddSurcharge} className={classes["cancel-div"]}>
          <FaXmark className={classes["cancel-icon"]} />
        </div>
      </div>
    </div>
  );
};

export default MakeSurcharge;
