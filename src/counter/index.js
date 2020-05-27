import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react';


const Counter = () => {


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
        setJumlah(jumlah - 1)
    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>Basic Redux</Text>
                <Text style={styles.text}>Hello World!</Text>
                <Text style={{ fontSize: 25 }}>{jumlah}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Tombol warna='green' judul='INCREMENT 1' onPress={() => increment()}/>
                    <Tombol warna='red' judul='DECREMENT 1' onPress={() => decrement()}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        fontSize: 25
    }
})


export default Counter
