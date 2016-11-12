import React, { Component } from 'react';
import { AsyncStorage, Image, Navigator, StyleSheet, Text, View } from 'react-native';
import { Button, Container, Content, Input, InputGroup, List, ListItem } from 'native-base';
import { Col, Grid, Row } from 'react-native-easy-grid';

export default class LoginScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMsg: '',
      register: false
    };
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.setConfirmPassword = this.setConfirmPassword.bind(this)
    this.toggleRegister = this.toggleRegister.bind(this)
  }

  userLogin = async () => {
    const secrets = require('../secrets.json')
    const baseUrl = secrets.baseUrl

    // make API call
    var self = this;
    var myHeaders = new Headers();
    var body = JSON.stringify({
      user: {
        password: this.state.password,
        email: this.state.email
      }
    })
    myHeaders.append('Content-Type', 'application/json');

    fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: myHeaders,
      body: body
    })
    .then((response) => response.json())
    .then((responseData) => {
      // check if something went wrong
      if(responseData.error || responseData.errors) {
        this.setState({
          errorMsg: 'Invalid username or password'
        })
        return
      }

      // redirect to issues screen after log in
      try {
        AsyncStorage.setItem('token', responseData.data.token).then(() => {
          this.props.redirectRoute()
        })
      } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
      }
    })
    .catch((error) => {
      console.error(error);
    })
    .done()
  }

  userRegister = async () => {
    const secrets = require('../secrets.json')
    const baseUrl = secrets.baseUrl

    // check if password match
    if(this.state.password !== this.state.confirmPassword) {
      this.setState({
        errorMsg: "Passwords don't match"
      })
      return
    }

    // make API call
    var self = this;
    var myHeaders = new Headers();
    var body = JSON.stringify({
      user: {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email
      }
    })
    myHeaders.append('Content-Type', 'application/json');

    fetch(`${baseUrl}/auth`, {
      method: "POST",
      headers: myHeaders,
      body: body
    })
    .then((response) => response.json())
    .then((responseData) => {
      // check if something went wrong
      if(responseData.error || responseData.errors) {
        this.setState({
          errorMsg: "Whoops! Something went wrong"
        })
        return
      }

      // redirect to login after register
      this.setState({
        register: false,
        errorMsg: "Please check your email to confirm your account"
      })
    })
    .catch((error) => {
      console.error(error);
    })
    .done()
  }

  setName(value) {
    this.setState({
      name: value
    });
  }

  setEmail(value) {
    this.setState({
      email: value
    });
  }

  setPassword(value) {
    this.setState({
      password: value
    });
  }

  setConfirmPassword(value) {
    this.setState({
      confirmPassword: value
    });
  }

  toggleRegister() {
    this.setState({
      register: !this.state.register
    })
  }

  render() {
    return (
      <Container style={styles.container}>
          <Content>
            <View style={styles.imageView}>
              <Image style={styles.image} source={require('./img/ict-logo.png')} />
            </View>
            { this.state.errorMsg ? <Text>{this.state.errorMsg}</Text> : null }
            <List style={styles.listStyle}>
              {
                this.state.register ?
                  <ListItem>
                    <InputGroup
                      style={styles.inputGroupStyle}>
                      <Input
                      style={styles.inputStyle}
                        placeholder='Name'
                        value={this.state.name}
                        onChangeText={this.setName} />
                    </InputGroup>
                  </ListItem>
                : null
              }
              <ListItem>
                <InputGroup
                  style={styles.inputGroupStyle}>
                  <Input
                    style={styles.inputStyle}
                    placeholder='Email'
                    value={this.state.email}
                    onChangeText={this.setEmail} />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup 
                style={styles.inputGroupStyle}>
                  <Input
                    style={styles.inputStyle}
                    placeholder='Password'
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={this.setPassword}/>
                </InputGroup>
              </ListItem>
              {
                this.state.register ?
                  <ListItem>
                    <InputGroup
                      style={styles.inputGroupStyle}>
                      <Input
                        style={styles.inputStyle}
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        value={this.state.confirmPassword}
                        onChangeText={this.setConfirmPassword} />
                    </InputGroup>
                  </ListItem>
                : null
              }
            </List>
            <View style={styles.buttonView}>
              <Button style={styles.buttonStyle} onPress={this.state.register ? this.toggleRegister : this.userLogin.bind(this)}>Login</Button>
              <Button style={styles.buttonStyle} onPress={this.state.register ? this.userRegister.bind(this) : this.toggleRegister}>Register</Button>
            </View>
          </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginBottom: 100,
    marginTop: 200,
  },
  inputGroupStyle: {
    marginLeft: 35,
    marginRight: 55,
  },
  inputStyle: {
    width: 200,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 100,
    margin: 2,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
