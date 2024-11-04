import React from "react";
import classes from "./emailLayout.module.css";
const EmailLayout = ({ data, terms_and_conditions }) => {
  return (
    <div className={classes["layout"]}>
      <div className={classes["first"]}>
        <p className={classes["text"]}>Date: {data.date}</p>
        <h3 className={classes["title"]}>Offer 138690 for: </h3>
        <p className={classes["text"]}>{data.client.name}</p>
        <p className={classes["text"]}> {data.client.address}</p>
        <p className={classes["text"]}>Tax ID: {data.client.tax_id}</p>
        <h3 className={classes["title"]}>Prepared by:</h3>
        <p className={classes["text"]}>{data.author.name}</p>
        <p className={classes["text"]}>{data.author.email}</p>
        <p className={classes["text"]}>{data.author.contact_number}</p>
        <div className={classes["validity"]}>
          <h3 className={classes["title"]}>Validity</h3>
          <p className={classes["text"]}>
            from {data.from} to {data.to}
          </p>
        </div>
      </div>
      <div className={classes["second"]}>
        <h3 className={classes["title"]}>
          Payment terms: Before cargo release
        </h3>
        <h3 className={classes["title"]}>Terms and Conditions</h3>
        <div dangerouslySetInnerHTML={{ __html: terms_and_conditions }} />
      </div>
    </div>
  );
};

export default EmailLayout;
