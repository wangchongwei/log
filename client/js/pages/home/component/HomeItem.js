/**
 * @flow
 * 首页-列表条目
 */
import React from 'react';
import {
  View, Text, StyleSheet, Image
} from 'react-native';
import img1 from '../../../images/img1.jpeg';
import img2 from '../../../images/img2.png';
import img3 from '../../../images/img3.jpeg';
import img4 from '../../../images/img4.jpeg';

type Props = {
  item: Object,
  index: number,
}

export default class HomeItem extends React.PureComponent<Props> {


  render() {
    return(
      <View style={styles.view}>
        <Image
          source={img1}
          style={styles.img}
          resizeMode='stretch'
        />
        <View style={styles.right}>
          <Text>name</Text>
          <Text>content</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  img: {
    width: 45,
    height: 45,
  },
  right: {
    paddingLeft: 10,
  },
});
