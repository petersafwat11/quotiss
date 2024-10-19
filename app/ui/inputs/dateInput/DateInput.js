import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import classes from "./dateInput.module.css";

const DateInput = ({ data, stData, dataKey, label }) => {
  return (
    <div className={classes["date-wrapper"]}>
      <p className={classes["label"]}>{label}</p>
      <DatePicker
        onChange={(date) =>
          stData({ type: dataKey.toUpperCase(), value: date })
        }
        value={data}
      />
    </div>
  );
};

export default DateInput;
