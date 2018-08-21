import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import KeyboardModal from './KeyboardModal';

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: '#b5b5b5',
  },
  textStyle: {
    color: '#666',
  },
  border: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'red',
    width: 300,
  },

});

class MyClass extends React.PureComponent {

  props: {
    style: number, // 布局样式
    textStyle: number, // 文字样式
    onChangeText: Function, // 当文字内容发生改变
    secureTextEntry: boolean, // 显示* 默认为true
    sure: Function, // 点击确认时的函数
  }

  state : {
    text: string,
    modalShow: boolean,
  }

  static defaultProps = {
    placeholder: '请输入',    
    textStyle: styles.textStyle,
    secureTextEntry: true,
  }

  state = {
    text: '',
    modalShow: false,
  }


  // 获取焦点
  showModal =() => {
    this.setState({ modalShow: true });
  }
  

  /**
   * 获取文本内容
   * 
   * @memberof MyClass
   */
  getText =(): string => {
    const text = this.state.text.trim();
    const { placeholder } = this.props;
    const textState = this.getTextState();
    let textValue = placeholder;
    switch (textState) {
      case 1:
        textValue = placeholder;
        break;
      case 2:
        textValue = `| ${placeholder}`;
        break;
      case 3:
        textValue = `${this._getSecureTextEntryText(text)}|`;
        break;
      case 4:
        textValue = this._getSecureTextEntryText(text);
        break;
      default:
        textValue = 'err!!!';
        break;
    }
    return textValue;
  }

  /**
   * 获取*字符
   * 
   * @memberof MyClass
   */
  _getSecureTextEntryText =(text: string): string => {
    let value = '';
    if (this.props.secureTextEntry) {
      for (let i = 0; i < text.length; i += 1) {
        value += '*';
      }
      return value;
    }
    return text;
  }

  /**
   * 获取键盘状态
   * 1: 键盘关闭且无输入值
   * 2: 键盘开启无输入值
   * 3: 键盘开启有输入值
   * 4: 键盘关闭有输入值
   * @memberof MyClass
   */
  getTextState =(): number => {
    const isShow = this.state.modalShow;
    const { text } = this.state;
    if (isShow) {
      if (text) {
        return 3;
      }
      return 2;
    } 
    if (text) {
      return 4;
    }
    return 1;
  }

  onChangeText =(text: string) => {
    this.setState({ text });
    this.props.onChangeText && this.props.onChangeText(text);
  }

  /**
   * 点击完成
   * @memberof MyClass
   */
  sure =(text: string) => {
    this.props.sure && this.props.sure(text);
  }

  closeModal =() => {
    this.setState({ modalShow: false });
  }


  render() {
    const { style, textStyle } = this.props;
    console.log(style)
    return (
      <View style={{ flex: 1 }}>
        <KeyboardModal
          secureTextEntry={this.props.secureTextEntry}
          onChangeText={this.onChangeText}
          sure={this.sure}
          closeModal={this.closeModal}
          modalVisible={this.state.modalShow}
          ref='keyboard'
        />
        <TouchableOpacity
          style={[style]}
          activeOpacity={1}
          onPress={this.showModal}
        >
          <Text style={(this.getTextState() === 1 || this.getTextState() === 2) ? styles.defaultTextStyle : textStyle}>
            {this.getText()}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default MyClass;
