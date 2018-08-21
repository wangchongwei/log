/* @flow */

import React from 'react'
import { StackNavigator } from 'react-navigation'

import RouteConfigs from './RouteConfig'
import ScreenConfig from './ScreenConfig'

const AppNavigators = StackNavigator(RouteConfigs, ScreenConfig)


export default AppNavigators
