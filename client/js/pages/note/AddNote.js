import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native'

const height = Dimensions.get('window').height

class MyClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>2018-05-23</Text>
          <Text>  深圳</Text>
          <Text>  晴</Text>
        </View>
        <ScrollView
          style={styles.scroll}
        />
        <View style={styles.bottom}>
          <View style={styles.flex1}><Text>语音</Text></View>
          <View style={styles.flex1}><Text>添加图片</Text></View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingLeft: 10,
    paddingRight: 10,
  },

  scroll: {
    height: height - 200,
  },

  bottom: {
    flex: 1,
    flexDirection: 'row',
  },

  flex1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

})

//make this component available to the app
export default MyClass
