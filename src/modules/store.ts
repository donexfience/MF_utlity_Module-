import { createStore } from "redux";
interface State {
  sharedData: { user: string; age: number } | null;
}
const initialState: State = {
  sharedData: null,
};
const SET_SHARED_DATA = "SET_SHARED_DATA";
export const setSharedData = (data: { user: string; age: number }) => ({
  type: SET_SHARED_DATA,
  payload: data,
});
function rootReducer(
  state = initialState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case SET_SHARED_DATA:
      return { ...state, sharedData: action.payload };
    default:
      return state;
  }
}
const store = createStore(rootReducer);
console.log(store, "store in utillty");
export default store;
