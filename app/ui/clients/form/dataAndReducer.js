export const clientsReducer = (state, action) => {
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
  organization_type: "",
  organization_name: "",
  offer_language: "",
  status: "",
  sales_rep: "",
  account_owner: "",
  payment_term: "",
  taxpayer_identification_number: "",
  hashtags: "",
  client_contacts: "",
  client_details: "",
  potentials: [],
  terms_and_conditions: {
    language: "",
    type: "",
    destination_terms_and_conditions: "",
    origin_terms_and_conditions: "",
  },
  contacts: {
    country: "",
    postal_code: "",
    city: "",
    street: "",
    persons: [],
  },
  details: {
    customer_id_internal: "",
    bank_details: "",
    notes: "",
  },
  margins: {
    air:[],
    FCLRail:[],
    FCLSea:[],
    LCLRail:[],
    LCLSea:[],
    LTL:[]
  }
};
