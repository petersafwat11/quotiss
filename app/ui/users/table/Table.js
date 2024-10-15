"use client";
import React from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";
import CircleChexbox from "../../circleCheckbox/CircleChexbox";
import AddNewButton from "../../addNewButton/AddNewButton";
import { GrClear } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";

const Table = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["actions"]}>
          <div className={classes["action"]}>
            <GrClear className={classes["action-icon"]} />
            <button className={classes["action-button"]}>
              clear Selection
            </button>
          </div>{" "}
          <div className={classes["action"]}>
            <FaUserEdit className={classes["action-icon"]} />
            <button className={classes["action-button"]}>Edit Email</button>
          </div>{" "}
        </div>

        <AddNewButton />
      </div>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <div className={classes["checkbox"]}>
            <CircleChexbox />
          </div>
          <p className={classes["name"]}>Name</p>
          <p className={classes["organization"]}>Organization</p>
          <p className={classes["email"]}>Email</p>
          <p className={classes["role"]}>Role</p>
          <p className={classes["active"]}>Active</p>
          <p className={classes["last-active"]}>Last Active</p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            <div className={classes["checkbox"]}>
              <CircleChexbox />
            </div>
            <p className={classes["name"]}>Name</p>
            <p className={classes["organization"]}>Organization</p>
            <p className={classes["email"]}>Email</p>
            <p className={classes["role"]}>Role</p>
            <p className={classes["active"]}>Active</p>
            <p className={classes["last-active"]}>Last Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
