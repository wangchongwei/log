import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import KeyBoard from '../../common/keyboard';
import LoginBg from '../../images/login/backg.png';
import LoginInput from './LoginInput';



class MyClass extends Component {

  _userName: string // 用户名
  _password: string // 密码

  _userName = ''
  _password = ''

  /**
   * 点击完成
   */
  _sure =(text: string) => {
    this._password = text;
  }

  /** 当用户名输入栏文本变化 */
  onChangeText =(text: string) => {
    this._userName = text;
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={LoginBg}
          resizeMode='cover'
          style={styles.imabg}
        >
          <View style={styles.view}>
            <LoginInput
              onChangeText={this.onChangeText}
            />
            <Text onPress={this.onPress}>login</Text>
            <KeyBoard
              style={styles.inputView}
              sure={this._sure}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imabg: {
    flex: 1,
  },
  view: {
    marginTop: 200,
    paddingHorizontal: 20,
  },
});

export default MyClass;
