/**
 * @flow
 */
import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  item: Object; // 单个条目数据
  index: number; // 下标
}

class TestItem extends React.Component<Props> {

  render() {
    const { item, index } = this.props;
    return (
      <View>
        <Text>bill</Text>
      </View>
    );
  }
}

export default TestItem;
