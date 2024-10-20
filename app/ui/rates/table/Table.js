"use client";
import React from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";
import AddNewButton from "../../addNewButton/AddNewButton";
import { FaBoxArchive } from "react-icons/fa6";
import { MdUnarchive } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { GrClear } from "react-icons/gr";
import CircleCheckbox from "../../circleCheckbox/CircleChexbox";

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
          </div>
          <div className={classes["action"]}>
            <FaDownload className={classes["action-icon"]} />
            <button className={classes["action-button"]}>
              create export excel
            </button>
          </div>
          <div className={classes["action"]}>
            <FaDownload className={classes["action-icon"]} />
            <button className={classes["action-button"]}>
              create import excel
            </button>
          </div>
          <div className={classes["action"]}>
            <MdUnarchive className={classes["action-icon"]} />
            <button className={classes["action-button"]}>Unarchive</button>
          </div>
          <div className={classes["action"]}>
            <FaBoxArchive className={classes["action-icon"]} />
            <button className={classes["action-button"]}>Archive</button>
          </div>
          <div className={classes["mobile-add-new"]}>
            <AddNewButton path={"rates/create"} />
          </div>
        </div>
        <div className={classes["desktop-add-new"]}>
          <AddNewButton path={"rates/create"} />
        </div>
      </div>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <div className={classes["checkbox"]}>
            <CircleCheckbox />
          </div>
          <p className={classes["status"]}>Status</p>
          <p className={classes["name"]}>Name</p>
          <p className={classes["service"]}>Service</p>
          <p className={classes["contract-number"]}>Contract Number</p>
          <p className={classes["form"]}>Form</p>
          <p className={classes["till"]}>Till</p>
          <p className={classes["base-origin"]}>Base Origin</p>
          <p className={classes["base-dest"]}>Base Dest</p>
          <p className={classes["curr"]}>Curr.</p>
          <p className={classes["int"]}>Int.</p>
          <p className={classes["ext"]}>Ext.</p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            <div className={classes["checkbox"]}>
              <CircleCheckbox />
            </div>
            <p className={classes["status"]}>Status</p>
            <p className={classes["name"]}>Name</p>
            <p className={classes["service"]}>Service</p>
            <p className={classes["contract-number"]}>Contract Number</p>
            <p className={classes["form"]}>Form</p>
            <p className={classes["till"]}>Till</p>
            <p className={classes["base-origin"]}>Base Origin</p>
            <p className={classes["base-dest"]}>Base Dest</p>
            <p className={classes["curr"]}>Curr.</p>
            <p className={classes["int"]}>Int.</p>
            <p className={classes["ext"]}>Ext.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
