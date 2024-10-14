import React from "react";
import classes from "./addNewButton.module.css";
import { useRouter } from "next/navigation";
const AddNewButton = ({path}) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(path);
      }}
      className={classes["add-new"]}
    >
      Add New
    </button>
  );
};

export default AddNewButton;
