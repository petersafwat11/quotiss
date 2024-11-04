
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
  quote_type: "",
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
