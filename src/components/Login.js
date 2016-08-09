import React, { Component } from 'react';

import {
	StyleSheet,
	Image,
 	Text,
 	TextInput,
  View
} from 'react-native';

export default class LoginScene extends Component {
	
	render(){
		return (
			<View style={styles.container}>
				<Image
					style={styles.headerImage}
          source={require('../images/ict-logo.png')}
        />
				<TextInput
        	style={styles.textInput}
        	placeholder="Email" />
        <TextInput
        	style={styles.textInput}
        	placeholder="Password" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	textInput: {
		height: 48,
		borderColor: 'gray',
		borderWidth: 1,
		paddingLeft: 75,
		paddingRight: 75,
		flex: 0
	},
	headerImage: {
		width: 400,
    height: 400,
    alignItems: 'center'
	}
})