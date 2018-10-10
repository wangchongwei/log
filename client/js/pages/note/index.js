/**
 * @flow
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  BackHandler,
} from 'react-native';
import { LinearGradientButton } from 'button';
import { CountDownTimer } from 'timer';
import CommonStyles from '../../common/CommonStyle';
import homeIconFocus from '../../images/navigation/note1.png';
import homeIconDefault from '../../images/navigation/note.png';

const NAVIGATION_OPTIONS = ({ navigation }: Object) => {
    const { params = {} } = navigation.state;
    return {
      tabBarLabel: '通讯录',
      headerTitle: '日记',     
      tabBarIcon: ({ tintColor, focused }: Object) =>
        (<Image
          source={focused ? homeIconFocus : homeIconDefault}
          style={[CommonStyles.icon, { tintColor }]}
        />
        ),
    };
  };

type Props = {
  navigation: Object;
}

class MyClass extends React.PureComponent<Props> {

    static navigationOptions = NAVIGATION_OPTIONS;

    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this._backAndroid);
    }
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this._backAndroid);
    }
    
    _backAndroid =() => {
      alert('确定返回?');
      return true;
    }

    /** 点击事件 */
    _onPress =() => {
      this.props.navigation.goBack();
    }
    /** 倒数器结束 */
    _onEnd =() => {
        alert('onEnd');
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>note</Text>
            <LinearGradientButton
              onPress={this._onPress}
              style={styles.linear}
            />
            <CountDownTimer
              tips={'已过期'}
              duration={1}
              onEnd={this._onEnd}
            />
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
    linear: {
      width: 200,
      height: 60,
    },
});

export default MyClass;
