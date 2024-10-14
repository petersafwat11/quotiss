import React from "react";

const Translation = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["contianer"]}>
    {/* remember to make selection */}
      <input
        value={data.language}
        onChange={(e) => {
          dispatchDetail({
            type: "TRANSLATION",
            value: { ...data, language: e.target.value },
          });
        }}
        className={classes["comment"]}
      ></input>
      <input
        value={data.name}
        onChange={(e) => {
          dispatchDetail({
            type: "TRANSLATION",
            value: { ...data, name: e.target.value },
          });
        }}
        className={classes["name"]}
      ></input>
      <input
        value={data.description}
        onChange={(e) => {
          dispatchDetail({
            type: "TRANSLATION",
            value: { ...data, description: e.target.value },
          });
        }}
        className={classes["description"]}
      ></input>
    </div>
  );
};

export default Translation;
