import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

//configuring firebase
class App extends Component {
  state = { loggedIn: null };

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
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return (
        <View style={styles.spinnerStyle2}>
        <Spinner size="large" />
        </View>
      );
  }
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

const styles = {
  spinnerStyle2: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
  //marginTop: 150,
  }
};

export default App;
