import React, { Component } from 'react';
import { AsyncStorage, View, Navigator } from 'react-native';
import { Container, Content, Spinner } from 'native-base'

export default class SplashScreenScene extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var self = this
    AsyncStorage.clear
    AsyncStorage.getItem('token').then((value) => {
      if(value) {
        self.props.nav.push({
          title: "Issues",
          index: 2
        })
      } else {
        self.props.nav.push({
          title: "Login",
          index: 1
        })
      }
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <Spinner />
        </Content>
      </Container>
    )
  }
}
