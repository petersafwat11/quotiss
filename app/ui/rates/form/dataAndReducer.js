export const ratesReducer = (state, action) => {
  console.log("state", state, action);

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
  contract_number: "",
  rate_type: "",
  validity_start: "",
  validity_end: "",
  container_type: [],
  base_origin_location: "",
  base_destination_location: "",
  pickup_delivery_rate: "",
  terminal_type: "",
  direction: "",
  currency: "",
  mark_up: "",
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
  online: false,
  notes: {
    internal_notes: {},
    visible_notes: {},
  },
  restrictions: {
    allowed_clients: [],
    allowed_users: [],
  },
  surcharges: [],
  locations: [],
  restricted_postal_codes: [],
  destination_locations: [],
  origin_locations: [],
};
