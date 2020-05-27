import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Counter from './src/counter'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})
