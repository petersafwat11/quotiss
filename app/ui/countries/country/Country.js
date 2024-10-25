import React, { useState } from "react";
import classes from "./country.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import CircleCheckbox from "../../circleCheckbox/CircleChexbox";

const Country = ({ data, applyChanges, toggleEditCountry }) => {
  const [countryData, setCountryData] = useState(data);
  const editHandler = () => {
    setCountryData({ ...data, status: !countryData.status });
  };
  return (
    <div className={classes["container"]}>
      <div className={classes["code"]}>
        <div className={classes["wrapper"]}>
          <InputGroup
            noLabel={true}
            id={countryData.code}
            data={countryData}
            dataKey={"code"}
            disabled={true}
          />
        </div>
      </div>
      <div className={classes["name"]}>
        <div className={classes["wrapper"]}>
          <InputGroup
            noLabel={true}
            id={countryData.name}
            data={countryData}
            dataKey={"name"}
            disabled={true}
          />
        </div>
      </div>
      <div className={classes["status"]}>
        <div className={classes["wrapper"]}>
          <CircleCheckbox value={countryData.status} onChange={editHandler} />
        </div>
      </div>

      <div className={classes["actions"]}>
        <div
          onClick={() => {
            applyChanges(countryData);
          }}
          className={classes["apply-div"]}
        >
          <IoCheckmarkSharp className={classes["apply-icon"]} />
        </div>
        <div onClick={toggleEditCountry} className={classes["cancel-div"]}>
          <FaXmark className={classes["cancel-icon"]} />
        </div>
      </div>
    </div>
  );
};

export default Country;
