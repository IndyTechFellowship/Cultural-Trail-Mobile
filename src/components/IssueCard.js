import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Card, Button, Divider } from 'react-native-material-design';

export default class IssueCard extends Component {
	render(){
		return (
			<View>
				<Card>
					<Card.Media
						image={<Image 
									resizeMode="stretch" 
									source={{uri: this.props.cardImage }}
									style={styles.cardImage} />}
						children={<Text style={styles.cardImageText}>{this.props.issueTitle}</Text>}
					/>
					<Card.Body>
                        <Text style={styles.cardBodyText}>{this.props.issueDescription}</Text> 
                    </Card.Body>
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
		backgroundColor: 'transparent',
		fontSize: 24,
	},
	cardBodyText: {
		color: '#000',
		fontSize: 16,
	}
})