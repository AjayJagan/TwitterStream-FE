export const types = {
  HANDLE_TWEET_CHANGE: 'HANDLE_TWEET_CHANGE',
  HANDLE_SEARCH_CLICK:'HANDLE_SEARCH_CLICK',
  LOAD_MORE:'LOAD_MORE'
}
export const onTweetChange = (text) => {
  return {
    type: types.HANDLE_TWEET_CHANGE,
    payload: {
      text
    }
  }
};

export const onSearchClick = (tweetStream) =>{
  return {
    type:types.HANDLE_SEARCH_CLICK,
    payload: {
      tweet: tweetStream
    }
  } 
};

export const loadMore = () =>{
  return {
    type:types.LOAD_MORE
  }
}