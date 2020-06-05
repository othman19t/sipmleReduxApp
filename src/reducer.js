import * as action from "./actiontypes";
let lastId = 1;
const Reducer = (state = [], action) => {
  switch (action.type) {
    case action.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case action.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
};
export default Reducer;
