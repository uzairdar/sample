import { SET_DATA } from "./Actions";
export const setData = (payload) => {
  return {
    type: SET_DATA,
    payload: payload,
  };
};
