/**
 * @flow
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {}
class MyClass extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>mine</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MyClass
