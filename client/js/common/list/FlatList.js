/**
 * @flow
 * 对flatlist的一层封装
 */
import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { Loading, LoadingText } from '../loadingState';
import Row from './Row';

type Props = {
  data: Array<Object>; // 数据源
  children?: React$Element<any>; // 子条目视图
  loading: boolean; // 是否正在加载
  fullLoad: boolean; // 是否所有数据加载完毕
}


class List extends React.PureComponent<Props> {


  /** 渲染子条目 */
  _renderItem =(info: Object): React$Element<any> => {
    return (
      <Row info={info}>
        {this.props.children}
      </Row>
    )
  }

  /** 足部视图 */
  _renderFooter =() => {
    const { loading, fullLoad } = this.props;
    if(loading) {
      return Loading();
    }
    if (fullLoad) {
      return LoadingText(2);
    }
    return LoadingText(3);
  }

  render() {
    const { data, ...other } = this.props;
    console.log('flatlist');
    return (
      <FlatList
        {...other}
        data={data}
        renderItem={this._renderItem}
        ListFooterComponent={this._renderFooter}
      />
    );
  }

}

export default List;
