import { useReducer } from "react";

const MakeHolidayPopup = () => {
  const intialValue = {
    originCountry: "",
    destinationCountry: "",
    service: "",
    january: "",
    february: "",
    march: "",
    april: "",
    may: "",
    june: "",
    july: "",
    august: "",
    september: "",
    october: "",
    november: "",
    december: "",
  };
  const [data, dispatchDetail] = useReducer(surchargeReducer, matchIntialVal);

  return (
    <div className={"form"}>
      {/* these 3 are selections */}
      <input
        value={data.originCountry}
        onChange={(e) => {
          dispatchDetail({
            type: "originCountry".toUpperCase(),
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.destinationCountry}
        onChange={(e) => {
          dispatchDetail({
            type: "destinationCountry".toUpperCase(),
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.service}
        onChange={(e) => {
          dispatchDetail({
            type: "service".toUpperCase(),
            value: e.target.value,
          });
        }}
        className={classes["main-margin"]}
      ></input>
      {Object.keys(intialValue)
        .slice(3)
        .map((month, index) => (
          <input
            key={index}
            value={data[month]}
            onChange={(e) => {
              dispatchDetail({
                type: month.toUpperCase(),
                value: e.target.value,
              });
            }}
            className={classes["main-margin"]}
          ></input>
        ))}
      <div className={classes["actions"]}>
        <button onClick={() => {}} className={classes["apply-button"]}>
          Apply
        </button>
        <button onClick={() => {}} className={classes["apply-button"]}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MakeHolidayPopup;
