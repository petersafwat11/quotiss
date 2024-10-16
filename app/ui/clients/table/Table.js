"use client";
import React from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";
import CircleCheckbox from "../../circleCheckbox/CircleCheckbox";
import AddNewButton from "../../addNewButton/AddNewButton";
import { GrClear } from "react-icons/gr";
import { TbNotes } from "react-icons/tb";
import { PiUsersThreeFill } from "react-icons/pi";

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
            <TbNotes className={classes["action-icon"]} />
            <button className={classes["action-button"]}>Re assign</button>
          </div>
          <div className={classes["action"]}>
            <PiUsersThreeFill className={classes["action-icon"]} />
            <button className={classes["action-button"]}>Create Quote</button>
          </div>
        </div>
        <AddNewButton path={"rates/create"} />
      </div>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <div className={classes["checkbox"]}>
            <CircleCheckbox />
          </div>
          <p className={classes["status"]}>Status</p>
          <p className={classes["name"]}>Name</p>
          <p className={classes["sales-rep"]}>Sales Rep</p>
          <p className={classes["account-owner"]}>Account owner</p>
          <p className={classes["contact-persons"]}>Contact Persons</p>
          <p className={classes["country"]}>Country</p>
          <p className={classes["city"]}>City</p>
          <p className={classes["postal-code"]}>Postal Code</p>
          <p className={classes["terms-conditions"]}>Terms & Conditions</p>
          <p className={classes["hashtags"]}>Hashtags</p>
          <p className={classes["last-quote"]}>Last Quote</p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            <div className={classes["checkbox"]}>
              <CircleCheckbox />
            </div>
            <p className={classes["status"]}>Status</p>
            <p className={classes["name"]}>Name</p>
            <p className={classes["sales-rep"]}>Sales Rep</p>
            <p className={classes["account-owner"]}>Account owner</p>
            <p className={classes["contact-persons"]}>Contact Persons</p>
            <p className={classes["country"]}>Country</p>
            <p className={classes["city"]}>City</p>
            <p className={classes["postal-code"]}>Postal Code</p>
            <p className={classes["terms-conditions"]}>Terms & Conditions</p>
            <p className={classes["hashtags"]}>Hashtags</p>
            <p className={classes["last-quote"]}>Last Quote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
