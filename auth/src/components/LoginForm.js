import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  //state is used to rerender
  state = { email: '', password: '', error: '', loading: false };

  onLoginPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    //sign in attempt
    firebase.auth().signInWithEmailAndPassword(email, password)
    //success
      .then(this.onLoginSuccess.bind(this))
      //fail
      .catch(this.onLoginFail.bind(this));
  }

  onRegisterPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

        //This autoregisters a new user, edit later to make it push to a seperate login
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onRegisterFail.bind(this));
}


  //failed login
  onLoginFail() {
    this.setState({ error: 'Auth Failed, Pass > 6, try again',
    loading: false });
  }

  //failed login
  onRegisterFail() {
    this.setState({ error: 'Resitration Failed, Password > 6',
    loading: false });
  }

  //successfull login
  onLoginSuccess() {
    this.setState({
      loading: false,
      email: '',
      password: '',
      error: ''
    });
  }

  showLoad() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return null;
  }

//handling showing user content, using state changes
  renderLogin() {
    if (this.state.loading) {
      return null;
    }

    //else
    return (
      <Button onPress={this.onLoginPress.bind(this)}>
        Log in
      </Button>
    );
  }

  renderRegister() {
    if (this.state.loading) {
          return null;
        }
    //else
    return (
      <Button onPress={this.onRegisterPress.bind(this)}>
        Register
      </Button>
    );
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Input
            //lets users type, then we pull the imput * Controlled Components *
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderRegister()}
          {this.renderLogin()}
          {this.showLoad()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
