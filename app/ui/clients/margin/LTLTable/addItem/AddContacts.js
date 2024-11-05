import { useReducer } from "react";
import { intialValue, locationReducer } from "./dataAndReducer";
import classes from "./addContacts.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import CheckboxGroup from "@/app/ui/inputs/checkboxGroup/CheckboxGroup";

const AddContacts = ({
  toggleShowComponent,
  applyChanges,
  itemData,
  index,
}) => {
  const [data, dispatchDetail] = useReducer(
    locationReducer,
    itemData ? itemData : intialValue
  );
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
      <div className={classes["email"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            type={"email"}
            noLabel={true}
            id={"email"}
            data={data.email}
            dataKey={"email"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["phone"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            numbersOnly={true}
            noLabel={true}
            id={"phone"}
            data={data.phone}
            dataKey={"phone"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["active"]}>
        <div className={classes["input-wrapper"]}>
          <CheckboxGroup
            data={data}
            type={"active"}
            dataKey={"active"}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>

      <div className={classes["password"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            type={"password"}
            noLabel={true}
            id={"password"}
            data={data.password}
            dataKey={"password"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
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

export default AddContacts;
