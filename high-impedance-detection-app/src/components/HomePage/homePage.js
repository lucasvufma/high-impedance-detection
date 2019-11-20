import React from 'react';
import InteractiveMap from '../InteractiveMap/interactiveMap'
import firebase from '../firebase'
import { getThemeProps } from '@material-ui/styles';
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import DenseAppBar from '../Navbar/navbar';


function Home(props){
    const { classes } = props
    if (!(firebase.getCurrentUsername())){
        alert('Login First!');
        props.history.replace('/');
        return null;
    }
    return(
        <div>
        <DenseAppBar />
        <InteractiveMap />
        </div>
    );
}


export default withRouter(withStyles()(Home));