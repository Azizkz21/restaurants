import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 1,
};

const SET_NAME_ACTION_TYPE = "setName";
const SET_TEXT_ACTION_TYPE = "setText";
const SET_INCREMENT_RATING_ACTION_TYPE = "setIncrementRating";
const SET_DECREMENT_RATING_ACTION_TYPE = "setDecrementRating";
const SET_CLEAR_ACTION_TYPE = "setClear";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME_ACTION_TYPE:
      return {
        ...DEFAULT_FORM_VALUE,
        name: payload,
      };
    case SET_TEXT_ACTION_TYPE:
      return {
        ...state,
        text: payload,
      };
    case SET_INCREMENT_RATING_ACTION_TYPE:
      return {
        ...state,
        rating: state.rating + 1,
      };
    case SET_DECREMENT_RATING_ACTION_TYPE:
      return {
        ...state,
        rating: state.rating - 1,
      };
    case SET_CLEAR_ACTION_TYPE:
      return {
        ...DEFAULT_FORM_VALUE,
      };
    default:
      return state;
  }
};

export const useForm = ({
  userName = "",
  reviewText = "",
  reviewRating = 1,
}) => {
  DEFAULT_FORM_VALUE.name = userName;
  DEFAULT_FORM_VALUE.text = reviewText;
  DEFAULT_FORM_VALUE.rating = reviewRating;

  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { name, text, rating } = form;

  const setName = (value) => {
    dispatch({ type: SET_NAME_ACTION_TYPE, payload: value });
  };

  const setText = (value) => {
    dispatch({ type: SET_TEXT_ACTION_TYPE, payload: value });
  };
  const setIncrementRating = () => {
    dispatch({ type: SET_INCREMENT_RATING_ACTION_TYPE });
  };

  const setDecrementRating = () => {
    dispatch({ type: SET_DECREMENT_RATING_ACTION_TYPE });
  };
  const setClear = (value) => {
    dispatch({ type: SET_CLEAR_ACTION_TYPE, payload: value });
  };

  return {
    name,
    text,
    rating,
    setName,
    setText,
    setIncrementRating,
    setDecrementRating,
    setClear,
  };
};
