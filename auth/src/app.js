import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBGUmii7qKkWjUBXAYW5aWuwjTCNBK03Ss',
    authDomain: 'authentication-abf77.firebaseapp.com',
    databaseURL: 'https://authentication-abf77.firebaseio.com',
    projectId: 'authentication-abf77',
    storageBucket: 'authentication-abf77.appspot.com',
    messagingSenderId: '1041917981485'
  });
  }
  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
