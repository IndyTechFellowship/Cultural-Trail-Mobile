
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
import LoginScene from '../containers/LoginContainer'
import RegisterScene from '../containers/RegisterContainer'
import {doAuthToken, receiveAuthToken} from '../actions/loginActions'

import storage from 'react-native-simple-store';

export default class CulturalTrail extends Component {

    constructor(props){
      super(props)
    }

    render() {
      this.props.getAuthToken()
      return (
        <Router>
          <Scene
            key="root"
            component={connect(state=>({profile:state.loginReducer.authToken}))(Switch)}
            tabs={true}
            unmountScenes
            selector={(props)=> {console.log(props); return props.profile ? "issues" : "login"}}
            >
            <Scene key="login" component={LoginScene} title="Login" inital={true} hideNavBar={true}/>
            <Scene key="issues" component={IssuesContainer} title="Issues" hideNavBar={true}/>
          </Scene>
          <Scene key="register" component={RegisterScene} hideNavBar={true}/>
        </Router>
      )
    }
  }
