import React, { Component } from 'react';
import { Text, Image, Navigator } from 'react-native';
import { Card, CardItem } from 'native-base';

export default class IssueItem extends Component {

  viewIssueDetails() {
    this.props.nav.push({
      title: this.props.title,
      index: 3,
      passProps: {
        issue: this.props.issue
      }
    });
  }

  getImageUrl(imageUrl) {
    return imageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null ? {uri: imageUrl} : require('./img/placeholder.jpg')
  }

  render() {
    return (
      <Card>
        <CardItem button onPress={this.viewIssueDetails.bind(this)}>
          <Image style={{ resizeMode: 'cover' }} source={this.getImageUrl(this.props.issue.imageUrl)} />
        </CardItem>
        <CardItem button onPress={this.viewIssueDetails.bind(this)}>
          <Text>
            {this.props.issue.name}
          </Text>
        </CardItem>
      </Card>
    )
  }
}
