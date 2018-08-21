/**
* @flow
*/
import React from 'react';
import { TabNavigator } from 'react-navigation';
import TabConfig from './TabConfig';
import TabRoute from './TabRoute';

const TabView = TabNavigator(TabRoute, TabConfig);

export default TabView;
