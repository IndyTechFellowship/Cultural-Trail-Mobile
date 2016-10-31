import React, { Component } from 'react';
import { Image, Navigator, StyleSheet, Text, View } from 'react-native';
import { Button, Container, Content, Header, Icon, InputGroup, Input, List, ListItem, Title } from 'native-base';

import IssueItem from './IssueItem'

export default class IssueDetailsScene extends Component {

  goBack() {
    this.props.nav.pop()
  }

  getImageUrl(imageUrl) {
    return imageUrl.match(/\.(jpeg|jpg|gif|png)$/i) != null ? {uri: imageUrl} : require('./img/placeholder.jpg')
  }

  render() {
    if(this.props.issue) {
      const issue = this.props.issue
      return (
        <Container>
            <Header>
              <Button transparent onPress={this.goBack.bind(this)}>
                   <Icon name='ios-arrow-back' />
               </Button>
              <Title>{issue.name}</Title>
              <Button transparent>
                <Icon name="ios-create" />
              </Button>
            </Header>

            <Content>
              <Image source={this.getImageUrl(this.props.issue.imageUrl)} />
              <Text style={styles.title}>{issue.name}</Text>
              <Text style={styles.text}>{issue.description}</Text>
              <Text style={styles.text}>{this.props.address}</Text>
            </Content>
        </Container>
      )
    } else {
      return (<View></View>)
    }
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 8
  },
  text: {
    margin: 8
  }
});
