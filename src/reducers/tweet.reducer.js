const userTweet = (
  state = {
    isLoading: false,
    error: "",
    posts: [],
  },
  action
) => {
  switch (action.type) {
    case "CREATE_TWEET_REQUEST":
      return {
        ...state,
        isLoading: true,
        message: action.payload.message,
        tweetImg: action.payload.tweetImg,
      };
    case "CREATE_TWEET_SUCCESS":
      let newPost = {
        isLoading: false,
        posts: action.payload.posts,
      };
      return newPost;

    case "CREATE_TWEET_FAILURE":
      return {
        ...state,
        error: action.payload.error,
      };

    case "FETCH_ALL_POSTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_ALL_POSTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        posts: action.payload.posts,
      };
    case "FETCH_ALL_POSTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export { userTweet };
