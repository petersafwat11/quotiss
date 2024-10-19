export const chargesReducer = (state, action) => {
  console.log("state", state);

  const prevState = { ...state };
  if (action.type === "UPDATE-ALL") {
    return action.value;
  }
  if (action.type === "TERMSANDCONDITIONS") {
    return { ...prevState, terms_and_conditions: action.value };
  }
  if (action.type === "SURCHARGES") {
    return { ...prevState, surcharges: action.value };
  }
  return {
    ...prevState,
    [action.type.toLowerCase()]: action.value,
  };

  //   else if (action.type === "NAME") {
  //     return {
  //       ...prevState,
  //       name: action.value,
  //     };
  //   } else if (action.type === "KIND") {
  //     return {
  //       ...prevState,
  //       details: action.value,
  //     };
  //   } else if (action.type === "CODE") {
  //     return {
  //       ...prevState,
  //       email_integration: action.value,
  //     };
  //   } else if (action.type === "AVAILABLE_ONLINE") {
  //     return {
  //       ...prevState,
  //       quote_options: action.value,
  //     };
  //   }
  // else if (action.type === "COUNTRY") {
  //     return {
  //       ...prevState,
  //       quote_options: action.value,
  //     };
  //   } else if (action.type === "REGION") {
  //     return {
  //       ...prevState,
  //       quote_options: action.value,
  //     };
  //   } else if (action.type === "LATITUDE") {
  //     return {
  //       ...prevState,
  //       quote_options: action.value,
  //     };
  //   } else if (action.type === "LONGITUDE") {
  //     return {
  //       ...prevState,
  //       quote_options: action.value,
  //     };
  //   } else if (action.type === "AVAILABLE_ONLINE") {
  //     return {
  //       ...prevState,
  //       quote_options: action.value,
  //     };
  //   } else if (action.type === "AVAILABLE_ONLINE") {
  //     return {
  //       ...prevState,
  //       quote_options: action.value,
  //     };
  //   }
};
export const intialValue = {
  name: "",
  kind: "",
  code: "",
  available_online: "Both",
  country: "",
  region: "",
  latitude: "",
  longitude: "",
  surcharges: {
    surcharge_type: "",
    name: "",
    type: "",
    online: "",
    service: "",
    sort_order: "",
    shipment: "",
    currency: "",
    "20_dc": "",
    "40_dc": "",
    "40_hc": "",
    "45_hc": "",
    "20_nor": "",
    "40_nor": "",
    "20_reef": "",
    "40_hreef": "",
    "45_plwd": "",
    "20_ot": "",
    "40_ot": "",
    "20_fr": "",
    "40_fr": "",
    "20_tank": "",
    "40_tank": "",
  },
  terms_and_conditions: {
    type: "",
    language: "",
    destination_terms_and_conditions: "",
    origin_terms_and_conditions: "",
  },
};
