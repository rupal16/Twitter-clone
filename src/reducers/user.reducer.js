const userProfile = (
  state = {
    isLoading: false,
    error: "",
    displayName: "",
    userName: "",
    email: "",
    dob: "",
  },
  action
) => {
  switch (action.type) {
    case "CREATE_USER_SUCCESS":
      return {
        ...state,
        isLoading: true,
        displayName: action.payload.displayName,
        userName: action.payload.userName,
        email: action.payload.email,
        dob: action.payload.dob,
      };

    case "CREATE_USER_FAILURE":
      return {
        ...state,
        error: action.payload.error,
      };

    case "FETCH_USER_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        displayName: action.payload.displayName,
        userName: action.payload.userName,
        email: action.payload.email,
        dob: action.payload.dob,
      };
    case "FETCH_USER_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: true,
        displayName: action.payload.displayName,
        userName: action.payload.userName,
        email: action.payload.email,
        dob: action.payload.dob,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export { userProfile };
