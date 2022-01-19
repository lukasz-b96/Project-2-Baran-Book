const initialState = {
  loading: false,
  likeOrUnlikeLoading: false,
  followLoading: false,
  unfollowLoading: false,
};

export const alertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "LIKE_UNLIKE_LOADING":
      return {
        ...state,
        likeOrUnlikeLoading: action.payload,
      };
    case "FOLLOW_LOADING":
      return {
        ...state,
        followLoading: action.payload,
      };
    case "UNFOLLOW_LOADING":
      return {
        ...state,
        unfollowLoading: action.payload,
      };
    default:
      return state;
  }
};
