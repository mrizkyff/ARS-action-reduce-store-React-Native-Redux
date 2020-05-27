import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Counter from './src/counter'
import { createStore } from "redux";
import { Provider } from "react-redux";


const initialState = {
  count: 10
}

const reducer = (state = initialState, action) => {
  // console.log(action);
  const payload = action.payload || 1
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + payload
      }
    case 'DECREMENT':
      return {
        count: state.count - payload
      }
    default:
      break;
  }
  return state
}

const store = createStore(reducer);

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
