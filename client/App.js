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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginAction from './js/actions/login';
import AppNavigator from './js/navigations/AppNavigator';
import { LoginPage } from './js/pages/login';

const messageSendSuccess = 'SendMessageSuccess';
const messageVerificaSuccess = 'VerificationMessageSuccess';
const messageErr = 'messageErr';

type Props = {
  navigation: Object,
  login: Object, // login reducer
  loginAction: Object, // login action
};
class App extends Component<Props> {

  loginPage: Object
  componentDidMount() {
    this.checkCode();
    console.log('=======');
    console.log(this.loginPage);
    console.log('--------');
  }
  loginPage = {}

  checkCode =() => {
    DeviceEventEmitter.addListener(messageSendSuccess, () => {  
      // 验证码发送成功!
      console.log('发送验证码成功!');
    });
    DeviceEventEmitter.addListener(messageVerificaSuccess, () => {
      // 验证码验证成功
      console.log('验证验证码成功!');
      this.props.loginAction.loginPost();
    });
    DeviceEventEmitter.addListener(messageErr, () => {
      // 失败！
      console.warn(messageErr);
    });
  }
  

  render() {
    console.log(this.props.login);
    let route = <LoginPage />;
    if (this.props.login.login) {
      route = <AppNavigator />;
    }
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

const mapStateToProps =(state) => ({
  login: state.login,
});
const mapActionToProps =(dispatch) => ({
  loginAction: bindActionCreators(LoginAction, dispatch),
});

export default connect(mapStateToProps, mapActionToProps)(App);
