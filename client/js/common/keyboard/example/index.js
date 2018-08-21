import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native'
import Keyboard from '../../keyboard'

const width = Dimensions.get('window').width

class MyClass extends React.PureComponent {


  render() {
    return (
      <View style={styles.container}>
        <Keyboard
          style={[styles.body, styles.border]}
          textStyle={{ fontSize: 18, color: 'red' }}
          secureTextEntry
          sure={(text) => {
            alert(text)
          }}
          onChangeText={(text) => {
            console.log(text)
          }}
        />
      </View>
    )
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
    width: 40,
    height: 30,
  },
  border: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'blue',
    width: 300,
  },

})

export default MyClass
