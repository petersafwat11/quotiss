"use client";
import React from "react";
import classes from "./actionBtns.module.css";
import { useRouter, usePathname } from "next/navigation";

const ActionBtns = ({ applyChanges }) => {
  const router = useRouter();
  const pathname = usePathname();
  const mainPage = pathname.slice(0, pathname.lastIndexOf("/"));

  const applyHandler = () => {
    applyChanges();
  };
  const cancelHandler = () => {
    router.push(mainPage);
  };
  return (
    <div className={classes["actions"]}>
      <button onClick={applyHandler} className={classes["apply"]}>
        Apply
      </button>
      <button onClick={cancelHandler} className={classes["cancel"]}>
        Cancel
      </button>
    </div>
  );
};

export default ActionBtns;
