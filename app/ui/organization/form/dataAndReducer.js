export const organizationReducer = (state, action) => {
  console.log("state", state);
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
  name: "",
  details: {
    country: "",
    city: "",
    postal_code: "",
    street: "",
    taxpayer_id_number: "",
    spread: "",
    quote_collecting_email: "",
    ecu_account_id: "",
    logo: "",
  },
  quote_options: {
    show_service_name_for_freight: false,
    main_currency: "",
    insurance_value_multiplier: "",
    insurance_rate: null,
    insurance_min_value: null,
    insurance_min_value_currency: null,
  },
  email_integration: {
    use_SSL: false,
  },
};
