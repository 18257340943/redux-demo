import * as ActionTypes from "./actionTypes";

const initState = {
  count: 0,
  list: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        count: 0,
      };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ActionTypes.INIT_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
