/**
 * @flow
 * 首页-聊天列表
 */
import React from 'react';
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
        <HomeItem />
      </List>
    );
  }

} 
