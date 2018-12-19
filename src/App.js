/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container } from './components/index';
import Login from './modules/login/login';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Login />
      </Container>
    );
  }
}
