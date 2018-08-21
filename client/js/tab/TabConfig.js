/* @flow */
import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


const TabConfig = {
  ...TabNavigator.Presets.iOSBottomTabs,
  lazy: true,
};

export default TabConfig;