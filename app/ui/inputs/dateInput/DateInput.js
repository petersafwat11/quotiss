import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import classes from "./dateInput.module.css";

const DateInput = ({ data, setData, dataKey, label, required, noLabel }) => {
  return (
    <div className={classes["input-group"]}>
      {!noLabel && (
        <p className={classes["label"]}>
          {label}
          {required && <span className={classes["required"]}>*</span>}
        </p>
      )}
      <DatePicker
        onChange={(date) =>
          setData({ type: dataKey.toUpperCase(), value: date })
        }
        value={data}
      />
    </div>
  );
};

export default DateInput;
