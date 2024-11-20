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
  less_45kg: "",
  more_than_45kg: "",
  less_than_100kg: "",
  less_than_300kg: "",
  less_than_500kg: "",
  less_than_1000kg: "",
  // comment: "",
};
