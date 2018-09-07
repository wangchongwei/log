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
  DeviceEventEmitter,
} from 'react-native';
import AppNavigator from './js/navigations/AppNavigator';
import { LoginPage } from './js/pages/login';

const messageSendSuccess = 'SendMessageSuccess';
const messageVerificaSuccess = 'VerificationMessageSuccess';
const messageErr = 'messageErr';

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    this.checkCode();
  }

  checkCode =() => {
    DeviceEventEmitter.addListener(messageSendSuccess, () => {  
      alert('send success!!');  
    });
    DeviceEventEmitter.addListener(messageVerificaSuccess, () => {
      alert('verifica success!!!');  
    });
    DeviceEventEmitter.addListener(messageErr, () => {
      alert('messageErr!');  
    });
  }
  

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
