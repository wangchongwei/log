/* @flow */
import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
  loginInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingLeft: 0,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  loginInput: {
    flex: 1,
    padding: 0,
    color: '#999999',
    fontSize: 16,
  },
});

type Props = {
  placeholder: string,
  style?: any,
  secureTextEntry?: boolean,
  onChangeText: Function,
  renderContent: Function, // 渲染其他视图
}

type State = {
  text: string, // 输入框文本
}

export default class LoginInput extends Component<Props, State> {

  input: Object // 输入框节点

  static defaultProps = {
    style: null,
    secureTextEntry: false,
    onChangeText: (text: string) => { console.warn('未实现onChangeText方法' + text); },
    placeholder: '账号/手机',
    renderContent: () => { return null; },
  };

  state = {
    text: '',
    showCloseBtn: false,
  };
  input = {}  
  

  onChangeText = (text: string) => {
    this.setState({ text });
    const { onChangeText } = this.props;
    onChangeText && onChangeText(text);
  };
  
  /**
   *让输入框主动失焦
   */
  onBlur =() => {
    this.input.blur();
  }

  render() {
    const { placeholder, secureTextEntry, style, renderContent, ...other } = this.props;
    return (
      <View style={[styles.loginInputContainer, style]}>
        <TextInput
          {...other}
          ref={(ref) => { this.input = ref; }}
          style={styles.loginInput}
          onChangeText={this.onChangeText}
          value={this.state.text}
          placeholderTextColor='white'
          underlineColorAndroid={'transparent'}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
        {renderContent && renderContent()}
      </View>
    );
  }
}
