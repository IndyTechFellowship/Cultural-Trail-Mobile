import React, { Component } from 'react';
import { AsyncStorage, View, Text, Navigator, Image, StyleSheet, } from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Button } from 'native-base';

export default class LoginScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false
    };
    //this.setEmail = this.setEmail.bind(this)
  }

  userLogin = async () => {
    var self = this;
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    debugger

    fetch("http://ec2-52-206-122-212.compute-1.amazonaws.com/auth/login", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        user: {
          password: this.state.password,
          email: this.state.email
        }
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.error || responseData.errors) {
        this.setState({
          error: true
        })
        return
      }
      debugger
      try {
        AsyncStorage.setItem('token', responseData.data.token).then(() => {
          this.props.nav.pop()
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

  setEmail(e) {
    debugger
    this.setState({
      email: e.target.value
    });
  }

  setPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <Container style={styles.container}>
          <Content>
            <View style={styles.logoView}>
              <Image style={{ resizeMode: 'cover' }} source={require('./img/ict-logo.png')} />
            </View>
            <List>
              <ListItem>
                <InputGroup>
                  <Input stackedLabel label='Email' placeholder='example@indyculturaltrail.org' value={this.state.email} onChange={ this.setEmail } />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Input stackedLabel label='Password' placeholder='password' secureTextEntry={true} value={this.state.password} onChange={ this.setPassword.bind(this) }/>
                </InputGroup>
              </ListItem>
            </List>
            <Button onPress={this.userLogin.bind(this)}>Login</Button>
            { this.state.error ? <Text>Invalid email or password</Text> : null }
          </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 100
  },
  logoView: {
    height: 200
  },
});
