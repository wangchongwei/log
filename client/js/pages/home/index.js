/**
 * @flow
 */
import React, { Component } from 'react';
import {
  Image,
} from 'react-native';
import CommonStyles from '../../common/CommonStyle';
import homeIconFocus from '../../images/navigation/home1.png';
import homeIconDefault from '../../images/navigation/home.png';
import HomeScreen from './HomeScreen';

const NAVIGATION_OPTIONS = () => {
  return {
    tabBarLabel: '首页',
    headerTitle: '首页',     
    tabBarIcon: ({ tintColor, focused }: Object) =>
        (<Image
          source={focused ? homeIconFocus : homeIconDefault}
          style={[CommonStyles.icon, { tintColor }]}
        />
        ),
  };
};

type Props = {
  navigation: Object;
}
type State = {
  text: string; // 输入框的文本内容
}


class MyClass extends Component<Props, State> {

  static navigationOptions = NAVIGATION_OPTIONS;
  

  render() {
    return (
      <HomeScreen />
    );
  }
}


export default MyClass;
