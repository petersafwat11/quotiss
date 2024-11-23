import { useEffect, useReducer, useState } from "react";
import { intialValue, locationReducer, serviceOptions } from "./dataAndReducer";
import classes from "./addFreight.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import { FaRegComment } from "react-icons/fa";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
import { IoCloseCircleOutline } from "react-icons/io5";

import RichText from "@/app/ui/inputs/richTextGroup/RichTextGroup";
import Popup from "@/app/ui/popupWrapper/Popup";
import { containerTypesIntial, currencies } from "@/app/utils/options";
import DateInput from "@/app/ui/inputs/dateInput/DateInput";
import CheckboxGroup from "@/app/ui/inputs/checkboxGroup/CheckboxGroup";
import { useDebouncedCallback } from "use-debounce";

const AddFreight = ({ toggleShowComponent, applyChanges, itemData, index }) => {
  const [data, dispatchDetail] = useReducer(
    locationReducer,
    itemData ? itemData : { ...intialValue, ...containerTypesIntial }
  );

  const [showComment, setShowComment] = useState(false);
  const toggleComment = () => {
    setShowComment(!showComment);
  };
  const calcPrice = useDebouncedCallback((items) => {
    const price = Math.round(Number(items) * 100);
    dispatchDetail({
      type: "price".toUpperCase(),
      value: { items: items, total_price: price },
    });
  }, 200);

  useEffect(() => {
    const { items } = data.price;
    calcPrice(items);
  }, [data.price, calcPrice]);

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
            options={serviceOptions}
            setData={dispatchDetail}
            dataType={"single"}
          />
        </div>
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

      <div className={classes["chargeable"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            disabled={true}
            numbersOnly={true}
            noLabel={true}
            id={"chargeable"}
            data={data.chargeable}
            dataKey={"chargeable"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["ratio"]}></div>
      <div className={classes["price"]}>
        <div className={classes["items"]}>
          <div className={classes["input-wrapper"]}>
            <InputGroup
              id={"items"}
              numbersOnly={true}
              noLabel={true}
              dataKey={"items"}
              objectType={"price"}
              data={data.price}
              setData={dispatchDetail}
              stateType={"useReducer"}
              dataType="object"
            />
          </div>
        </div>
        <div className={classes["total-price"]}>
          <div className={classes["input-wrapper"]}>
            <InputGroup
              disabled={true}
              id={"total_price"}
              numbersOnly={true}
              noLabel={true}
              dataKey={"total_price"}
              objectType={"price"}
              data={data.price}
              setData={dispatchDetail}
              stateType={"useReducer"}
              dataType="object"
            />
          </div>
        </div>
      </div>

      <div className={classes["price-shipment"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            numbersOnly={true}
            noLabel={true}
            id={"price_shipment"}
            data={data.price_shipment}
            dataKey={"price_shipment"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>

      <div className={classes["min-price"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            numbersOnly={true}
            noLabel={true}
            id={"min_price"}
            data={data.min_price}
            dataKey={"min_price"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
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
