import { useReducer } from "react";


const DEFAULT_FORM_VALUE = {
  user: "",
  pin: "",
};
const SET_USER_ACTION_TYPE = "setUser";
const SET_PIN_ACTION_TYPE = "setPin";
const SET_CLEAR_ACTION_TYPE = "setClear";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_ACTION_TYPE:
      return {
        ...DEFAULT_FORM_VALUE,
        user: payload,
      };
    case SET_PIN_ACTION_TYPE:
      return {
        ...state,
        pin: payload,
      };
    case SET_CLEAR_ACTION_TYPE:
      return {
        ...DEFAULT_FORM_VALUE,
      };
    default:
      return state;
  }
};

export const useLoginForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { user, pin } = form;

  const setUser = (value) => {
    dispatch({ type: SET_USER_ACTION_TYPE, payload: value });
  };
  const setPin = (value) => {
    dispatch({ type: SET_PIN_ACTION_TYPE, payload: value });
  };

  const setClear = (value) => {
    dispatch({ type: SET_CLEAR_ACTION_TYPE, payload: value });
  };

  return {
    user,
    pin,
    setUser,
    setPin,
    setClear,
  };
};
