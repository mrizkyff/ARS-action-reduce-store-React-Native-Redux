import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { useState } from "react";


const App = () => {


  const Tombol = (props) => {
    return (
      <TouchableOpacity>
        <Text style={{ fontSize: 25, backgroundColor: props.warna }} onPress={props.onPress}>{props.judul}</Text>
      </TouchableOpacity>
    )
  }

  const [jumlah, setJumlah] = useState(0);

  const increment = () => {
    // Alert.alert('Halo ian, ini adalah fungsi increment!')
    setJumlah(jumlah + 1)
  }

  const decrement = () => {
    // Alert.alert('Halo ian, ini adalah fungsi increment!')
    setJumlah(jumlah - 1 )
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Basic Redux</Text>
      <Text style={styles.text}>Hello World!</Text>
      <Text style={{ fontSize: 25 }}>{jumlah}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Tombol warna='green' judul='INCREMENT 1' onPress={() => increment()} />
        <Tombol warna='red' judul='DECREMENT 1' onPress={() => decrement()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    fontSize: 25
  }
})

export default App
