import { useReducer, useState } from "react";
import { intialValue, locationReducer } from "./dataAndReducer";
import classes from "./addFreight.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import { FaRegComment } from "react-icons/fa";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
import { IoCloseCircleOutline } from "react-icons/io5";

import { countryList } from "@/app/utils/countryList";
import RichText from "@/app/ui/inputs/richTextGroup/RichTextGroup";
import Popup from "@/app/ui/popupWrapper/Popup";
import { formatContainer } from "@/app/lib/formatText";
import {
  containerTypesIntial,
  currencies,
  serviceOptions,
} from "@/app/utils/options";
import DateInput from "@/app/ui/inputs/dateInput/DateInput";

const AddFreight = ({ toggleShowComponent, applyChanges, itemData, index }) => {
  const [data, dispatchDetail] = useReducer(
    locationReducer,
    itemData ? itemData : { ...intialValue, ...containerTypesIntial }
  );

  const [showComment, setShowComment] = useState(false);
  const toggleComment = () => {
    setShowComment(!showComment);
  };
  return (
    <div className={classes["form"]}>
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
