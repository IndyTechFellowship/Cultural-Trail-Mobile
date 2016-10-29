import React, { Component } from 'react';
import { View, Text, Navigator, Image } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, InputGroup, Input } from 'native-base';

import IssueItem from './IssueItem'

export default class IssueDetailsScene extends Component {

  goBack() {
    this.props.nav.pop()
  }

  getImageUrl(imageUrl) {
    return imageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null ? {uri: imageUrl} : require('./img/placeholder.jpg')
  }

  render() {
    if(this.props.issue) {
      return (
        <Container>
            <Header>
              <Button transparent onPress={this.goBack.bind(this)}>
                   <Icon name='ios-arrow-back' />
               </Button>
              <Title>{this.props.issue ? this.props.issue.name : "Issue Details"}</Title>
            </Header>

            <Content>
              <Image style={{ resizeMode: 'cover' }} source={this.getImageUrl(this.props.issue.imageUrl)} />
              <InputGroup>
                <Input stackedLabel label='Issue' placeholder={this.props.issue.name} />
              </InputGroup>
            </Content>
        </Container>
      )
    } else {
      return (<View></View>)
    }
  }
}
