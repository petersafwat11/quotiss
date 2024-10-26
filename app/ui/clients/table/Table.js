"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";
import AddNewButton from "../../addNewButton/AddNewButton";
import { GrClear } from "react-icons/gr";
import { TbNotes } from "react-icons/tb";
import { PiUsersThreeFill } from "react-icons/pi";
import CircleCheckbox from "../../inputs/selectionCheckBoxGroup/circleCheckbox/CircleChexbox";

const Table = ({ tableData }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSelect = (val) => {
    if (val === "all") {
      if (selectedOptions.length === tableData.length) {
        setSelectedOptions([]); // Deselect all
      } else {
        setSelectedOptions([...tableData]); // Select all
      }
    } else {
      setSelectedOptions((prev) =>
        prev.includes(val)
          ? prev.filter((item) => item !== val)
          : [...prev, val]
      );
    }
  };

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
            <CircleCheckbox
              itemName={null}
              onChange={() => onSelect("all")}
              type={"item"}
              checked={selectedOptions.length === tableData?.length}
            />
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
          {tableData?.length > 0 &&
            tableData((item, index) => (
              <div className={classes["row"]}>
                <div className={classes["checkbox"]}>
                  <CircleCheckbox
                    itemName={item}
                    onChange={() => onSelect(item)}
                    type={"item"}
                    checked={selectedOptions.includes(item)}
                  />
                </div>
                <p className={classes["status"]}>{item?.status}</p>
                <p className={classes["name"]}>{item?.name}</p>
                <p className={classes["sales-rep"]}>{item?.sales_rep}</p>
                <p className={classes["account-owner"]}>
                  {item?.account_owner}
                </p>
                <p className={classes["contact-persons"]}>
                  {item?.contacts?.person}
                </p>
                <p className={classes["country"]}>{item?.contacts?.country}</p>
                <p className={classes["city"]}>{item?.contacts?.city}</p>
                <p className={classes["postal-code"]}>
                  {item?.contacts?.postal_code}
                </p>
                <p className={classes["terms-conditions"]}>
                  {item?.terms_and_conditions}
                </p>
                <p className={classes["hashtags"]}>{item?.hashtags}</p>
                <p className={classes["last-quote"]}>{item?.last_quote}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
