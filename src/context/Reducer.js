// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "GET_GENDER":
      return {
        ...state,
        gender: action.payload,
      };

    case "GET_AGE":
      return {
        ...state,
        age: action.payload,
      };

    case "GET_WEIGHT":
      return {
        ...state,
        weight: action.payload,
      };

    case "GET_HEIGHT":
      return {
        ...state,
        height: action.payload,
      };

    case "ADD_RESULT":
      return {
        ...state,
        result: action.payload,
      };

    case "ADD_TO_SAVED":
      return {
        ...state,
        saved: [...state.saved, action.payload],
      };

    default:
      return state;
  }
};
