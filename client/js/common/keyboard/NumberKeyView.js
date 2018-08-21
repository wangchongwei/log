import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import lodash from 'lodash';
import KeyType from './KeyType';
import SingleKey from './SingleKey';
import deleteImg from './images/delete.png';
import utils from './util';

const width = Dimensions.get('window').width;



class MyClass extends React.PureComponent {

  state: {
    type: 'number' | 'symbol',
  }
  state = {
    type: 'number',
  }
  /**
   * 渲染第一排字母
   * @memberof MyClass
   */
  _renderFirst =(data: Array<Object>) => {
    return this._renderRow(data, data.length);
  }

  /**
   * 渲染第二排字母
   * 
   * @memberof MyClass
   */
  _renderTwo =(data: Array<Object>) => {
    const arr = utils.getRandomArray(data, 3)
    return this._renderRow(data, data.length === 5 ? 5 : 10);
  }

  /**
   * 切换大小写
   * 
   * @memberof MyClass
   */
  changeBigOrSmall =() => {
    this.setState({ type: this.state.type === 'number' ? 'symbol' : 'number' });
  }

  /**
   * 渲染第三排字母
   */
  _renderThree =(data: Array<Object>) => {
    return (
      <View style={styles.body}>
        <TouchableOpacity
          style={[styles.iconView, styles.border]}
          onPress={this.changeBigOrSmall}
        >
          <Text>{this.state.type === 'number' ? '#!?' : '123'}</Text>
        </TouchableOpacity>
        <View style={{ width: (width * 0.7) + 7, alignItems: 'center' }}>
          {this._renderRow(data)}
        </View>
        <TouchableOpacity
          style={[styles.iconView, styles.border]}
          onPress={this.props.delete && this.props.delete}
        >
          <Image
            source={deleteImg}
            style={styles.img}
            resizeMode='stretch'
          />
        </TouchableOpacity>
      </View>
    );
  }

  /**
   * 当一个按钮被按下
   * @param onPressKey : 被按下的按钮name
   * @memberof MyClass
   */
  _onChangeText =(onPressKey: string) => {
    this.props.onChangeText && this.props.onChangeText(onPressKey);
  }


  /**
   * 渲染每一排
   * 
   * @memberof MyClass
   */
  _renderRow =(data: Array<Object>, length: number = 10) => {
    const singleWidth = (width - 20) / length;
    return (
      <View style={{ flexDirection: 'row', flex: 1, height: 40, alignItems: 'center' }}>
        {data.map((item, index) => {
          return (
            <SingleKey
              onPress={this._onChangeText}
              ref={`singleKey${item.number}`}
              key={item.number}
              style={[{ height: 40, width: singleWidth, margin: 1 }, styles.border]}
              keyName={item.name}
            />);
        })}
      </View>
    );
  }


  render() {
    const numberListData = utils.getRandomArray(KeyType.numberKey, 5)
    const symbolListData = utils.getRandomArray(KeyType.symbolKey, 10)
    const firstRowListData = symbolListData.selectedArr
    const leftSysbolListData = utils.getRandomArray(symbolListData.leftArr, 9)

    const secondRowListData = leftSysbolListData.selectedArr
    const threeRowListData = leftSysbolListData.leftArr
    return (
      <View style={styles.container}>
        {this._renderFirst(
          this.state.type === 'number' ? numberListData.selectedArr: firstRowListData,
        )}
        {this._renderTwo(
          this.state.type === 'number' ? numberListData.leftArr : secondRowListData,
        )}
        {this._renderThree(threeRowListData)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconView: {
    width: (0.15 * width) - 7,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 1,
  },
  img: {
    width: 20,
    height: 20,
  },
  border: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#999',
  },
});

export default MyClass;
