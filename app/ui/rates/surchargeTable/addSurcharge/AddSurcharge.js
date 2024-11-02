import { useEffect, useReducer, useState } from "react";
import { intialValue, locationReducer } from "./dataAndReducer";
import classes from "./addSurcharge.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
import RichText from "@/app/ui/inputs/richTextGroup/RichTextGroup";
import Popup from "@/app/ui/popupWrapper/Popup";
import { IoCloseCircleOutline } from "react-icons/io5";
import { formatContainer } from "@/app/lib/formatText";
import axios from "axios";

const AddSurcharge = ({
  toggleShowComponent,
  applyChanges,
  itemData,
  selectedOptions,
  index,
  locations,
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
      <div className={classes["type"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"type"}
            dataKey={"type"}
            label={""}
            options={surchargeNames}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["origin-locations"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"origin_locations"}
            dataKey={"origin_locations"}
            label={""}
            options={[locations?.base_origin_location]}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["destination-locations"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"destination_locations"}
            dataKey={"destination_locations"}
            label={""}
            options={[locations?.base_destination_location]}
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
            label={""}
            options={["Percent", "Value"]}
            setData={dispatchDetail}
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
