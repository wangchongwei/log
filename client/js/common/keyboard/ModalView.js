import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EnglishKeyView from './EnglishKeyView';
import NumberKeyView from './NumberKeyView';

class MyClass extends React.PureComponent {

  state: {
    text: string,
    keyboardType: 1 | 2, // 1 为字母 2 为数字
  }

  state = {
    text: '',
    keyboardType: 1,
  }

  componentDidMount() {
    const text = this.props.text + this.state.text;
    this.setState({ text });
  }

  _renderFooter =() => {
    return (
      <View style={styles.container}>
        <View style={[styles.flex2, styles.rightBorder]}>
          <Text onPress={this.changeType}>
            {this.state.keyboardType === 1 ? '123' : 'abc'}
          </Text>
        </View>
        <View style={styles.flex3}>
          <Text>顶点软件</Text>
        </View>
        <View style={[styles.flex2, styles.leftBorder]}>
          <Text onPress={this.sure}>完成</Text>
        </View>
      </View>
    );
  }

  /**
   * 修改键盘类型
   * 
   * @memberof MyClass
   */
  changeType =() => {
    this.setState({ keyboardType: this.state.keyboardType === 1 ? 2 : 1 });
  }

  /**
   * 获取每一下点击的键
   * 
   * @memberof MyClass
   */
  onChangeText =(onPressKey: string) => {
    this.setState({ text: `${this.state.text}${onPressKey}` });
    this.props.onChangeText && this.props.onChangeText(`${this.state.text}${onPressKey}`);
  }

  /**
   * 去除最后一个
   * 
   * @memberof MyClass
   */
  delete =() => {
    const { text } = this.state;
    if (text) {
      this.setState({ text: text.substring(0, text.length - 1) }, () => {
        this.props.onChangeText && this.props.onChangeText(this.state.text);
      });
    }
  }

  /**
   * 点击完成
   * 
   * @memberof MyClass
   */
  sure =() => {
    this.props.sure && this.props.sure();
  }

  render() {
    return (
      <View style={styles.flex1}>
        {
        this.state.keyboardType === 1 ?
          <EnglishKeyView
            onChangeText={this.onChangeText}
            delete={this.delete}
            ref='english'
          /> :
          <NumberKeyView
            onChangeText={this.onChangeText}
            delete={this.delete}
            ref='number'
          /> 
      }
        
        {this._renderFooter()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopColor: '#999',
    borderTopWidth: 1,
  },
  flex2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  flex3: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftBorder: {
    borderLeftColor: '#999',
    borderLeftWidth: 1,
  },
  rightBorder: {
    borderRightColor: '#999',
    borderRightWidth: 1,
  },
});

export default MyClass;
