import { useReducer } from "react";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import { holidaysReducer, intialValue } from "./dataAndReducer";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import classes from "./makeHolidayPopup.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

const MakeHolidayPopup = ({ toggleAddHoliday, applyChanges, itemData }) => {
  const [data, dispatchDetail] = useReducer(
    holidaysReducer,
    itemData ? itemData : intialValue
  );
  const countriesOptions = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const servicesOptions = [
    "All",
    "MSC",
    "Maersk Line",
    "Hapag-Lloyd",
    "CMA CGM",
    "COSCO",
    "Evergreen",
    "OOCL",
    "Yang Ming",
    "Hamburg Süd",
    "HMM Hyundai",
    "PIL",
    "Zim",
    "Wan Hai",
    "X-Press Feeders",
    "Arkas Line",
    "TS Lines",
    "Zhonggu Shipping",
    "APL",
    "Other",
    "2M",
    "THE Alliance",
    "Ocean Alliance",
    "Seago Line",
  ];
  return (
    <div className={classes["form"]}>
      <div className={classes["origin-country"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            data={data}
            type={"origin_country"}
            dataKey={"origin_country"}
            label={""}
            options={countriesOptions}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["destination-country"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            data={data}
            type={"destination_country"}
            dataKey={"destination_country"}
            label={""}
            options={countriesOptions}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["service"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            data={data}
            type={"service"}
            dataKey={"service"}
            label={""}
            options={servicesOptions}
            setData={dispatchDetail}
            dataType="single"
          />
        </div>
      </div>

      {Object.keys(intialValue)
        .slice(3)
        .map((month, index) => (
          <div key={index} className={classes["month"]}>
            <div className={classes["input-wrapper"]}>
              <InputGroup
                numbersOnly={true}
                noLabel={true}
                id={month}
                label={month}
                data={data[month]}
                dataKey={month}
                setData={dispatchDetail}
                stateType={"useReducer"}
                dataType="single"
              />
            </div>
          </div>
        ))}
      <div className={classes["actions"]}>
        <div
          onClick={() => {
            applyChanges(data);
          }}
          className={classes["apply-div"]}
        >
          <IoCheckmarkSharp className={classes["apply-icon"]} />
        </div>
        <div onClick={toggleAddHoliday} className={classes["cancel-div"]}>
          <FaXmark className={classes["cancel-icon"]} />
        </div>
      </div>
    </div>
  );
};

export default MakeHolidayPopup;
