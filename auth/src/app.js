import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

//configuring firebase
class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBGUmii7qKkWjUBXAYW5aWuwjTCNBK03Ss',
    authDomain: 'authentication-abf77.firebaseapp.com',
    databaseURL: 'https://authentication-abf77.firebaseio.com',
    projectId: 'authentication-abf77',
    storageBucket: 'authentication-abf77.appspot.com',
    messagingSenderId: '1041917981485'
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <CardSection>
          <Button>
            Log Out
          </Button>
        </CardSection>
      );
    }
    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
