/**
 * @flow
 * 测试redux集成
 */
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TestAction from '../../actions/test';

type Props = {
  testAction: Object; // action
  test: Object; // reducer
  onPress: Function; // 点击的方法
}
class TestRedux extends React.PureComponent<Props> {

  // 测试
  _test =() => {
    this.props.testAction.testAdd();
    const { onPress } = this.props;
    onPress && onPress();
  }

  add =() => {
    alert('add');
  }

  render() {
    const { test } = this.props;
    return (
      <View>
        <Text style={{ fontSize: 30, color: 'pink' }} onPress={this._test}>add</Text>
        <Text>{test.testNum}</Text>
      </View>
    );
  }
}

const mapStateToProps =(state) => ({
  test: state.test,
});
const mapActionToProps =(dispatch) => ({
  testAction: bindActionCreators(TestAction, dispatch),
});


export default connect(mapStateToProps, mapActionToProps, null, { withRef: true })(TestRedux);
