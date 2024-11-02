import { useEffect, useReducer, useState } from "react";
import { intialValue, locationReducer } from "./dataAndReducer";
import classes from "./addSurcharge.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
import { formatContainer } from "@/app/lib/formatText";
import axios from "axios";
import CheckboxGroup from "@/app/ui/inputs/checkboxGroup/CheckboxGroup";

const AddSurcharge = ({
  toggleShowComponent,
  applyChanges,
  itemData,
  selectedOptions,
  index,
}) => {
  const [data, dispatchDetail] = useReducer(
    locationReducer,
    itemData ? itemData : intialValue
  );
  const [showComment, setShowComment] = useState(false);
  const toggleComment = () => {
    setShowComment(!showComment);
  };
  const [surchargeNames, setSurchargeNames] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_SERVER}/surchrgeTypes`,
          {
            params: {
              limit: 0,
            },
          }
        );
        const data = response?.data?.data?.data;
        if (data) {
          const surchrges = data.map((item, index) => item.name);
          console.log("data", data, surchrges);
          setSurchargeNames(surchrges);
        }
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
  }, []);
  return (
    <div className={classes["form"]}>
      <div className={classes["surcharge-type"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"surcharge_typetype"}
            dataKey={"surcharge_typetype"}
            label={"Select type"}
            options={surchargeNames}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["margin-type"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"margin_type"}
            dataKey={"margin_type"}
            label={"Margin Type"}
            options={["Percent", "value"]}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["active"]}>
        <div className={classes["input-wrapper"]}>
          <div className={classes["checkbox-wrapper"]}>
            <CheckboxGroup
              data={data}
              type={"active"}
              dataKey={"active"}
              // label={"Online"}
              setData={dispatchDetail}
              dataType="single"
            />
          </div>
        </div>
      </div>
      <div className={classes["min-price"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            numbersOnly={true}
            noLabel={true}
            id={"min_price"}
            data={data["min_price"]}
            dataKey={"min_price"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["max-price"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            numbersOnly={true}
            noLabel={true}
            id={"max_price"}
            data={data["max_price"]}
            dataKey={"max_price"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      {selectedOptions.length > 0 &&
        selectedOptions.map((item, index) => (
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
        ))}
      <div className={classes["actions"]}>
        <div
          onClick={() => {
            index || index === 0
              ? applyChanges(data, "edit", index)
              : applyChanges(data, "create");
          }}
          className={classes["apply-div"]}
        >
          <IoCheckmarkSharp className={classes["apply-icon"]} />
        </div>
        <div onClick={toggleShowComponent} className={classes["cancel-div"]}>
          <FaXmark className={classes["cancel-icon"]} />
        </div>
      </div>
    </div>
  );
};

export default AddSurcharge;
