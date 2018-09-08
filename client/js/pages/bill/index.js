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
import { List } from '../../common/list';
import TestItem from './TestItem';

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

const data = [
    {}, {}, {}, {}, {}, {}, {},
];

class MyClass extends React.Component<Props> {

    static navigationOptions = NAVIGATION_OPTIONS;

    _load =(): Promise<Object> => {
      // setTimeout(() => {
        return new Promise((resolver) => {
          resolver(
            { data, count: 7 }
          );
        });
      // }, 1500);
    }

    _keyExtractor =(item, index) => (index.toString()); 

    _parser =(response: Object) => {
      return {
        data: response.data,
        count: response.count,
      };
    }
    render() {
        return (
          <List
            load={this._load}
            parser={this._parser}
            keyExtractor={this._keyExtractor}
          >
            <TestItem />
          </List>
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
