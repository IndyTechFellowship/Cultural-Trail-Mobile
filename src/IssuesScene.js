import React, { Component } from 'react';
import { AsyncStorage, Navigator, Text, View } from 'react-native';
import { Button, Container, Content, Footer, FooterTab, Header, Icon, Title } from 'native-base';

import customTheme from './themes/theme';
import IssueItem from './IssueItem'

export default class IssuesScene extends Component {

  constructor(props) {
    super(props);
    this.state = {issues: []};
    this.fetchIssues = this.fetchIssues.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  fetchIssues() {
    const secrets = require('../secrets.json')
    const baseUrl = secrets.baseUrl

    // make API call
    AsyncStorage.getItem('token').then((value) => {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('api-token', `Token: ${value}`);

      fetch(`${baseUrl}/api/issues`, {method: "GET", headers: myHeaders})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({issues: responseData.data})
      })
      .catch((error) => {
        console.error(error);
      })
      .done()
    })
  }

  logOut = async () => {
    try {
      AsyncStorage.removeItem('token').then(() => {
        this.props.redirectRoute()
      })
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  componentDidMount() {
    this.fetchIssues()
  }

  render() {
    return (
      <Container>
          <Header>
            <Button transparent>
              <Text onPress={this.logOut}>LOG OUT</Text>
            </Button>
            <Title>Issues</Title>
            <Button transparent>
              <Icon name="ios-add" />
            </Button>
          </Header>

          <Content theme={customTheme}>
            {
              this.state.issues.map((issue, index) => {
                return <IssueItem key={ index } issue={issue} nav={this.props.nav} />
              })
            }
          </Content>
      </Container>
    )
  }
}
