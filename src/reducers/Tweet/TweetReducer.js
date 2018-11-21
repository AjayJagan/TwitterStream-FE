import { types } from "../../actions/Tweet/TweetAction";
const initialState = {
  tweet: "",
  tweetList: [],
  extraTweets: [],
  limit: 10,
  total: 0,
  startLimit: 0,
  loadMoreOpen: false
};

export const TweetReducer = (state = initialState, action) => {
  let tweetList, extraTweets;
  switch (action.type) {
    case types.HANDLE_TWEET_CHANGE:
      return {
        ...state,
        tweet: action.payload.text
      };

    case types.HANDLE_SEARCH_CLICK:
      tweetList = state.tweetList.slice();
      tweetList.push(action.payload.tweet);
      if (tweetList.length > 10) {
        extraTweets = state.extraTweets.slice();
        extraTweets.push(action.payload.tweet);
        return {
          ...state,
          extraTweets,
          loadMoreOpen: true
        };
      } else {
        return { ...state, tweetList, loadMoreOpen: false };
      }

    case types.LOAD_MORE:
      //return { ...state, limit: Math.min(state.limit + 10, state.total) };
      extraTweets = state.extraTweets.slice();
      tweetList = extraTweets.splice(0, 10);

      return {
        ...state,
        tweetList,
        extraTweets
      };

    default:
      return state;
  }
};
