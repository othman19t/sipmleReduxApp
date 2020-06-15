import * as actions from "./actionTypes";
let lastId = 1;
export const BugReducer = (state = [], action) => {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
};

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_POST:
      return [...state, action.post];
    default:
      return state;
  }
};
