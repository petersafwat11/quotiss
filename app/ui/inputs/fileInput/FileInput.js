import React, { useState } from "react";
import classes from "./fileInput.module.css";
const FileInput = ({
  id,
  label,
  data,
  dataKey,
  setData,
  stateType,
  dataType,
  objectType,
  type,
  noLabel,
}) => {
  const [preview, setPreview] = useState(null);
  const handleStateUpdate = (val) => {
    stateType !== "useReducer"
      ? setData({ ...data, [dataKey]: val })
      : dataType === "single"
      ? setData({
          type: dataKey.toLocaleUpperCase(),
          value: val,
        })
      : setData({
          type: objectType.toLocaleUpperCase(),
          value: { ...data, [dataKey]: val },
        });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // setFile(selectedFile);
    handleStateUpdate(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className={classes["input-group"]}>
      {/* <label className={classes["label"]}>League</label> */}
      <input
        onChange={handleFileChange}
        accept="image/*"
        className={classes["input"]}
        type="file"
        hidden
      />
      {!data?.image && (
        <span
          onClick={(e) => {
            e.target.previousElementSibling.click();
          }}
          className={classes["upload"]}
        >
          Upload
        </span>
      )}
      {/* {preview && (
        <img
          crossOrigin="anonymous"
          className={classes["uploaded-image"]}
          onClick={imageClick}
          src={`http://localhost:8000/img/organization/${data.image}`}
        />
      )} */}
    </div>
  );
};

export default FileInput;
