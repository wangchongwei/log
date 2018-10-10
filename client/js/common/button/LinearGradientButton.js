/**
 * @flow
 * 渐变色按钮
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


type Props = {
  onPress: Function; // 点击事件
}
export default class LineGradientButton extends React.PureComponent<Props> {


  render() {
    const { onPress, ...other } = this.props;
    return(
      <LinearGradient
        {...other}
        colors={['#ED8B6F', '#D63C83']}
        start={{ x : 0.0, y : 0 }}
        end={{ x : 1, y : 0 }}
      >
        <TouchableOpacity
          onPress={onPress}
          style={styles.button}
        >
          <Text style={styles.text}>LineGradientButton</Text>
        </TouchableOpacity>
        
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  text: { color: 'white', fontSize: 14 },
  button: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});