import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Counter from './src/counter'
import { Provider } from "react-redux";
import store from './src/redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Counter />
        </View>
      </Provider>
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
