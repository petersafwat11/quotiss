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

  name: "",
  service: "",
  rate_type: "",
  validity_start: "",
  validity_end: "",
  container_type: [],
  contract_number: "",
  pickup_delivery_rate: "",
  origin: "",
  destination: "",
  direction: "",
  currency: "",
  mark_up: "",
  online: false,
  notes: {
    internal_notes: {},
    visible_notes: {},
  },
  restrictions: {
    allowed_clients: [],
    visible_notes: [],
  },
  surcharges: {
    type: "",
    origin_locations: "",
    destinations_locations: "",
    margin_type: "",
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
  locations: {
    origin_country: "",
    destination_country: "",
    origin_location: "",
    destination_location: "",
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
};
