/* @flow */

import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';

class FlatButton extends React.PureComponent {

  props: {
    onPress?: () => void,
    children?: any,
    activeOpacity: number,
  };

  static defaultProps = {
    activeOpacity: 1,
  }

  render() {
    const {
      onPress,
      children,
      activeOpacity,
      ...other,
    } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={activeOpacity}
        {...other}
      >
        {children}
      </TouchableOpacity>
    );
  }
}


export default FlatButton;
