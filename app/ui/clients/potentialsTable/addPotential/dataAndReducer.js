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
  from_country: "",
  from_location: "",
  to_country: "",
  to_location: "",
  type: "",
  mode: "",
  total_volume: "0",
  unit: "",
  comment: "",
};
