import React from "react";
import classes from "./notes.module.css";
import RichTextGroup from "../../inputs/richTextGroup/RichTextGroup";

const Notes = ({ data, dispatchDetail }) => {
  return (
    <div className={"sub-form"}>
      <div className={classes["note"]}>
        <p className={classes["label"]}>Notes (internal use only)</p>
        <RichTextGroup
          data={data}
          dataKey={"internal_notes"}
          type={"notes"}
          setData={dispatchDetail}
          dataType={"object"}
        />
      </div>
      <div className={classes["note"]}>
        <p className={classes["label"]}>Notes (visible on the offer)</p>
        <RichTextGroup
          data={data}
          dataKey={"visible_notes"}
          type={"notes"}
          setData={dispatchDetail}
          dataType={"object"}
        />
      </div>
    </div>
  );
};

export default Notes;
