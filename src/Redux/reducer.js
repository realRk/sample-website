import { actions, initialState } from "./stateAndActions";

export const reducer = (state = initialState, action) => {
  let { type,payload } = action;
  switch (type) {
      case actions.ADD_PRODUCTS:
          return {...state,products:payload};
        case actions.ADD_BRANDS:
          return {...state,brands:payload};
        case actions.ADD_STATES:
          return {...state,states:payload}
        case actions.USER_LOGIN:
          return {...state,user:payload}
          //crops
          case actions.ADD_CROPS:
            return {...state,crops:payload};
    default:
      return state;
  }
};
