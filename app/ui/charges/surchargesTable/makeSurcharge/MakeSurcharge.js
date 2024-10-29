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
import { formatContainer } from "@/app/lib/formatText";

const MakeSurcharge = ({
  toggleAddSurcharge,
  applyChanges,
  itemData,
  type,
  selectedOptions,
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
  // const FCLOptions = [
  //   "20' DC",
  //   "40' DC",
  //   "40' HC",
  //   "45' HC",
  //   "20' NOR",
  //   "40' NOR",
  //   "20' REEF",
  //   "40' HREEF",
  //   "45' PLWD",
  //   "20' OT",
  //   "40' OT",
  //   "20' FR",
  //   "40' FR",
  //   "20' TANK",
  //   "40' TANK",
  // ];
  const LCLTableInputs = [
    "weight",
    "measurement",
    "piece",
    "document",
    "min",
    "max",
  ];
  // console.log(formatContainer("40' FR", "xxxxxxxxxxxxxxxx"));
  const [data, dispatchDetail] = useReducer(
    holidaysReducer,
    itemData
      ? itemData
      : type === "FCL"
      ? { ...intialValue, ...FCLIntial }
      : { ...intialValue, ...LCLIntial }
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

      <div className={classes["type"]}>
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
            id={"sort_order"}
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
      {type === "FCL"
        ? selectedOptions.map((item, index) => (
            <div key={index} className={classes["container-type"]}>
              <div className={classes["input-wrapper"]}>
                <InputGroup
                  numbersOnly={true}
                  noLabel={true}
                  id={formatContainer(item)}
                  data={data[formatContainer(item)]}
                  dataKey={formatContainer(item)}
                  setData={dispatchDetail}
                  stateType={"useReducer"}
                  dataType="single"
                />
              </div>
            </div>
          ))
        : LCLTableInputs.map((item, index) => (
            <div key={index} className={classes[item]}>
              <div className={classes["input-wrapper"]}>
                <InputGroup
                  numbersOnly={true}
                  noLabel={true}
                  id={item}
                  label={item}
                  data={data[item]}
                  dataKey={item}
                  setData={dispatchDetail}
                  stateType={"useReducer"}
                  dataType="single"
                />
              </div>
            </div>
          ))}
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

      <div className={classes["actions"]}>
        <div
          onClick={() => {
            applyChanges(data);
            toggleAddSurcharge();
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
