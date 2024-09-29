import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  comment: "",
  rating: 1,
};

const SET_NAME_ACTION_TYPE = "setName";
const SET_COMMENT_ACTION_TYPE = "setComment";
const SET_RATING_ACTION_TYPE = "setRating";
const SET_CLEAR_ACTION_TYPE = "setClear";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME_ACTION_TYPE:
      return {
        ...DEFAULT_FORM_VALUE,
        name: payload,
      };
    case SET_COMMENT_ACTION_TYPE:
      return {
        ...state,
        comment: payload,
      };
    case SET_RATING_ACTION_TYPE:
      return {
        ...state,
        rating: payload,
      };
    case SET_CLEAR_ACTION_TYPE:
      return {
        ...DEFAULT_FORM_VALUE,
      };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { name, comment, rating } = form;

  const setName = (value) => {
    dispatch({ type: SET_NAME_ACTION_TYPE, payload: value });
  };
  const setComment = (value) => {
    dispatch({ type: SET_COMMENT_ACTION_TYPE, payload: value });
  };
  const setRating = (value) => {
    dispatch({ type: SET_RATING_ACTION_TYPE, payload: value });
  };

  const setClear = (value) => {
    dispatch({ type: SET_CLEAR_ACTION_TYPE, payload: value });
  };

  return {
    name,
    comment,
    rating,
    setName,
    setComment,
    setRating,
    setClear,
  };
};
