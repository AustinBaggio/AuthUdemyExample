import React, { Component } from 'react';
import { Card, Button, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="example@domain.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            //style handled by Input.js
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

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
