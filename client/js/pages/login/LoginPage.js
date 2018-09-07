/**
 * @flow
 * 登录主页
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  NativeModules,
} from 'react-native';
import LoginBg from '../../images/login/backg.png';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';
import utils from '../../utils/utils';


type Props = {};

class LoginPage extends React.Component<Props> {

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
  onChangePassText =(text: string) => {
    this._password = text;
  }

  /** 登录的请求 */
  _login =(): Promise<Object> => {
    this._verificationCode();
    const params = {
      userName: this._userName,
      password: this._password,
    };
    console.log(params);
    return new Promise((resolver) => {
      resolver({ code: 1 });
    });
  }
  /** 验证验证码 */
  _verificationCode =() => {
    NativeModules.MobSMS.verificationCode(this._password, this._userName);
  }
  /** 发送验证码 */
  _sendMessage =() => {
    const phoneNumber = this._userName;
    if(utils.isMobilePhone(phoneNumber)) {
      NativeModules.MobSMS.requestCheckCode('13163396276');
    } else {
      alert('手机格式错误!');
    }
  }
  /** 获取验证码 */
  _renderContent =() => {
    return <View><Text onPress={this._sendMessage} style={styles.newCus}>获取验证码</Text></View>;
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
              keyboardType={'numeric'}
              onChangeText={this.onChangeText}
              renderContent={this._renderContent}
            />
            <LoginInput
              style={{ marginTop: 20 }}
              keyboardType={'numeric'}
              // secureTextEntry
              onChangeText={this.onChangePassText}
              placeholder={'请输入验证码'}
            />
          </View>
          <LoginButton
            login={this._login}
          />
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
  newCus: {
    fontSize: 12,
    color: 'white',
  },
});

export default LoginPage;
