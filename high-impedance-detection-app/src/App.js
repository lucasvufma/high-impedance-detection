import React from 'react';
import InteractiveMap from './components/InteractiveMap/interactiveMap'
import './App.css';
import LoginPage from './components/Login/login';
import Home from './components/HomePage/homePage';
import { useState, useEffect } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from './components/firebase'





export default function App(){
  const[firebaseInitialized,setfirebaseInitialized]=useState(false)

  React.useEffect(() => {
		firebase.isInitialized().then(val => {
			setfirebaseInitialized(val)
		})
	})

  
  return firebaseInitialized !== false ? (
   
			<Router>
				<Switch>
					<Route exact path="/" component={LoginPage} />   
          <Route exact path="/home" component={Home} />      
				</Switch>
			</Router>
  ) : <div id="loader"><CircularProgress /></div>
  }

