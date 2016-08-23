import React, { Component } from 'react';

import {
	StyleSheet,
	Image,
 	Text,
 	TextInput,
  View,
	TouchableHighlight,
	KeyboardAvoidingView,
} from 'react-native';


import myTheme from '../themes/myTheme'
import { Container} from 'native-base';

export default class SplashScreen extends Component {

	 componentWillMount() {
		 console.log('in mount')
		 console.log(this.props)
		if(this.props.authToken === null){
			this.props.getAuthToken()
		}
	}

	componentWillReceiveProps(nextProps) {

	}

	render(){
		console.log('here')
		setTimeout(() => {
			if(this.props.authToken === null) {
				if(this.props.authTokenTry) {
					this.props.moveToLogin()
				}
			} else {
				console.log('jere')
				this.props.moveToIssues()
			}
		},1000)
		return (
			<Container theme={myTheme}>
				<View style={styles.container}>
				</View>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#014C7F'
	},
	textInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		paddingLeft: 130,
		paddingRight: 75,
		flex: 0
	},
	headerImage: {
		width: 400,
    height: 400,
    alignItems: 'center'
	},

	buttonContainer: {
		flex:-1,
		flexDirection:'row',
		justifyContent: 'center'
	},

	loginButtonStyle: {
		backgroundColor: '#014C7F',
		width:175,
		right:10,
	},

	registerButtonStyle: {
		backgroundColor: '#A2C02F',
		width:175,
		left:10
	}

})
