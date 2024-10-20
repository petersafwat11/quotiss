import React from "react";
import classes from "./emailLayout.module.css";
const EmailLayout = ({ data }) => {
  return (
    <div className={classes["layout"]}>
      <div className={classes["first"]}>
        <p className={classes["date"]}>Date: {data.date}</p>
        <h3 className={classes["title"]}>Offer 138690 for: </h3>
        <p className={classes["client"]}>{data.client.name}</p>
        <p className={classes["address"]}> {data.client.address}</p>
        <p className={classes["tax-id"]}>Tax ID: {data.client.tax_id}</p>
        <h3 className={classes["title"]}>Prepared by:</h3>
        <p className={classes["author-name"]}>{data.author.name}</p>
        <p className={classes["author-email"]}>{data.author.email}</p>
        <p className={classes["author-email"]}>{data.author.contact_number}</p>
        <div className={classes["validity"]}>
          <h3 className={classes["title"]}>Validity</h3>
          <p className={classes["validity-para"]}>
            from {data.from} to {data.to}
          </p>
        </div>
        <h3 className={classes["title"]}>
          Payment terms: Before cargo release
        </h3>
      </div>
    </div>
  );
};

export default EmailLayout;
