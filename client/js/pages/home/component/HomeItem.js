/**
 * @flow
 * 首页-列表条目
 */
import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import img1 from '../../../images/img1.jpeg';
import img2 from '../../../images/img2.png';
import img3 from '../../../images/img3.jpeg';
import img4 from '../../../images/img4.jpeg';
import utils from 'utils';
import type ChatListDataItemType from '../type/ChatListDataType';

type Props = {
  item: ChatListDataItemType,
  index: number,
}

export default class HomeItem extends React.PureComponent<Props> {

  /** 获取图片 */
  _getImg =(): any => {
    const { item } = this.props;
    switch(item.icon) {
      case 1:
        return img1;
      case 2:
        return img2;
      case 3:
        return img3;
      case 4:
        return img4;
      default:
        console.warn('未获取到图片');
        return null;
    }
  }

  /** 条目点击事件 */
  _itemClick =() => {
    const { item } = this.props;
    console.log(item);
    utils.navigate('ChatPage')
  }

  render() {
    const { item } = this.props;
    return(
      <TouchableOpacity
        style={styles.view}
        onPress={this._itemClick}
      >
        <Image
          source={this._getImg()}
          style={styles.img}
          resizeMode='stretch'
        />
        <View style={styles.right}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.content} numberOfLines={1}>{item.text}</Text>
        </View>
        <View style={styles.parRight}>
          <Text>{item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  img: {
    width: 60,
    height: 60,
  },
  right: {
    paddingLeft: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    color: 'black',
  },
  content: {
    marginTop: 6,
    fontSize: 12,
  },
  parRight: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
});
