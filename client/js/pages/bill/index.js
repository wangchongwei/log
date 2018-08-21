/**
 * @flow
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import CommonStyles from '../../common/CommonStyle';
import homeIconFocus from '../../images/navigation/bill1.png';
import homeIconDefault from '../../images/navigation/bill.png';

const NAVIGATION_OPTIONS = ({ navigation }: Object) => {
    const { params = {} } = navigation.state;
    return {
      tabBarLabel: '账单',
      headerTitle: '账单',     
      tabBarIcon: ({ tintColor, focused }: Object) =>
        (<Image
            source={focused ? homeIconFocus : homeIconDefault}
            style={[CommonStyles.icon, { tintColor }]}
          />
        ),
    };
  };
type Props = {}
class MyClass extends React.PureComponent<Props> {

    static navigationOptions = NAVIGATION_OPTIONS;
    render() {
        return (
            <View style={styles.container}>
                <Text>bill</Text>
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
