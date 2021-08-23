// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "GET_GENDER":
      return {
        ...state,
        gender: action.payload,
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

    case "GET_STATUS":
      return {
        ...state,
        status: action.payload,
      };

    case "GET_NEED":
      return {
        ...state,
        need: action.payload,
      };

    case "ADD_TO_SAVED":
      return {
        ...state,
        saved: [action.payload, ...state.saved],
      };

    default:
      return state;
  }
};
