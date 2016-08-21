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

import _ from 'lodash'
import { Container, Content, Button, Tabs, Input, List, ListItem} from 'native-base';
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

class RegisterForm extends Component {
	render(){
		return(
			<View style={styles.formContainer}>
				<KeyboardAvoidingView>
          <Field name="name" component={renderInput} type="text" />
          <Field name="email" component={renderInput} type="text" />
          <Field name="password" component={renderInput} type="text" />
          <Field name="passwordConfirm" component={renderInput} type="text" />
			</KeyboardAvoidingView>

        <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
  				<Button style={styles.registerButtonStyle} onPress={this.props.handleSubmit}>
  					Register
  				</Button>
        </View>
        <RenderResponse response={this.props.registerResponse} />
			</View>
		)
	}
}

export default class RegisterScene extends Component {
	render(){
		return (
			<Container theme={myTheme}>
				<View style={styles.container}>

					<Image
						style={styles.headerImage}
	          source={require('../images/ict-logo.png')}
	        />

        <RegisterForm onSubmit={values => {this.props.submitRegister(values)}} registerResponse={this.props.registerResponse}/>

				</View>
			</Container>
		)
	}
}

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if(!values.password) {
    errors.password = 'Required'
  } else if(values.password.length < 5) {
    errors.password = 'must me more then 5 characters'
  }

  if(!values.name) {
    errors.name = 'Required'
  }

  if(!values.passwordConfirm) {
    errors.passwordConfirm = 'Required'
  } else if(values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'password fields must be the same'
  }
  return errors
}

RegisterForm = reduxForm({
  form: 'RegisterForm',
})(RegisterForm)

RegisterScene.propTypes = {
	submitRegister: React.PropTypes.func.isRequired,
  registerResponse: React.PropTypes.object
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
		width: 400,
    height: 400,
    alignItems: 'center'
	},

	buttonContainer: {
		flex:-1,
		flexDirection:'row',
		justifyContent: 'center'
	},

  formContainer: {
  },

	registerButtonStyle: {
    top:60,
    width:350,
		backgroundColor: '#A2C02F',
	}

})
