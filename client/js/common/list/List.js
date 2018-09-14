/**
 * @flow
 * 对FlatList的上一层的封装
 */
import React from 'react';
import { View } from 'react-native';
import FlatList from './FlatList';

type Props = {
  load: Function; // 请求数据的方法
  parser: Function; // 对返回的数据解析的方法
  children?: React$Element<any>; // 子条目视图
}

type State = {
  loading: boolean; // 是否正在loading
  fullLoad: boolean; // 是否数据都加载完毕
  loadingErr: boolean; // 是否加载错误
  data: Array<Object>; // 数据源
}

/** 默认数据解析 */
function parserDel (json: Object) {
  return new Promise((resolver) => {
    resolver({
      data: json.data,
      count: json.count,
    });
  })
}

export default class List extends React.PureComponent<Props, State>{

  pageNo: number
  static defaultProps = {
    parser: (json: Object) => { parserDel(json) },
  }
  state = {
    loading: true,
    fullLoad: false,
    loadingErr: false,
    data: [],
  }

  UNSAFE_componentWillMount() {
    this._load()
  }
  pageNo = 1

  /** 数组数据拼接 */
  _appendData(data: Array<Object>, newData: Array<Object>): Array<Object> {
    return newData.length > 0 ? data.concat(newData) : data;
  }

  /** 刷新 */
  refresh =() => {
    this.pageNo = 1;
    this._load();
  }


  /** 请求数据 */
  _load =async() => {
    const { load, parser } = this.props;
    console.log(this.props);
    this.setState({
      loading: true,
      fullLoad: false,
      loadingErr: false,
    });
    try {
      const response = await load(this.pageNo);
      console.log(response);
      // 获取返回的数组数据和总数据条数
      const { data, count } = parser(response);
      console.log(data);
      console.log(count);
      if (!Array.isArray(data) || count == null) {
        console.warn('返回的列表数据格式错误!');
        this.setState({ loadingErr: true });
        return;
      }
      // 将数据拼接
      const newData = this._appendData(this.state.data, data);
      // 判断数据是否都加载完毕
      const ifAll = (count <= newData.length);
      if (ifAll) {
        this.setState({
          fullLoad: true,
          loading: false,
          data: newData,
        });
      } else {
        this.setState({ loading: false, data: newData });
      }
    } catch(err) {
      console.warn(err);
    }
  }

  render() {
    const { data, loading, fullLoad } = this.state;
    const { children, ...other } = this.props;
    console.log('list');
    return (
      <FlatList
        {...other}
        initialNumToRender={10}
        onEndReachedThreshold={0.01}
        data={data}
        loading={loading}
        fullLoad={fullLoad}
      >
        {children}
      </FlatList>
    );
  }
}