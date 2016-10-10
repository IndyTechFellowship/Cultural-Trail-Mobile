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

import { Container, Content, Button, Tabs} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {reduxForm, Field} from 'redux-form'

import myTheme from '../themes/myTheme'

class renderInput extends React.Component {
  render() {
    const isPassword = (this.props.name === "password" || this.props.name === "passwordConfirm") ? true: false
    return (
      <View >
        <TextInput {...this.props.input} secureTextEntry={isPassword} type={this.props.type} placeholder={this.props.name} style={styles.textInput}/>
        {this.props.meta.touched &&
         this.props.meta.error &&
         <Text>{this.props.meta.error}</Text>}
      </View>
    )
  }
}

class RenderResponse extends React.Component {
  render() {
      const responseExists = this.props.response !== null
      if(responseExists) {
        const hasEmailError = _.has(this.props.response, 'errors.email')
        const hasError = _.has(this.props.response, 'error')
        const hasData = _.has(this.props.response, 'data')
        if(hasEmailError) {
          return(
            <Text>
              That email has already been used. Try signing in.
            </Text>
          )
        } else if(hasData) {
          return(
            <Text>
              Please check your inbox for a confirmation email.
            </Text>
          )
        } else if(hasError) {
          return(
            <Text>
              {this.props.response.error}
            </Text>
          )
        }
      } else {
        return(null)
    }
  }
}

class LoginForm extends Component {
	render(){
		return(
			<View>
				<KeyboardAvoidingView>
					<Field name="email" component={renderInput} type="text" />
					<Field name="password" component={renderInput} type="text" />
			</KeyboardAvoidingView>
			<View style={styles.buttonContainer}>
					<Button style={styles.loginButtonStyle} onPress={this.props.handleSubmit}>
					Login
				</Button>
				<Button style={styles.registerButtonStyle} onPress={this.props.onShowRegisterButtonClicked}>
					Register
				</Button>
			</View>
		</View>
		)
	}
}

export default class LoginScene extends Component {

	render(){
		return (
			<Container theme={myTheme}>
				<View style={styles.container}>
				<Image
					style={styles.headerImage}
					source={require('../images/ict-logo.png')}
					/>
				<LoginForm 
					onShowRegisterButtonClicked={this.props.onShowRegisterButtonClicked} 
					onSubmit={values => {this.props.submitLogin(values)}} 
					registerResponse={this.props.loginResponse}
					/>
				</View>
			</Container>
		)
	}
}

LoginForm = reduxForm({
  form: 'RegisterForm',
})(LoginForm)

LoginScene.propTypes = {
	showRegister: React.PropTypes.bool.isRequired,
	onShowRegisterButtonClicked: React.PropTypes.func.isRequired,
	submitLogin: React.PropTypes.func.isRequired,
	loginResponse: React.PropTypes.object
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
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
		width: 375,
    	height: 375,
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
