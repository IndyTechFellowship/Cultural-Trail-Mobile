import React, { Component } from 'react';
import { AsyncStorage, View, Text, Navigator } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import IssueItem from './IssueItem'

export default class IssuesScene extends Component {

  constructor(props) {
    super(props);
    this.state = {issues: []};
    this.fetchMovies = this.fetchMovies.bind(this)
  }

  fetchMovies() {
    var self = this;
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    AsyncStorage.getItem('token').then((value) => {
      myHeaders.append('api-token', `Token: ${value}`);

      fetch("http://ec2-52-206-122-212.compute-1.amazonaws.com/api/issues", {method: "GET", headers: myHeaders})
      .then((response) => response.json())
      .then((responseData) => {
        self.setState({issues: responseData.data})
      })
      .catch((error) => {
        console.error(error);
      })
      .done()
    })
  }

  componentDidMount() {
    this.fetchMovies()
  }

  render() {
    return (
      <Container>
          <Header>
              <Title>Issues</Title>
          </Header>

          <Content>
            {
              this.state.issues.map((issue, index) => {
                return <IssueItem key={ index } issue={issue} nav={this.props.nav}/>
              })
            }
          </Content>
      </Container>
    )
  }
}
