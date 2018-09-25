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
  render() {
    return (
      <View style={styles.container}>
        <Text>mine</Text>
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
