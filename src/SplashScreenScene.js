import React, { Component } from 'react';
import { AsyncStorage, View, Navigator } from 'react-native';
import { Container, Content, Spinner } from 'native-base'

export default class SplashScreenScene extends Component {

  constructor(props) {
    super(props);
    this.redirectRoute = this.redirectRoute.bind(this)
  }

  redirectRoute() {
    AsyncStorage.getItem('token').then((value) => {
      if(value) {
        // already logged in, show issues screen
        this.props.nav.push({
          title: "Issues",
          index: 2,
          passProps: {
            redirectRoute: this.redirectRoute
          }
        })
      } else {
        // not logged in, show log in screen
        this.props.nav.push({
          title: "Login",
          index: 1,
          passProps: {
            redirectRoute: this.redirectRoute
          }
        })
      }
    })
  }

  componentDidMount() {
    this.redirectRoute() // load login screen or issues screen
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
