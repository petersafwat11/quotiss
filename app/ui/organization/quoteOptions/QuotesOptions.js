import React from "react";
import classes from "./quotesOptions.module.css";
import CheckboxGroup from "../../inputs/checkboxGroup/CheckboxGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import InputGroup from "../../inputs/inputGroup/InputGroup";
const QuotesOptions = ({ data, dispatchDetail }) => {
  const currencies = [
    "USD - US Dollar",
    "EUR - Euro",
    "PLN - Polish Zloty",
    "AUD - Australian Dollar",
    "AED - Emirati Dirham",
    "BGN - Bulgarian Lev",
    "BHD - Bahraini Dinar",
    "BRL - Brazilian Real",
    "CAD - Canadian Dollar",
    "CHF - Swiss Franc",
    "CNY - Chinese Yuan",
    "CZK - Czech Koruna",
    "DKK - Danish Krone",
    "DZD - Algerian Dinar",
    "EGP - Egyptian Pound",
    "GBP - British Pound",
    "HKD - Hong Kong Dollar",
    "HRK - Croatian Kuna",
    "HUF - Hungarian Forint",
    "IDR - Indonesian Rupiah",
    "ILS - Israeli New Shekel",
    "INR - Indian Rupee",
    "JOD - Jordanian Dinar",
    "JPY - Japanese Yen",
    "KRW - South Korean Won",
    "KWD - Kuwaiti Dinar",
    "LKR - Sri Lankan Rupee",
    "MAD - Moroccan Dirham",
    "MVR - Maldivian Rufiyaa",
    "MXN - Mexican Peso",
    "MYR - Malaysian Ringgit",
    "NOK - Norwegian Krone",
    "NZD - New Zealand Dollar",
    "OMR - Omani Rial",
    "PHP - Philippine Peso",
    "RON - Romanian Leu",
    "RUB - Russian Ruble",
    "SAR - Saudi Arabian Riyal",
    "SEK - Swedish Krona",
    "SGD - Singapore Dollar",
    "THB - Thai Baht",
    "TRY - Turkish Lira",
    "TND - Tunisian Dinar",
    "VND - Vietnamese Dong",
    "ZAR - South African Rand",
  ];

  return (
    <div className={"sub-form"}>
      <div className={classes["wrapper"]}>
        <CheckboxGroup
          data={data}
          type={"quote_options"}
          dataKey={"show_service_name_for_freight"}
          label={"Show service name for freight"}
          setData={dispatchDetail}
        />
        <SelectionGroup
          data={data}
          type={"quote_options"}
          dataKey={"main_currency"}
          label={"Main currency:"}
          options={currencies}
          setData={dispatchDetail}
        />
      </div>
      <InputGroup
        id={"insurance_value_multiplier"}
        label={"Insurance value multiplier (%):"}
        dataKey={"insurance_value_multiplier"}
        objectType={"quote_options"}
        data={data}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="object"
      />
      <InputGroup
        id={"insurance_rate"}
        label={"Insurance rate (%):"}
        dataKey={"insurance_rate"}
        objectType={"quote_options"}
        data={data}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="object"
      />
      <InputGroup
        id={"insurance_min_value"}
        label={"Insurance min value:"}
        dataKey={"insurance_min_value"}
        objectType={"quote_options"}
        data={data}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="object"
      />
    </div>
  );
};

export default QuotesOptions;
