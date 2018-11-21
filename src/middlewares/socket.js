import io from "socket.io-client";
import { types } from "../actions/Tweet/WebSocketAction";
import { onSearchClick } from "../actions/Tweet/TweetAction";

var socket;
const socketMiddleWare = store => next => action => {
  switch (action.type) {
    case types.CONNECT_WEBSOCKET:
      socket = io("http://localhost:3000/");
      socket.on("tweet", data => {
        console.log("tweet", data);
        store.dispatch(onSearchClick(data)); // cant handle any other message
      });
      socket.on("connect", () => {
        console.log("connected");
      });
      break;

    case types.GET_TWEET_STREAM:
      const state = store.getState();
      var keyword = state.tweet.tweet;
      socket.emit("keyword", { keyword: keyword });

    default:
      break;
  }
  next(action);
};
export default socketMiddleWare;
