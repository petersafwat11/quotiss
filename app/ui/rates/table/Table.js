"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";
import AddNewButton from "../../addNewButton/AddNewButton";
import { FaBoxArchive } from "react-icons/fa6";
import { MdUnarchive } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { GrClear } from "react-icons/gr";
import CircleCheckbox from "../../inputs/selectionCheckBoxGroup/circleCheckbox/CircleChexbox";
import { FaRegComment } from "react-icons/fa";

const Table = ({ tableData }) => {
  console.log("tableData", tableData);
  const router = useRouter();
  const pathname = usePathname();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSelect = (val) => {
    if (val === "all") {
      if (selectedOptions.length === tableData?.length) {
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
            <CircleCheckbox
              itemName={null}
              onChange={() => onSelect("all")}
              type={"item"}
              checked={selectedOptions.length === tableData?.length}
            />
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
          {tableData?.length > 0 &&
            tableData?.map((item, index) => (
              <div key={index} className={classes["row"]}>
                <div className={classes["checkbox"]}>
                  <CircleCheckbox
                    itemName={item}
                    onChange={() => onSelect(item)}
                    type={"item"}
                    checked={selectedOptions.includes(item)}
                  />
                </div>
                <p className={classes["status"]}>{item.status}</p>
                <p className={classes["name"]}>{item.name}</p>
                <p className={classes["service"]}>{item.service}</p>
                <p className={classes["contract-number"]}>
                  {item.contract_number}
                </p>
                <p className={classes["form"]}>
                  {item.validity_start.split("T")[0]}
                </p>
                <p className={classes["till"]}>
                  {item.validity_end.split("T")[0]}
                </p>

                <p className={classes["base-origin"]}>
                  {item.base_origin_location}
                </p>
                <p className={classes["base-dest"]}>
                  {item.base_destination_location}
                </p>
                <p className={classes["curr"]}>{item?.currency}</p>
                <p className={classes["int"]}>
                  <FaRegComment className={classes["comment-icon"]} />
                </p>
                <p className={classes["ext"]}>
                  <FaRegComment className={classes["comment-icon"]} />
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
