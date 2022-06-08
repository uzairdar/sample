import { SET_DATA } from "../Actions";
const initialState = {
  data: [],
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
