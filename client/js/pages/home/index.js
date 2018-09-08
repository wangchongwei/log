/**
 * @flow
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  NativeModules,
  DeviceEventEmitter,
} from 'react-native';
import CommonStyles from '../../common/CommonStyle';
import homeIconFocus from '../../images/navigation/home1.png';
import homeIconDefault from '../../images/navigation/home.png';

const NAVIGATION_OPTIONS = () => {
  return {
    tabBarLabel: '首页',
    headerTitle: '首页',     
    tabBarIcon: ({ tintColor, focused }: Object) =>
        (<Image
          source={focused ? homeIconFocus : homeIconDefault}
          style={[CommonStyles.icon, { tintColor }]}
        />
        ),
  };
};

type Props = {
  navigation: Object;
}
type State = {
  text: string; // 输入框的文本内容
}
const messageSendSuccess = 'SendMessageSuccess';
const messageVerificaSuccess = 'VerificationMessageSuccess';
const messageErr = 'messageErr';

class MyClass extends Component<Props, State> {

  static navigationOptions = NAVIGATION_OPTIONS;
  state = {
    text: '',
  }
  componentDidMount() {
    global.navigation = this.props.navigation;
    // 对发送验证码事件监听
    DeviceEventEmitter.addListener(messageSendSuccess, () => {  
      alert('send success!!');  
    });
    // 对验证验证码事件监听
    DeviceEventEmitter.addListener(messageVerificaSuccess, () => {
      alert('verifica success!!!');  
    });
    // 发送验证码、验证验证码结果出错的事件监听
    DeviceEventEmitter.addListener(messageErr, () => {
      alert('messageErr!');  
    });
  }

  /** 点击获取验证码 */
  onPress =() => {
    console.log(NativeModules);
    console.log('onPress');
    NativeModules.MobSMS.requestCheckCode('13163396276');
  }
  /** 当文本改变 */
  _onChangeText =(text: string) => {
    this.setState({ text});
  }

  /** 点击登录 开始验证验证码 */
  _verificationCode =() => {
    const { text } = this.state;
    NativeModules.MobSMS.verificationCode(text, '13163396276');
  }
  render() {
    console.log('home');
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>发送验证码</Text>
        <TextInput
          autoFocus
          value={this.state.text}
          placeholder={'请输入验证码'}
          style={{ height: 36, flex: 1 }}
          underlineColorAndroid='transparent'
          placeholderTextColor='#999'
          onChangeText={(text) => { this._onChangeText(text); }}
        />
        <Text onPress={this._verificationCode}>验证验证码</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyClass;
