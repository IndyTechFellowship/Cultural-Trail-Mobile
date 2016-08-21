
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native'

import {Actions, Scene, Router} from 'react-native-router-flux'

import IssuesContainer from '../containers/IssuesContainer'
import LoginScene from '../containers/LoginContainer'
import RegisterScene from '../containers/RegisterContainer'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginScene} title="Login" inital={true} hideNavBar={true}/>
    <Scene key="register" component={RegisterScene} hideNavBar={true}/>
    <Scene key="issues" component={IssuesContainer} title="Issues" hideNavBar={true}/>
  </Scene>
);

export default class CulturalTrail extends Component {
    render() {
      return (
        <Router scenes={scenes}/>
      )
    }
  }
