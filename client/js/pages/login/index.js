import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native"
import KeyBoard from "../../common/keyboard"



class MyClass extends Component {

  /**
   * 点击完成
   */
  _sure =(text: string) => {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>login</Text>
        <KeyBoard
          style={styles.inputView}
          sure={this._sure}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  }
})

export default MyClass
