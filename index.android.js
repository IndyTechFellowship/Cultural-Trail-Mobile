
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import IssuesScene from './src/components/IssuesScene.js';
import LoginScene from './src/components/Login.js';

class CulturalTrail extends Component {
    render() {
      return (
        <Navigator
          initialRoute={{ title: 'Awesome Scene', index: 0 }}
          renderScene={(route, navigator) =>
            <LoginScene />
          }
        />
      )
    }
}

AppRegistry.registerComponent('CulturalTrail', () => CulturalTrail);
