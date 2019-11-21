import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import firebase from 'firebase';
import {Link} from 'react-router-dom'
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import InteractiveMap from '../InteractiveMap/interactiveMap'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));

function DenseAppBar(props) {
  const classes = useStyles();

  const simulate = () =>{
      props.DispatchSimulation();

  }

 const logout= () => {
    console.log("hello")
    firebase.auth().signOut().then(function(){
        props.history.replace('/');
        
    }).catch(function(error){
        alert(error);
    })

}
  return (
    <div className={classes.root}>
      <AppBar position="static">
        
        <Toolbar variant="dense">
        <Grid justify="space-between"   container 
      spacing={24}>
          <Typography variant="h6" color="inherit">
            Impedance Detection
          </Typography>
          </Grid>
          <Button color="inherit" className="classes.button" onClick={simulate}>
             <TouchAppIcon />
         </Button>
          <Button color="inherit"  className="classes.button" onClick={logout}>     
            <ExitToAppIcon />
         </Button>
    
       
      
  
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withRouter(withStyles()(DenseAppBar));