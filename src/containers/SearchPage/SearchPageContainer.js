import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import SearchPage from '../../components/SearchPage/SearchPage';
import { onTweetChange, loadMore } from '../../actions/Tweet/TweetAction';
import { getTweetStream, connectWebsocket } from '../../actions/Tweet/WebSocketAction';

const mapStateToProps = (state) => ({
  tweet:state.tweet.tweet,
  tweetList: state.tweet.tweetList,
  total: state.tweet.total,
  limit: state.tweet.limit,
  loadMoreOpen:state.tweet.loadMoreOpen
})

const mapDispatchToProps = (dispatch) => (bindActionCreators(
  {
    onTweetChange,
    getTweetStream,
    connectWebsocket,
    loadMore 
  },
  dispatch,
));

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);