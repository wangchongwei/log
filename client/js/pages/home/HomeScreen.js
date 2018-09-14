/**
 * @flow
 */
import React from 'react';
import { View, Text } from 'react-native';
import HomeList from './component/HomeList';

export default class HomeScreen extends React.PureComponent<undefined> {

  render () {
    return (
      <View>
        <HomeList />
      </View>
    );
  }

}
