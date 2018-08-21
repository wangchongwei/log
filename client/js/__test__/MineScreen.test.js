/**
 * @flow
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MineScreen from '../pages/mine/MineQuickNav';
configure({ adapter: new Adapter() });

it('视图测试', () => {
  const wrapper = shallow(
    <MineScreen />
  );
  expect(wrapper.contains(
    <View style={styles.container}>
      <Text>mine</Text>
    </View>
  )).toBe(true);
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
