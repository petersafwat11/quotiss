import React from "react";
import classes from "./EmailIntegration.module.css";
const EmailIntegration = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <label>
        <input
          type="checkbox"
          checked={data.use_SSL}
          onChange={() => {
            dispatchDetail({
              type: "EMAILINTEGRATION",
              value: { ...data, use_SSL: !data.use_SSL },
            });
          }}
        />
        Use SSL
      </label>

      <div className={classes["inputs"]}>
        <input
          value={data.auth_mode}
          onChange={(e) => {
            dispatchDetail({
              type: "EMAILINTEGRATION",
              value: { ...data, auth_mode: e.target.value },
            });
          }}
          className={classes["auth-mode"]}
        ></input>
        <input
          value={data.encryption}
          onChange={(e) => {
            dispatchDetail({
              type: "EMAILINTEGRATION",
              value: { ...data, encryption: e.target.value },
            });
          }}
          className={classes["encryption"]}
        ></input>
        <input
          value={data.SMTP_host}
          onChange={(e) => {
            dispatchDetail({
              type: "EMAILINTEGRATION",
              value: { ...data, SMTP_host: e.target.value },
            });
          }}
          className={classes["smtp-host"]}
        ></input>
        <input
          value={data.SMTP_port}
          onChange={(e) => {
            dispatchDetail({
              type: "EMAILINTEGRATION",
              value: { ...data, SMTP_port: e.target.value },
            });
          }}
          className={classes["smtp-port"]}
        ></input>
        <input
          value={data.Imap_host}
          onChange={(e) => {
            dispatchDetail({
              type: "EMAILINTEGRATION",
              value: { ...data, Imap_host: e.target.value },
            });
          }}
          className={classes["imap-host"]}
        ></input>
        <input
          value={data.Imap_port}
          onChange={(e) => {
            dispatchDetail({
              type: "EMAILINTEGRATION",
              value: { ...data, Imap_port: e.target.value },
            });
          }}
          className={classes["imap-port"]}
        ></input>
      </div>
    </div>
  );
};

export default EmailIntegration;
