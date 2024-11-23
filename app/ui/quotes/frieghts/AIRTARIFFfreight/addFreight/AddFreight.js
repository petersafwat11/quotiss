import { useReducer, useState } from "react";
import { intialValue, locationReducer } from "./dataAndReducer";
import classes from "./addFreight.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import { FaRegComment } from "react-icons/fa";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
import { IoCloseCircleOutline } from "react-icons/io5";

import RichText from "@/app/ui/inputs/richTextGroup/RichTextGroup";
import Popup from "@/app/ui/popupWrapper/Popup";
import { containerTypesIntial, currencies } from "@/app/utils/options";
import DateInput from "@/app/ui/inputs/dateInput/DateInput";
import CheckboxGroup from "@/app/ui/inputs/checkboxGroup/CheckboxGroup";

const AddFreight = ({ toggleShowComponent, applyChanges, itemData, index }) => {
  const [data, dispatchDetail] = useReducer(
    locationReducer,
    itemData ? itemData : { ...intialValue, ...containerTypesIntial }
  );

  const [showComment, setShowComment] = useState(false);
  const toggleComment = () => {
    setShowComment(!showComment);
  };
  const serviceOptions = [
    "All",
    "Adria Airways (JP)",
    "Aegean Airlines (A3)",
    "Aer Arann (RE)",
    "Aer Lingus (EI)",
    "Aeroflot Russian Airlines (SU)",
    "Aerolineas Argentinas (AR)",
    "Aeromexico (AM)",
    "Air Algerie (AH)",
    "Air Astana (KC)",
    "Air Berlin (AB)",
    "Air Canada (AC)",
    "Air China (CA)",
    "Air Europa (UX)",
    "Air France (AF)",
    "Air India (AI)",
    "Air Malta (KM)",
    "Air Namibia (SW)",
    "Air New Zealand (NZ)",
    "Air Seychelles (HM)",
    "Air Tahiti (VT)",
    "Air Zimbabwe (UM)",
    "Alaska Airlines (AS)",
    "Alitalia (AZ)",
    "All Nippon Airways (NH)",
    "American Airlines (AA)",
    "Arik Air",
    "Atlantic Airways (RC)",
    "Aurigny",
    "Austrian Airlines (OS)",
    "Avianca (do not use)",
    "Azerbaijan Hava Yollary",
    "Bangkok Airways (do not use)",
    "Blue1",
    "British Airways (BA)",
    "Brussels Airlines (do not use)",
    "Bulgaria Air (do not use)",
    "Cathay Pacific (CX)",
    "Czech Airlines",
    "China Airlines (CI)",
    "China Eastern Airlines (MU)",
    "China Southern Airlines (CZ)",
    "Croatia Airlines (OU)",
    "Cyprus Airways (CY)",
    "Delta Air Lines (DL)",
    "Eastern Airways",
    "Egyptair",
    "El Al Israel Airlines (LY)",
    "Emirates (EK)",
    "Estonian Air",
    "Ethiopian Airlines",
    "Etihad Airways (EY)",
    "Eva Air",
    "Finnair (AY)",
    "Flybe",
    "Garuda Indonesia",
    "Gulf Air",
    "HAHN Air",
    "Hong Kong Airlines",
    "Iberia",
    "Icelandair",
    "Japan Airlines",
    "Jet Airways",
    "Kenya Airways",
    "Korean Air (KE)",
    "Kuwait Airways",
    "LAN Colombia",
    "LOT - Polish Airlines (LO)",
    "Lufthansa (LH)",
    "Luxair",
    "Malaysia Airlines (MH)",
    "Middle East Airlines",
    "Meridiana",
    "Mexicana",
    "Monarch Airlines",
    "Northwest Airlines",
    "Norwegian Cargo",
    "Olympic Air",
    "Oman Air",
    "Rossiya-Russia Airlines",
    "Qantas Airways (QF)",
    "Qatar Airways (QR)",
    "Royal Air Maroc",
    "Royal Brunei Airlines",
    "Royal Jordanian",
    "Siberia Airlines (S7)",
    "SAS Scandinavian Airlines System (SK)",
    "Singapore Airlines (SQ)",
    "South African Airways (SA)",
    "Spanair",
    "SriLankan Airlines",
    "SWISS International Air Lines",
    "TAM Airlines",
    "Tarom (RO)",
    "Thai Airways International",
    "Transaero Airlines",
    "Tunisair",
    "Turkish Airlines (TK)",
    "Ukraine International Airlines",
    "United Airlines",
    "US Airways",
    "Uzbekistan Airways",
    "Vietnam Airlines",
    "Virgin Atlantic Airways (VS)",
    "VLM Airlines (Cityjet)",
    "AirBridge Cargo (RU)",
    "Cargolux Airlines (CV)",
    "DHL Aviation",
    "UPS Airlines",
    "Andesmar Lineas Aereas",
    "Hainan Airlines",
    "Orient Air",
    "Polar Air Cargo",
    "TNT Airways",
    "Avianca Cargo (do not use)",
    "Nippon Cargo Airlines",
    "Pakistan International Airlines",
    "Condor",
    "CanAir Cargo",
    "Silkway",
    "Malaysia Cargo",
    "Coyne Airways",
    "Blue Air (0B)",
    "Magma Aviation",
    "Air Baltic (BT)",
    "Air Serbia (JU)",
    "European Air Transport",
    "IAG Cargo",
    "Economy Service",
    "Classic Service",
    "Premium Service",
    "Latam Cargo (LAN CARGO / UC)",
    "Allied Air Cargo (4W)",
    "Saudia Cargo (SV)",
    "TAAG Angola Airlines (DT)",
    "Fly Dubai (FZ)",
    "CobelAir",
    "VivaAerobus",
    "Nepal Airlines (RA)",
    "IndiGo CarGo (6E)",
    "ABSA Cargo Airline / LATAM Cargo Brasil (M3)",
    "ABX Air (GB)",
    "ACTC (MR)",
    "Aerosvit (VV)",
    "Aeromexico Cargo (AM)",
    "AeroUnion (6R)",
    "Aigle Azur (ZI)",
    "Air Arabia (G9)",
    "AirAsia (D7)",
    "AirAsia Berhad (AK)",
    "AirAsia India (I5)",
    "Air Atlanta Icelandic (CC)",
    "Air Belgium (KF)",
    "Air Botswana (KF)",
    "Airclass Lineas Aereas (VZ)",
    "Air Europa Cargo (UX)",
    "Air Greenland (GL)",
    "Air Hong Kong (LD)",
    "Air Incheon (KJ)",
    "Air Italy (IG)",
    "Air Jamaica (JM)",
    "Air Macau (NX)",
    "Air Madagascar (MD)",
    "Air Mauritius (MK)",
    "Airmax Cargo (X8)",
    "Air Moldova (9U)",
    "Air Niugini (PX)",
    "Air Tahiti Nui (TN)",
    "Air Transat (TS)",
    "Allied Air (4W)",
    "Aloha Air Cargo (KH)",
    "Amerijet International (M6)",
    "ANA All Nippon Cargo (NH)",
    "Asiana Airlines (OZ)",
    "ASL Airlines Belgium (formerly TNT) (3V)",
    "Astral Aviation (8V)",
    "Atlas Air (5Y)",
    "AV Cargo (Z3)",
    "Avianca Cargo (AV)",
    "Azerbaijan Airlines (J2)",
    "Azul Cargo (AD)",
    "Bahamasair (UP)",
    "Bangkok Airways (PG)",
    "Belavia Belarusian Airlines (B2)",
    "Biman Bangladesh (BG)",
    "Bringer Air Cargo (E6)",
    "Brussels Airlines (SN)",
    "Bulgaria Air (FB)",
    "CAL Cargo Air Lines (5C)",
    "Calm Air (MO)",
    "Camair-Co (QC)",
    "Canadian Airlines Int´l (CP)",
    "Cargojet Airways (W8)",
    "Cargologicair (P3)",
    "Cargolux Italia (C8)",
    "Caribbean Airlines (BW)",
    "Cathay Pacific Airways (CX)",
    "Cayman Airways (KX)",
    "Cebu Air (5J)",
    "Charterlines (CQ)",
    "China Cargo Airlines (CK)",
    "Cobaltair (CO)",
    "Condor Flugdienst (DE)",
    "Copa Airlines Cargo (CM)",
    "Corsair (SS)",
    "Coyne Airways (7C)",
    "Cubana de Aviacion (CU)",
    "Czech Airlines (OK)",
    "DHL Aero Expreso (D5)",
    "DHL Aviation/DHL Airways (ER)",
    "EAT / DHL Aviation (QY)",
    "Dragonair (KA)",
    "Egyptair (MS)",
    "Estafeta Carga Aerea (E7)",
    "Estonian Air (OV)",
    "Ethiopian Airlines (ET)",
    "Eva Airways (BR)",
    "Far Eastern Air Transport (EF)",
    "Fedex (FX)",
    "flydubai cargo (FZ)",
    "Gabon Airlines (GY)",
    "Garuda Indonesia (GA)",
    "Global Aviation and Services (5S)",
    "Gol Airlines (VRG Linhas Aéreas) (G3)",
    "Gulf Air (GF)",
    "Hainan Airlines (HU)",
    "Hawaiian Airlines (HA)",
    "Hong Kong Air Cargo (RH)",
    "Hong Kong Airlines (HX)",
    "Hong Kong Express (UO)",
    "IAG Cargo (Iberia) (IB)",
    "Icelandair (FI)",
    "Insel Air Cargo (7I)",
    "Iran Air (IR)",
    "Japan Airlines (JL)",
    "Jeju Air (7C)",
    "Jet Airways (9W)",
    "Jet Airways Inc. (US) (QJ)",
    "Jetairfly (TB)",
    "Jet Club (0J)",
    "Jetstar Asia Airways (3K)",
    "Jubba Airways (3J)",
    "Kalitta Air (K4)",
    "Kenya Airways (KQ)",
    "KLM Cargo (KL)",
    "Kuwait Airways (KU)",
    "LACSA Airlines of Costa Rica (LR)",
    "LAN Airlines (LATAM) (LA)",
    "LAN Chile Cargo (UC)",
    "LAN Ecuador (XL)",
    "LATAM Airlines Brasil / TAM Linhas Aereas  (JJ)",
    "LATAM CARGO Colombia (L7)",
    "LIAT Airlines (LI)",
    "Lufthansa Cargo AG (LH)",
    "Mahan Airlines (W5)",
    "Malaysian Airline System (MH)",
    "Malindo Airways (OD)",
    "Mandarin Airlines (AE)",
    "Martinair Cargo (MP)",
    "MASAir (M7)",
    "MCS Aerocarga de Mexico (T8)",
    "Mercury Americas (4X)",
    "Middle East Airlines (ME)",
    "MNG Airlines (MB)",
    "National Air Cargo (N8)",
    "Niger Air Cargo (NO)",
    "Nippon Cargo Airlines (KZ)",
    "Nok Air (DD)",
    "Northern Air Cargo (NC)",
    "Norwegian Air Shuttle (DY)",
    "Norwegian Air UK (DI)",
    "Olympic Airways (OA)",
    "Oman Air (WY)",
    "Pakistan Int´l Airlines (PK)",
    "Pegasus Cargo (PC)",
    "Philippine Airlines (PR)",
    "Polar Air Cargo (PO)",
    "Raya Airways (TH)",
    "Royal Nepal Airlines (RA)",
    "Royal Air Maroc (AT)",
    "Royal Brunei Airlines (BI)",
    "Royal Jordanian (RJ)",
    "RUS (Reliable Unique Services) Aviation (R4)",
    "RwandAir (WB)",
    "Ryan Air (FR)",
    "SAC South American Airways (S6)",
    "SATA Air Acores (SP)",
    "SATA International (S4)",
    "Saudi Arabian Airlines (SV)",
    "SF Airlines (O3)",
    "Shandong Airlines (SC)",
    "Shanghai Airlines (FM)",
    "Shenzhen Airlines (ZH)",
    "Sichuan Airlines (3U)",
    "Silk Air (MI)",
    "Silk Way Airlines (ZP)",
    "Silk Way West Airlines (7L)",
    "Skygreece Airlines (GW)",
    "Skylease Cargo (KY)",
    "Sky West Airlines (OO)",
    "Solar Cargo (4S)",
    "Southwest Airlines (WN)",
    "SpiceJet (SG)",
    "SriLankan Cargo (UL)",
    "Starlight Airlines (QP)",
    "Starlux Cargo (JX)",
    "Sunclass Airlines (DK)",
    "Swiss (LX)",
    "Syrian Arab Airlines (RB)",
    "Suparana / Jinpeng / Yangtze River Express Airlines (Y8)",
    "TAAG-Angola Airlines (DT)",
    "TAB Transportes Aereos Bolivianos (B1)",
    "TACA (TA)",
    "Tampa Airlines (QT)",
    "TAP Portugal (TP)",
    "TATA SIA Airlines/Vistara Cargo (UK)",
    "Thai Airways (TG)",
    "Trans American Airways/TACA Peru (T0)",
    "Trans Mediterranean Airways (TL)",
    "TUI Airlines (TB)",
    "Tunisair (TU)",
    "Ukraine Int´l Airlines (PS)",
    "Uni Airways (B7)",
    "United Cargo (UA)",
    "Uni-Top Airlines (UW)",
    "UPS Airlines (5X)",
    "Ural Airlines Cargo (U6)",
    "Uzbekistan Airways (HY)",
    "VARIG RG 0 (42)",
    "Vietnam Airlines (VN)",
    "Vensecar Internacional (V4)",
    "Westjet Cargo (WS)",
    "WOW Air (WW)",
    "XiamenAir (MF)",
    "XL Airways France (SE)",
    "Yemenia Yemen Airways (IY)",
    "Other Airline",
    "GLOBE AIR CARGO",
    "Global Load Cargo",
    "Airline of Choice",
    "HAE Solutions",
    "ITA Airways (AZ)",
    "Norse Cargo (N0)",
    "CMA CGM Air Cargo (2C)",
    "Central Airlines China (I9)",
    "French Bee (BF)",
    "Juneyao Airlines (HO)",
    "Vueling Cargo (VY)",
    "Air Premia (YP)",
    "Aerologic (3S)",
  ];

  return (
    <div className={classes["form"]}>
      <CheckboxGroup
        data={data}
        type={"checked"}
        dataKey={"checked"}
        setData={dispatchDetail}
        dataType="single"
      />

      <div className={classes["name"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            noLabel={true}
            id={"name"}
            data={data.name}
            dataKey={"name"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>

      <div className={classes["service"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"service"}
            dataKey={"service"}
            label={"Service"}
            options={serviceOptions}
            setData={dispatchDetail}
            dataType={"single"}
          />
        </div>
      </div>
      <div className={classes["start"]}>
        <div className={classes["input-wrapper"]}>
          <DateInput
            noLabel={true}
            label={"Validity Start"}
            data={data.validity_start}
            dataKey={"validity_start"}
            setData={dispatchDetail}
          />
        </div>
      </div>
      <div className={classes["end"]}>
        <div className={classes["input-wrapper"]}>
          <DateInput
            noLabel={true}
            label={"Validity End"}
            data={data.validity_end}
            dataKey={"validity_end"}
            setData={dispatchDetail}
          />
        </div>
      </div>
      <div className={classes["min-price"]}>
        <div className={classes["input-wrapper"]}>
          <InputGroup
            numbersOnly={true}
            noLabel={true}
            id={"min_price"}
            data={data.min_price}
            dataKey={"min_price"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
      </div>
      <div className={classes["currency"]}>
        <div className={classes["input-wrapper"]}>
          <SelectionGroup
            noLabel={true}
            data={data}
            type={"currency"}
            dataKey={"currency"}
            label={"Currency"}
            options={currencies}
            setData={dispatchDetail}
            dataType={"single"}
          />
        </div>
      </div>

      <div className={classes["comment"]}>
        <div className={classes["input-wrapper"]}>
          <div onClick={toggleComment} className={classes["comment-wrapper"]}>
            <FaRegComment className={classes["comment-icon"]} />
          </div>
        </div>
        {showComment && (
          <Popup>
            <div className={classes["rich-text"]}>
              <IoCloseCircleOutline
                onClick={toggleComment}
                className={classes["close"]}
              />
              <RichText
                data={data}
                dataKey={"comment"}
                setData={dispatchDetail}
                dataType={"single"}
              />
            </div>
          </Popup>
        )}
      </div>

      <div className={classes["actions"]}>
        <div
          onClick={() => {
            console.log("index", index);
            index || index === 0
              ? applyChanges(data, "edit", index)
              : applyChanges(data, "create");
          }}
          className={classes["apply-div"]}
        >
          <IoCheckmarkSharp className={classes["apply-icon"]} />
        </div>
        <div onClick={toggleShowComponent} className={classes["cancel-div"]}>
          <FaXmark className={classes["cancel-icon"]} />
        </div>
      </div>
    </div>
  );
};

export default AddFreight;
