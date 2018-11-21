import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const styles = {
  root: {
    flexGrow: 1,
  },
  heading:{
    display:'flex',
    justifyContent:'center',
  }
};
class Header extends React.Component {
 
  render() {
    const { classes } = this.props;  
    return <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.heading}>
          <div> 
          <Typography variant="title" color="inherit">
            Twitter
          </Typography>
          </div>
         
        </Toolbar>
      </AppBar>
    </div>
  }
}
export default withStyles(styles)(Header);