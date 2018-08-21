import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class SingleKey extends React.PureComponent {

  props: {
    keyName: string, // 键值
    style: any, // 布局
  }


  /**
   * 单个的键被点击的方法
   * 
   * @memberof SingleKey
   */
  _onPress =() => {
    this.props.onPress && this.props.onPress(this.props.keyName);
  }

  /**
   * 
   * @memberof SingleKey
   * @returns string 返回当前的键值
   */
  _getKeyName =(): string => {
    return this.props.keyName;
  }

  render() {
    const { keyName, style } = this.props;
    return (
      <TouchableOpacity 
        style={[styles.container, style]}
        onPress={this._onPress}
      >
        <Text>{keyName}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default SingleKey;
