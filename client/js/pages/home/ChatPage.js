/**
 * @flow
 * 与某人聊天的界面
 */
import React from 'react';
import { View, Text } from 'react-native';

const NAVIGATION_OPTIONS =() => ({ title: '聊天11' })
type Props = {

}
export default class ChatPage extends React.PureComponent<Props> {

  static navigationOptions = NAVIGATION_OPTIONS;
  render() {
    return(
      <View><Text>聊天详情页</Text></View>
    );
  }
}
