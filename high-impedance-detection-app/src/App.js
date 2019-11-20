import React from 'react';
import InteractiveMap from './components/InteractiveMap/interactiveMap'
import './App.css';
import LoginPage from './components/Login/login';
import Home from './components/HomePage/homePage';
import { useState, useEffect } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'





function App(){
  
  return (
   
			<Router>
				<Switch>
					<Route exact path="/" component={LoginPage} />   
          <Route exact path="/home" component={Home} />      
				</Switch>
			</Router>
  );
  }

  export default App;