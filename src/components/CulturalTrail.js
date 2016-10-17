
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'
import {Actions, Scene, Router, Switch} from 'react-native-router-flux'

import IssuesContainer from '../containers/IssuesContainer'
import SingleIssueContainer from '../containers/SingleIssueContainer';
import LoginScene from '../containers/LoginContainer'
import RegisterScene from '../containers/RegisterContainer'
import SplashScreenScene from '../containers/SplashScreenContainer'
import {doAuthToken, receiveAuthToken} from '../actions/loginActions'

import storage from 'react-native-simple-store';

export default class CulturalTrail extends Component {

    constructor(props){
      super(props)
    }

    render() {
      //this.props.getAuthToken()
      return (
        <Router>
          <Scene key="login" component={LoginScene} title="Login" hideNavBar={true}/>
          <Scene key="issues" component={IssuesContainer} title="Issues" hideNavBar={true}/>
          <Scene key="splash" component={SplashScreenScene} tile="Splash" initial={true} hideNavBar={true}/>
          <Scene key="register" component={RegisterScene} hideNavBar={false}/>
          <Scene key="singleIssue" component={SingleIssueContainer} title="Single Issue" hideNavBar={true}/>
        </Router>
      )
    }
  }
