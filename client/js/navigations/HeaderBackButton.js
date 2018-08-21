/* @flow */

import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import BaseButton from '../common/BaseButton';
import backIcon from '../images/navigation/back.png';

type Props = {
  onPress?: Function,
}
class HeaderBackButton extends React.Component<Props> {

  render() {
    return (
      <BaseButton
        onPress={this.props.onPress}
        style={styles.center}
      >
        <Image source={backIcon} style={{ height: 25, width: 25 }} />
      </BaseButton>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default HeaderBackButton;
