export const ratesReducer = (state, action) => {
  console.log("state", state);

  const prevState = { ...state };
  if (action.type === "UPDATE-ALL") {
    return action.value;
  } else {
    return {
      ...prevState,
      [action.type.toLowerCase()]: action.value,
    };
  }
};
export const intialValue = {
  quote_for_client: "",
  validity_start: "",
  validity_end: "",
  quote_type: "FTL",
  incoterms: "",
  direction: "",
  container_type: [],
  service_code: [],
  density: "",
  pickup_date: "",
  weight_backets: [],
  weight: "",
  CBM: "",
  LDM: "",
  PCS: "",
  origin_location: "",
  origin_country: "",
  destination_location: "",
  destination_country: "",
  fcl_freight: {
    freights_selected: [],
    internal_notes: "",
    freights: [],
    type: "",
    m20_dc: "",
    m40_dc: "",
    m40_hc: "",
    m45_hc: "",
    m20_nor: "",
    m40_nor: "",
    m20_reef: "",
    m40_hreef: "",
    m45_plwd: "",
    m20_ot: "",
    m40_ot: "",
    m20_fr: "",
    m40_fr: "",
    m20_tank: "",
    m40_tank: "",
  },
  airtariff_freight: { freights: [], internal_notes: "" },
  ftl_freight: { freights: [], internal_notes: "", comment_offer: "" },
  ltl_freight: { freights: [], internal_notes: "", comment_offer: "" },
  air_freight: { freights: [], internal_notes: "" },
  lcl_freight: { freights: [], internal_notes: "" },
  quote: {
    //text formmater
    message: "",
    net_price: "",
    margin: "",
    total: "",
    internal_notes: "",
  },
  layout: {
    terms_and_conditions_type: "manual",
    modify: false,
    TermsAndConditions: "",
  },
  email: {
    recipient_to: "",
    cc: "",
    bcc: "",
    subject: "",
    message: "",
  },
};
