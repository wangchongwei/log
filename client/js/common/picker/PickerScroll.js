/**
 * @flow
 * 选择的滚轮
 */
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';


type Props = {
  data: any; // 数据源
  onPickerChange: Function; // 当被选中的数据发生改变的回调
  componentKey: string; // 组件key值
}

type State = {
  currentIndex: number; // 当前数据下标
  data: Array<any>; // 数据源 
}

export default class PickerScroll extends React.PureComponent<Props, State>{

  static defaultProps = {
    data: [],
  }

  state = {
    currentIndex: 0,
    data: [].concat(this.props.data),
  }  

  componentDidMount() {
    this.onPickerChange();
  }

  /** 改变state中的数据源的方法 */
  changeStateData =(data: array<any>) => {
    this.setState({ data });
  }

  /** 设置默认被选中的数据 */
  setDefaultData =(item) => {
    console.log('=====', item);
    const { data } = this.state;
    const index = data.indexOf(item);
    if(index >= 0) {
      this._setDefaultCurrentIndex(index);
    } else {
      console.warn('所需要设置的值在数据源中不存在!');
    }
  }

  /** 当当前被选中的值发生改变 */
  onPickerChange =() => {
    const { onPickerChange, componentKey } = this.props;
    const { currentIndex, data } = this.state;
    if(currentIndex >= data.length) {
      console.warn('获取到的数据下标超出数据总长度!');
      return;
    }
    onPickerChange && onPickerChange(componentKey, data[currentIndex], currentIndex);
  }

  /** 设置默认被选中项  下标*/
  _setDefaultCurrentIndex =(index: number) => {
    console.log('inndex = ', index);
    this.changeCurrentIndex(index - 1);
  }

  changeCurrentIndex = async(x) => {
    console.log('_scrollToY');
    await this.setState({ currentIndex: x });
    this.onPickerChange();
    this._scrollToY(x);
  }

  onAnimationEnd =(e: Object) => {
    if(!this.refs.scroll) return;
    this._onScroll(e);
  }

  /** 监听scrollView的滚动事件 */
  _onScroll = async (e: Object) => {
    console.log('======');
    // 求出垂直方向上的偏移量 
    var offSetY = e.nativeEvent.contentOffset.y;
    const current = offSetY / 40;

    const a = parseInt(current / 1);
    const b = parseInt(current * 10 / 5);

    let x = a;
    if (2 * a < b) {
      x = a + 1;
    }
    this.changeCurrentIndex(x);
  }

  /** scrollView滚动y轴偏移单位量 */
  _scrollToY =(offsetY: number) => {
    if(this.refs.scroll) console.log('scroll yes', offsetY);
    this.refs.scroll && this.refs.scroll.scrollTo({ x:0, y: offsetY * 40, animated: true});
  }



  render() {
    const { data, style, ...other } = this.props;
    return(
      <View style={{ height: 160 }}>
        <ScrollView
          {...other}
          contentContainerStyle={styles.center}
          style={[styles.white, style]}
          ref='scroll'
          onMomentumScrollEnd={this.onAnimationEnd}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ height: 40 }} />
          {
            data.map((item, index) => (
              <View key={data[index]} style={[styles.itemView]}>
                <Text style={[styles.text, { color: this.state.currentIndex === index ? '#333333' : '#999999' }]}>{data[index]}</Text>
              </View>
            ))
          }
          <View style={{ height: 80 }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemView: {
    height: 40,
    justifyContent: 'center',
  },
  line: {
    height: .5,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 80,
  },
  text: {
    fontSize: 16,
  },
  style: {
    backgroundColor: 'white',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
