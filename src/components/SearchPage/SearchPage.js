import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Header from "../../containers/Header/HeaderContainer";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

const styles = theme => ({
  textField: {
    width: 800
  },
  alignIttems: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing.unit
  },
  alignButton: {
    marginTop: 25,
    paddingLeft: 30
  },
  alignText: {
    paddingRight: 10
  },
  tweetPaper: {
    width: 900,
    height: 170,
    paddingTop: 25,
    paddingBottom: 25
  },
  wrapper: {
    paddingBottom: 20,
    paddingTop: 20
  },
  bigAvatar: {
    width: 60,
    height: 60,
    border: "4px solid #eae1e1",
    marigin: 10
  },
  verifiedIcon: {
    color: "#6aa553",
    paddingRight: 10
  },
  tweetName: {
    wordBreak: "break-all",
    color: "#14171a",
    fontSize: "17px",
    fontWeight: "bold",
    paddingRight: 10,
    paddingLeft: 5
  },
  tweetScreenName: {
    fontSize: "17px",
    color: "#657786",
    paddingRight: 10
  },
  smallWrapper: {
    display: "flex"
  },
  tweetText: {
    paddingLeft: 20
  },
  progress: {}
});

class SearchPage extends React.Component {
  state = {
    vertical: "bottom",
    horizontal: "left"
  };
  componentDidMount() {
    this.props.connectWebsocket();
  }

  handleChange = event => {
    this.props.onTweetChange(event.target.value);
  };
  handleClick = () => {
    this.props.getTweetStream(this.props.tweet);
  };

  render() {
    const { classes } = this.props;
    const { vertical, horizontal } = this.state;
    return (
      <div>
        <Header />

        <div className={classes.alignIttems}>
          <TextField
            id="standard-with-placeholder"
            label="Twitter Search"
            placeholder="Enter the keyword to search"
            className={classes.textField}
            onChange={this.handleChange}
            margin="normal"
          />
          <div className={classes.alignButton}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              <div className={classes.alignText} onClick={this.handleClick}>
                Search
              </div>
              <SearchIcon />
            </Button>
          </div>

          <div>
            {this.props.tweetList.length == 0 ? (
              <CircularProgress className={classes.progress} size={50} />
            ) : (
              this.props.tweetList.slice(0, this.props.limit).map((x, i) => {
                return (
                  <div key={i}>
                    <div className={classes.wrapper}>
                      <Paper className={classes.tweetPaper} elevation={5}>
                        <div className={classes.smallWrapper}>
                          <Avatar
                            alt="profile_image"
                            src={this.props.tweetList[i].imageURL}
                            className={classes.bigAvatar}
                          />
                          <Typography className={classes.tweetName}>
                            {this.props.tweetList[i].name}
                          </Typography>
                          {this.props.tweetList[i].isVerified ? (
                            <VerifiedUser className={classes.verifiedIcon} />
                          ) : (
                            <VerifiedUser />
                          )}
                          <Typography className={classes.tweetScreenName}>
                            @{this.props.tweetList[i].screenName}
                          </Typography>
                          <Typography className={classes.tweetScreenName}>
                            .{Moment(this.props.tweetList[i].date).fromNow()}
                          </Typography>
                        </div>
                        <Typography className={classes.tweetText}>
                          {this.props.tweetList[i].tweetText}
                        </Typography>
                      </Paper>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={this.props.loadMoreOpen}
            onClose={this.props.loadMoreOpen}
            ContentProps={{ "aria-describedby": "message-id" }}
            message={
              <span id="message-id">
                Click To Load{" "}
                <Button
                  className={classes.button}
                  onClick={this.props.loadMore}
                >
                  More....
                </Button>
              </span>
            }
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchPage);
