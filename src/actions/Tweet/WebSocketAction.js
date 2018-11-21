export const types = {
  GET_TWEET_STREAM: "GET_TWEET_STREAM",
  CONNECT_WEBSOCKET: "CONNECT_WEBSOCKET"
};

export const connectWebsocket = () => {
  return {
    type: types.CONNECT_WEBSOCKET
  };
};

export const getTweetStream = keyword => {
  return {
    type: types.GET_TWEET_STREAM,
    payload: keyword
  };
};
