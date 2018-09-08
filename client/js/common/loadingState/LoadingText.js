/**
 * @flow
 * 非loading状态,只需要显示文字
 * 
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    paddingLeft: 5,
  },
});

/** 获取状态文字 */
function getLoadingState(type: number): string {
  if (type === 1) {
    return '暂无数据!';
  } else if (type === 2) {
    return '暂无更多数据!';
  }
  return '请求出错!'
}

export default function renderLoadingText(type: number) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{getLoadingState(type)}</Text>
    </View>
  );
}


