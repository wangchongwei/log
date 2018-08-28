/**
 * @flow
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import AppNavigator from './js/navigations/AppNavigator';
import { LoginPage } from './js/pages/login';

type Props = {};
export default class App extends Component<Props> {
  

  render() {
    let route = <LoginPage />;
    // if(true) {
    //   route = <AppNavigator />;
    // }
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor='rgba(0, 0, 0, 0)'
          barStyle='light-content'
        />
        {route}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
