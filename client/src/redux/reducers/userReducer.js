var initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_USERS": {
      return {};
    }
    default:
      return state;
  }
};
