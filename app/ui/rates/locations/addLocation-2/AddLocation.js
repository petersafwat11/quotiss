import { useReducer, useState } from "react";
import { intialValue, locationReducer } from "./dataAndReducer";
import classes from "./addLocation.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
import RichText from "@/app/ui/inputs/richTextGroup/RichTextGroup";
import Popup from "@/app/ui/popupWrapper/Popup";
import { IoCloseCircleOutline } from "react-icons/io5";
import { formatContainer } from "@/app/lib/formatText";
import { countryList } from "@/app/utils/countryList";

const AddLocation = ({
  toggleShowComponent,
  applyChanges,
  itemData,
  selectedOptions,
  index,
}) => {
  const countriesOptions = countryList.map((item) => item.country);
  const [data, dispatchDetail] = useReducer(
    locationReducer,
    itemData ? itemData : intialValue
  );
  const [showComment, setShowComment] = useState(false);
  const toggleComment = () => {
    setShowComment(!showComment);
  };
  return (
    <div className={classes["form"]}>
      <div className={classes["country"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"country"}
            dataKey={"country"}
            label={""}
            options={countriesOptions}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["min"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            noLabel={true}
            id={"postal_code_min"}
            data={data.postal_code_min}
            dataKey={"postal_code_min"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["max"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            noLabel={true}
            id={"postal_code_max"}
            data={data.postal_code_max}
            dataKey={"postal_code_max"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["pickup"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            noLabel={true}
            id={"pickup"}
            data={data.pickup}
            dataKey={"pickup"}
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

export default AddLocation;
