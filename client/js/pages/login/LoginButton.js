/* @flow */
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

type Props = {
  login: () => Promise<Object>, // 登录
  style?: any,
}

type State = {
  loading: boolean; // 加载状态
}

export default class LoginButton extends Component<Props, State> {

  static defaultProps = { style: null };
  state = {
    loading: false,
  }

  /** 点击登录执行 */
  _login =() => {
    const { loading } = this.state;
    const { login } = this.props;
    if (loading) {
      console.warn('正在登陆!');
      return;
    }
    this.setState({ loading: true });
    login()
    .then((json) => {
      console.log(json);
      console.log('登录成功!');
    })
    .catch((err) => {
      console.warn(err);
      console.warn('登录失败!');
    })
    .finally(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    const { style } = this.props;
    return (
      <TouchableOpacity
        onPress={this._login}
        disabled={loading}
      >
        <View style={[styles.container, style]}>
          <Text style={[styles.text]}>登录</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
