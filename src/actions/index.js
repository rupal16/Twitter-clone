export const createUserRequest = (displayName, userName, email, dob) => {
  return {
    type: "CREATE_USER_REQUEST",
    payload: {
      displayName: displayName,
      userName: userName,
      email: email,
      dob: dob,
    },
  };
};

export const createUserSuccess = (displayName, userName, email, dob) => ({
  type: "CREATE_USER_SUCCESS",
  payload: {
    displayName: displayName,
    userName: userName,
    email: email,
    dob: dob,
  },
});

export const createUserFailure = (error) => ({
  type: "CREATE_USER_FAILURE",
  payload: {
    error: error,
  },
});
export const fetchUserRequest = () => ({
  type: "FETCH_USER_REQUEST",
});

export const fetchUserSuccess = (displayName, userName, email, dob) => ({
  type: "FETCH_USER_SUCCESS",
  payload: {
    displayName: displayName,
    userName: userName,
    email: email,
    dob: dob,
  },
});

export const fetchUserFailure = (error) => ({
  type: "FETCH_USER_FAILURE",
  payload: {
    error: error,
  },
});

export const createTweetRequest = (message, url) => {
  return {
    type: "CREATE_TWEET_REQUEST",
    payload: {
      message: message,
      url: url,
    },
  };
};

export const createTweetSuccess = (posts) => {
  return {
    type: "CREATE_TWEET_SUCCESS",
    payload: {
      posts,
    },
  };
};

export const createTweetFailure = (error) => {
  return {
    type: "CREATE_TWEET_FAILURE",
    payload: {
      error: error,
    },
  };
};

export const loginRequest = (email, password) => {
  return {
    type: "LOGIN_REQUEST",
    payload: {
      email: email,
      password: password,
    },
  };
};

export const loginSuccess = (displayName, userName, email, dob) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: {
      displayName: displayName,
      userName: userName,
      email: email,
      dob: dob,
    },
  };
};
export const loginFailure = (error) => {
  return {
    type: "LOGIN_FAILURE",
    payload: {
      error: error,
    },
  };
};

export const fetchAllPostsRequest = () => {
  return {
    type: "FETCH_ALL_POSTS_REQUEST",
  };
};

export const fetchAllPostsSuccess = (posts) => ({
  type: "FETCH_ALL_POSTS_SUCCESS",
  payload: {
    posts: posts,
  },
});

export const fetchAllPostsFailure = (error) => ({
  type: "FETCH_ALL_POSTS_FAILURE",
  payload: {
    error: error,
  },
});
