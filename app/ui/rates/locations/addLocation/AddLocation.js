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

const AddLocation = ({
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
      <div className={classes["country"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            noLabel={true}
            id={"country"}
            data={data.country}
            dataKey={"country"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["price-based-on"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"price_based_on"}
            dataKey={"price_based_on"}
            label={""}
            options={["price based on"]}
            setData={dispatchDetail}
            dataType="single"
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
