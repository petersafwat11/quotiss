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
  origin_country: "",
  destination_country: "",
  service: [],
  active: "",
  type: "",
  less_than_1cbm: "",
  less_than_2cbm: "",
  less_than_3cbm: "",
  less_than_4cbm: "",
  less_than_5cbm: "",
  less_than_6cbm: "",
  less_than_7cbm: "",
  less_than_8cbm: "",
  less_than_9cbm: "",
  less_than_10cbm: "",
  less_than_11cbm: "",
  less_than_12cbm: "",
  less_than_13cbm: "",
  less_than_14cbm: "",
  less_than_15cbm: "",
  less_than_16cbm: "",
  less_than_17cbm: "",
  less_than_18cbm: "",
  less_than_19cbm: "",
  less_than_20cbm: "",
  more_than_20cbm: "",
};
