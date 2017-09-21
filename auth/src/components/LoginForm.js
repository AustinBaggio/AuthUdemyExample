import React, { Component } from 'react';
import { Card, Button, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="example@domain.com"
            label="Email"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            //style handled by Input.js
          />
        </CardSection>
        <CardSection />

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
