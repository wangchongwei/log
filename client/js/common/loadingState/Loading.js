/**
 * @flow
 * 正在加载的状态视图
 */
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

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

export default function loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text style={styles.text}>正在加载...</Text>
    </View>
  );
}
