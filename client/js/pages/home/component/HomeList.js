/**
 * @flow
 * 首页-聊天列表
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'list';
import HomeItem from './HomeItem';

type Props = {

}
const data = [
  {}, {}, {}, {}, {}, {}, {},
];
export default class HomeList extends React.PureComponent<Props> {

  /** 数据请求 */
  _load =async(): Promise<Object> => {
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver({ data, count: 7 });
      }, 1500);
    });
  }

  /** 设置key值 */
  _keyExtractor =(item, index) => (index.toString()); 

  /** 数据解析 */
  _parser =(response: Object) => {
    return {
      data: response.data,
      count: response.count,
    };
  }

  /** 渲染间隔线 */
  _renderLine =() => (<View style={styles.line} />)

  render() {
    return (
      <List
        load={this._load}
        parser={this._parser}
        keyExtractor={this._keyExtractor}
        ItemSeperatorComponent={this._renderLine}
      >
        <HomeItem />
      </List>
    );
  }

} 

const styles = StyleSheet.create({
  line: {
    backgroundColor: 'black',
    height: 1,
    width: undefined,
  },
});
