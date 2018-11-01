/**
 * @flow
 * 选择的滚轮
 */
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';


type Props = {
  data: any; // 数据源
}

type State = {
  currentIndex: number;
}

export default class PickerScroll extends React.PureComponent<Props, State>{

  state = {
    currentIndex: 0,
  }
  

  componentDidMount() {
    this._setDefaultCurrentIndex(this.state.currentIndex);
  }

  /** 设置默认被选中项 */
  _setDefaultCurrentIndex =(index: number) => {
    this._scrollToY(index - 1);
  }

  onAnimationEnd =(e: Object) => {
    if(!this.refs.scroll) return;
    this._onScroll(e);
  }

  /** 监听scrollView的滚动事件 */
  _onScroll =(e: Object) => {
    console.log('======');
    // 求出垂直方向上的偏移量 
    var offSetY = e.nativeEvent.contentOffset.y;
    const current = offSetY / 40;

    const a = parseInt(current / 1);
    const b = parseInt(current * 10 / 5);

    if(2 * a === b) {
      this._scrollToY(a);
      this.setState({ currentIndex: a });
    } else if (2 * a < b) {
      this._scrollToY(a + 1);
      this.setState({ currentIndex: a + 1 });
    }
  }

  /** scrollView滚动y轴偏移单位量 */
  _scrollToY =(offsetY: number) => {
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
