import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import CommonStyles from '../../common/CommonStyle';
import homeIconFocus from '../../images/navigation/mine1.png';
import homeIconDefault from '../../images/navigation/mine.png';
import CommonDatePicker from '../../common/picker/CommonDatePicker';
import DatePicker from '../../common/picker/DatePicker';

const NAVIGATION_OPTIONS = ({ navigation }) => {
    return {
      tabBarLabel: '我',
      headerTitle: '我的',
      tabBarIcon: ({ tintColor, focused }) =>
        (<Image
          source={focused ? homeIconFocus : homeIconDefault}
          style={[CommonStyles.icon, { tintColor }]}
        />
        ),
    };
  };

class MyClass extends React.PureComponent {

  static navigationOptions = NAVIGATION_OPTIONS;


  _onPress =() => {
    this.refs.picker.openModal();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this._onPress}>mine</Text>
        <CommonDatePicker />
        <DatePicker ref={'picker'} title={'选择当地用车时间'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyClass;
