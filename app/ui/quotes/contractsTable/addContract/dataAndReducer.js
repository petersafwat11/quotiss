export const locationReducer = (state, action) => {
  console.log("state", state, action);
  const prevState = { ...state };
  if (action.type === "UPDATE-ALL") {
    return action.value;
  }
  return {
    ...prevState,
    [action.type.toLowerCase()]: action.value,
  };
};

export const intialValue = {
  type: "",
  origin_locations: "",
  destination_locations: "",
  margin_type: "",
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
};
