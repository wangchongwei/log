/**
 * @flow
 * 横向单行文本
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    borderBottomColor: '#DDDDDD',
    borderColor: '#fff',
    borderWidth: 1,
    height: 60,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#D63C83',
    fontSize: 12,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftText: {
    color: '#666666',
    fontSize: 14,
  },
  center: {
    flex: 2,
    // flexDirection: 'row',
    alignItems: 'center',
  },
  centerText: {
    color: '#333333',
    fontSize: 14,
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
});

type Props = {
  isRequired: boolean; // 是否必传 即是否显示左侧*
  title: string; // 左侧标题
  centerComponent: React.Element; // 居中的视图
  rightComponent: React.Element; // 右侧的视图
}
export default class RowText extends React.PureComponent<Props> {

  static defaultProps = {
    isRequired: true,
    title: '送达机场',
    centerComponent: (<Text style={styles.centerText}>香港国际机场</Text>),
    rightComponent: null,
  }

  render() {
    const { isRequired, title, centerComponent, rightComponent } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          { isRequired ? <Text style={styles.star}>*</Text> : null }
          <Text style={styles.leftText}>{title}</Text>
        </View>
        <View style={styles.center}>
          {centerComponent}
        </View>
        <View style={styles.right}>
          {rightComponent && rightComponent}
        </View>
      </View>
    );
  }
}
