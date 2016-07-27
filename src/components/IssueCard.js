import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Image
} from 'react-native';

import { Card, Button, Divider } from 'react-native-material-design';

var imgSrc = require('./../images/welcome.jpeg');

import ImgSrc from './../images/welcome.jpeg';

export default class IssueCard extends Component {
	render(){
		return (
			<View>
				<Card>
					<Card.Media
						image={<Image 
									resizeMode="stretch" 
									source={{uri: 'http://placehold.it/350x150' }}
									style={styles.cardImage} />}
						children={<Text style={styles.cardImageText}>{this.props.issueTitle}</Text>}
					/>
					<Card.Body>
                        <Text style={styles.cardBodyText}>{this.props.issueDescription}</Text> 
                    </Card.Body>
                    <Divider />
                    <Card.Actions position="right">
                        <Button text={this.props.issueAddress} />
                    </Card.Actions>
				</Card>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	cardImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	cardImageText: {
		color: '#fff',
		fontSize: 24,
	},
	cardBodyText: {
		color: '#000',
		fontSize: 16,
	}
})