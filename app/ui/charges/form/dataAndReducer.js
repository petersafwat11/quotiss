const surchargeIntialValue = {
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
};
export const chargesReducer = (state, action) => {
  console.log("state", state);

  const prevState = { ...state };
  if (action.type === "UPDATE-ALL") {
    return action.value;
  }
  // if (action.type === "SURCHARGES") {
  //   const index = action.index;
  //   const data = action.value;
  //   const Surcharge = [...state.surcharges];
  //   Surcharge.length === index
  //     ? Surcharge.push(data)
  //     : (Surcharge[index] = data);
  //   return { ...prevState, surcharges: Surcharge };
  // }
  return {
    ...prevState,
    [action.type.toLowerCase()]: action.value,
  };
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
  surcharges: [],
  terms_and_conditions: {
    type: "",
    language: "",
    destination: "",
    origin: "",
  },
};
