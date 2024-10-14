import React from "react";
import classes from "./ltl.module.css";
const LTL = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["contianer"]}>
      <form>
        <label>
          Select an option:
          <select
            name="selection"
            value={formState.selection}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
            <option value="optionC">Option C</option>
          </select>
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="option1"
            checked={data.surchargeOptions.mandatory}
            onChange={() => {
              dispatchDetail({
                type: "GENERAL",
                value: {
                  ...data,
                  surchargeOptions: {
                    ...data.surchargeOptions,
                    mandatory: !data.surchargeOptions.mandatory,
                  },
                },
              });
            }}
          />
          [mandatory] Surcharge is mandatory
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="option2"
            checked={data.surchargeOptions.uber}
            onChange={() => {
                dispatchDetail({
                  type: "GENERAL",
                  value: {
                    ...data,
                    surchargeOptions: {
                      ...data.surchargeOptions,
                      uber: !data.surchargeOptions.uber,
                    },
                  },
                });
              }}
            />
          [uber] Surcharge needs to be present in all connected rates
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="option3"
            checked={data.surchargeOptions.noMargin}
            onChange={() => {
                dispatchDetail({
                  type: "GENERAL",
                  value: {
                    ...data,
                    surchargeOptions: {
                      ...data.surchargeOptions,
                      noMargin: !data.surchargeOptions.noMargin,
                    },
                  },
                });
              }}
            />
          [no margin] Surcharge counted without margin
        </label>
        <br />
      </form>
    </div>
  );
};

export default LTL;
