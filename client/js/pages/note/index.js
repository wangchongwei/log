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
import { iconStyles } from 'style';
import CommonStyles from '../../common/CommonStyle';
import homeIconFocus from '../../images/navigation/note1.png';
import homeIconDefault from '../../images/navigation/note.png';
import TestRedux from './TestRedux';
import RowText from './RowText';

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
      console.log('llllllll');
      console.log(this.refs.test);
    }
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this._backAndroid);
    }
    
    /** 返回的回调 */
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

    /** 点击add */
    _click =() => {
      console.log('llllllll');
      console.log(this.refs.test.getWrappedInstance().add);
      console.log(this.refs.test.initSelector)
    }
    /** 进入选择页 */
    _select =() => {
      alert('select');
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
            <TestRedux
              ref='test'
              onPress={this._click}
            />
            <View style={iconStyles.topArrow} />
            <RowText
              rightComponent={
                (<Text onPress={this._select}>{'>'}</Text>)
              }
            />
            <Text allowFontScaling={false}>不设置字体大小</Text>
            <Text style={{ fontSize: 12 }}>设置字体大小</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    linear: {
      width: 200,
      height: 60,
    },
});

export default MyClass;
