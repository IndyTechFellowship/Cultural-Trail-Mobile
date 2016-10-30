import React, { Component } from 'react';
import { Text, Image, Navigator, StyleSheet, View } from 'react-native';
import { Card, CardItem, Icon } from 'native-base';

export default class IssueItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      address: 'N/A'
    }
    this.getAddress = this.getAddress.bind(this)
  }

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

  componentDidMount() {
    this.getAddress(this.props.issue.lat, this.props.issue.lng)
  }

  getAddress(lat, lng) {
    this.setState({
      address: "421 E Market St"
    })

    const apiKey = "AIzaSyDu02M2GXzpZY7dt0eln8g3GuOlGvnWG-w"
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`, {
      method: "GET",
      headers: myHeaders
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.results.length < 1) {
        this.setState({
          address: "N/A"
        })
      } else {
        this.setState({
          address: responseData.results[0].address_components[0].short_name
        })
      }
    })
    .catch((error) => {
      console.error(error);
    })
    .done()
  }

  render() {
    return (
      <Card>
        <CardItem button onPress={this.viewIssueDetails.bind(this)}>
          <Text>
            {this.props.issue.name}
          </Text>
        </CardItem>
        <CardItem button onPress={this.viewIssueDetails.bind(this)}>
          <Image source={this.getImageUrl(this.props.issue.imageUrl)} />
        </CardItem>
        <CardItem>
          <Icon name='ios-pin' />
          <Text>{this.state.address}</Text>
        </CardItem>
      </Card>
    )
  }
}
