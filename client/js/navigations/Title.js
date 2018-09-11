/**
 * @flow
 * 首页-title
 */
import React from 'react';
import {
  View, Text, Platform, StyleSheet
} from 'react-native';

type Props = {

}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 20;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 48;
class Title extends React.PureComponent<Props> {

  render() {
    return (
      <View style={styles.bar}>
        <View style={styles.status} />
        <View style={styles.appbar}>
          <Text style={styles.text}>微信</Text>
          <View style={styles.right}>
            <Text style={[styles.text, { marginRight: 10 }]}>搜索</Text>
            <Text style={styles.text}>添加</Text>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  bar: {
    height: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
    backgroundColor: 'black',
  },
  status: {
    height: STATUSBAR_HEIGHT,
  },
  appbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Title;
