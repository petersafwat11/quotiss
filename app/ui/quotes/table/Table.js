"use client";
import React from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";
import CircleChexbox from "../../circleCheckbox/CircleChexbox";
import AddNewButton from "../../addNewButton/AddNewButton";
import { GrClear } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";

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
            <IoIosSend className={classes["action-icon"]} />
            <button className={classes["action-button"]}>
              Batch Send
            </button>
          </div>
          <div className={classes["action"]}>
          <FaRegCopy className={classes["action-icon"]} />
            <button className={classes["action-button"]}>
              Replicate
            </button>
          </div>
          <div className={classes["action"]}>
            <AiFillDelete className={classes["action-icon"]} />
            <button className={classes["action-button"]}>Delete</button>
          </div>
          <div className={classes["action"]}>
            <FaCheck className={classes["action-icon"]} />
            <button className={classes["action-button"]}>Accept</button>
          </div>
          <div className={classes["action"]}>
            <MdClose className={classes["action-icon"]} />
            <button className={classes["action-button"]}>Decline</button>
          </div>
        </div>
        <AddNewButton path={"rates/create"} />
      </div>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <div className={classes["checkbox"]}>
            <CircleChexbox />
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
              <CircleChexbox />
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
