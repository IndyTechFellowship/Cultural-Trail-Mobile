/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import SplashScreenScene from './src/SplashScreenScene'
import LoginScene from './src/LoginScene'
import IssuesScene from './src/IssuesScene'
import IssueDetailsScene from './src/IssueDetailsScene'

export default class CT extends Component {

  renderScene(route, navigator) {
    switch(route.index) {
      case 0:
        return <SplashScreenScene
                  nav={navigator}
                  {...route.passProps}
               />
      case 1:
        return <LoginScene
                  title={route.title}
                  nav={navigator}
                  {...route.passProps}
              />
      case 2:
        return <IssuesScene
                  title={route.title}
                  nav={navigator}
                  {...route.passProps}
               />
      case 3:
        return <IssueDetailsScene
                  title={route.title}
                  nav={navigator}
                  {...route.passProps}
               />
      default:
        return <SplashScreenScene
                  nav={navigator} 
                  {...route.passProps}
               />
      }
  }

  render() {
    const routes = [
      {title: 'Splash Screen', index: 0},
      {title: 'Login', index: 1},
      {title: 'Issues', index: 2},
      {title: 'Issue Details', index: 3},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CT', () => CT);
