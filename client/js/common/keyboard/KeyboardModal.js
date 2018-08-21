import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ModalView from './ModalView';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class KeyboardModal extends Component {

  props: {
    secureTextEntry: boolean,
  }

  state: {
    text: string,
  }

  static defaultProps = {
    secureTextEntry: true,
  }

  state = {
    text: '',
  }

  /**
   * 当modall出现时点击back键方法
   */
  _callBack =() => {
    this.props.closeModal && this.props.closeModal();
  }

  /**
   * 关闭modal的方法
   */
  closeModal =() => {
    this.props.closeModal && this.props.closeModal();
  }


  /**
   * 输入值改变
   * 
   * @memberof KeyboardModal
   */
  onChangeText =(text: string) => {
    this.setState({ text });
    this.props.onChangeText && this.props.onChangeText(text);
  }

  /**
   * 点完成
   * 
   * @memberof KeyboardModal
   */
  _sure =() => {
    this.closeModal();
    this.props.sure && this.props.sure(this.state.text);
  }

  _getText =(): string => {
    const secureTextEntry = this.props.secureTextEntry;
    const text = this.state.text.trim();
    let value = '';
    if (secureTextEntry && text) {
      for (let i = 0; i < text.length; i += 1) {
        value += '*';
      }
      return value;
    }
    return text;
  }
  
  render() {
    return (
      <Modal
        animationType={'fade'}
        transparent
        visible={this.props.modalVisible}
        onRequestClose={this._callBack}
      >
        <View style={styles.container} >
          <View style={styles.top}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={this.closeModal}
            />
          </View>
          <View style={styles.keyboard}>
            <View style={styles.textView}>
              <Text>{this._getText()}</Text>
            </View>
            <ModalView
              onChangeText={this.onChangeText}
              text={this.state.text}
              sure={this._sure}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  top: {
    height: height - 245,
    width,
  },
  keyboard: {
    height: 245,
    backgroundColor: '#fefefe',
    width,
  },
  textView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
});

export default KeyboardModal;
