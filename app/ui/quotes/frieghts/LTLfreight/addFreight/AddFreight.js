import { useEffect, useReducer, useState } from "react";
import {
  intialValue,
  locationReducer,
  servicesOptions,
} from "./dataAndReducer";
import classes from "./addFreight.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import { FaRegComment } from "react-icons/fa";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDebouncedCallback } from "use-debounce";

import RichText from "@/app/ui/inputs/richTextGroup/RichTextGroup";
import Popup from "@/app/ui/popupWrapper/Popup";
import { containerTypesIntial, currencies } from "@/app/utils/options";
import DateInput from "@/app/ui/inputs/dateInput/DateInput";
import CheckboxGroup from "@/app/ui/inputs/checkboxGroup/CheckboxGroup";

const AddFreight = ({ toggleShowComponent, applyChanges, itemData, index }) => {
  const [data, dispatchDetail] = useReducer(
    locationReducer,
    itemData ? itemData : { ...intialValue, ...containerTypesIntial }
  );

  const [showComment, setShowComment] = useState(false);
  const toggleComment = () => {
    setShowComment(!showComment);
  };
  const calcPrice = useDebouncedCallback((cost_1, margin) => {
    const price = Math.round(
      Number(cost_1) + (Number(cost_1) * Number(margin)) / 100
    );
    console.log("calc price: ", cost_1, margin, Number(cost_1), Number(margin));

    dispatchDetail({
      type: "cost_margin_price".toUpperCase(),
      value: { cost_1: cost_1, margin: margin, price: price },
    });
  }, 200);

  useEffect(() => {
    const { cost_1, margin } = data.cost_margin_price;
    calcPrice(cost_1, margin);
  }, [data.cost_margin_price, calcPrice]);
  return (
    <div className={classes["form"]}>
      <CheckboxGroup
        data={data}
        type={"checked"}
        dataKey={"checked"}
        setData={dispatchDetail}
        dataType="single"
      />

      <div className={classes["name"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
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

      <div className={classes["service"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"service"}
            dataKey={"service"}
            label={"Service"}
            options={servicesOptions}
            setData={dispatchDetail}
            dataType={"single"}
          />
        </div>
      </div>
      <div className={classes["cost-margin-price"]}>
        <div className={classes["cost"]}>
          <div className={classes["input-wrapper"]}>
            <InputGroup
              id={"cost_1"}
              numbersOnly={true}
              noLabel={true}
              dataKey={"cost_1"}
              objectType={"cost_margin_price"}
              data={data.cost_margin_price}
              setData={dispatchDetail}
              stateType={"useReducer"}
              dataType="object"
            />
          </div>
        </div>
        <div className={classes["margin"]}>
          <div className={classes["input-wrapper"]}>
            <InputGroup
              id={"margin"}
              numbersOnly={true}
              noLabel={true}
              dataKey={"margin"}
              objectType={"cost_margin_price"}
              data={data.cost_margin_price}
              setData={dispatchDetail}
              stateType={"useReducer"}
              dataType="object"
            />
          </div>
        </div>
        <div className={classes["price"]}>
          <div className={classes["input-wrapper"]}>
            <InputGroup
              disabled={true}
              id={"price"}
              numbersOnly={true}
              noLabel={true}
              dataKey={"price"}
              objectType={"cost_margin_price"}
              data={data.cost_margin_price}
              setData={dispatchDetail}
              stateType={"useReducer"}
              dataType="object"
            />
          </div>
        </div>
      </div>
      <div className={classes["cost-disabled"]}></div>

      <div className={classes["departure"]}></div>
      <div className={classes["delivery"]}></div>

      <div className={classes["currency"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"currency"}
            dataKey={"currency"}
            label={"Currency"}
            options={currencies}
            setData={dispatchDetail}
            dataType={"single"}
          />
        </div>
      </div>
      <div className={classes["comment"]}>
        <div className={classes["input-wrapper"]}>
          <div onClick={toggleComment} className={classes["comment-wrapper"]}>
            <FaRegComment className={classes["comment-icon"]} />
          </div>
        </div>
        {showComment && (
          <Popup>
            <div className={classes["rich-text"]}>
              <IoCloseCircleOutline
                onClick={toggleComment}
                className={classes["close"]}
              />
              <RichText
                data={data}
                dataKey={"comment"}
                setData={dispatchDetail}
                dataType={"single"}
              />
            </div>
          </Popup>
        )}
      </div>

      <div className={classes["start"]}>
        <div className={classes["input-wrapper"]}>
          <DateInput
            noLabel={true}
            label={"Validity Start"}
            data={data.validity_start}
            dataKey={"validity_start"}
            setData={dispatchDetail}
          />
        </div>
      </div>
      <div className={classes["end"]}>
        <div className={classes["input-wrapper"]}>
          <DateInput
            noLabel={true}
            label={"Validity End"}
            data={data.validity_end}
            dataKey={"validity_end"}
            setData={dispatchDetail}
          />
        </div>
      </div>

      <div className={classes["actions"]}>
        <div
          onClick={() => {
            console.log("index", index);
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

export default AddFreight;
