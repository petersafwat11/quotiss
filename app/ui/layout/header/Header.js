"use client";
import React, { useState } from "react";
import classes from "./header.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    console.log("clicked");
    setShowMobileMenu(!showMobileMenu);
  };
  function replaceSpacesWithDash(str) {
    console.log("str", str);
    const pageName =
      str === "my organization"
        ? "organization"
        : str === "surcharge types"
        ? "surchargeTypes"
        : str.replace(/\s+/g, "-");
    router.push(pageName);
  }

  console.log("pathname", pathname);
  return (
    // <div className={classes[showMobileMenu ? "overlay" : ""]}>
    <div className={classes["header"]}>
      <IoMdMenu onClick={toggleMobileMenu} className={classes["menu-icon"]} />

      <div className={classes["first"]}>
        <p className={"logo"}> Quoturl</p>
      </div>

      <div className={classes["second"]}>
        <p
          onClick={() => {
            router.push("/quotes");
          }}
          className={
            classes[
              pathname.includes("quotes") ? "page-name-active" : "page-name"
            ]
          }
        >
          Quotes
        </p>
        <p
          onClick={() => {
            router.push("/crm");
          }}
          className={
            classes[pathname.includes("crm") ? "page-name-active" : "page-name"]
          }
        >
          CRM
        </p>
        <p
          onClick={() => {
            router.push("/rates");
          }}
          className={
            classes[
              pathname.includes("rates") ? "page-name-active" : "page-name"
            ]
          }
        >
          Rates
        </p>
        <div className={classes["multipages"]}>
          <p
            className={
              classes[
                pathname.includes("locations")
                  ? "page-name-active"
                  : "page-name"
              ]
            }
          >
            Locations
          </p>
          <div className={classes["sub-menu-container"]}>
            {/* <span className={classes["space"]}></span> */}
            <div className={classes["sub-menu"]}>
              {["Charges", "Countries"].map((item, index) => (
                <p
                  onClick={() => {
                    replaceSpacesWithDash(item.toLowerCase());
                  }}
                  key={index}
                  className={classes["menu-item"]}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={classes["multipages"]}>
          <p
            className={
              classes[
                pathname.includes("settings") ? "page-name-active" : "page-name"
              ]
            }
          >
            Settings
          </p>
          <div className={classes["sub-menu-container"]}>
            {/* <span className={classes["space"]}></span> */}

            <div className={classes["sub-menu"]}>
              {[
                "Margins",
                "Surcharge types",
                "Holidays",
                "My Organization",
                "Terms and Conditions",
                "Users",
              ].map((item, index) => (
                <p
                  onClick={() => {
                    replaceSpacesWithDash(item.toLowerCase());
                  }}
                  key={index}
                  className={classes["menu-item"]}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={classes["third"]}>
        <p className={classes["greating-text"]}>Hello Peter</p>
        <IoMdNotifications className={classes["notifictions"]} />
        <FaCircleUser className={classes["user-icon"]} />
      </div>
      <div
        className={
          classes[showMobileMenu ? "show-mobile-menu" : "hide-mobile-menu"]
        }
      >
        <div className={classes["pages-mobile"]}>
          <p className={classes["page-name"]}>Quotes</p>
          <p className={classes["page-name"]}>CRM</p>
          <p className={classes["page-name"]}>Rates</p>
          <p className={classes["page-name"]}>Locations</p>
          <p className={classes["page-name"]}>Settings</p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Header;
